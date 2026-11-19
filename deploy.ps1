
$ErrorActionPreference = "Stop"

# Yunetra deployment configuration
$Server = "yunetra@200.141.11.186"
$Key = Join-Path $HOME ".ssh\yunetra_vps"
$RemotePath = "/home/yunetra/htdocs/yunetra.com"

$ProjectPath = $PSScriptRoot
$DistPath = Join-Path $ProjectPath "dist"

Write-Host "`n=== Yunetra Production Deployment ===" -ForegroundColor Cyan

# Check SSH key
if (!(Test-Path $Key)) {
    throw "SSH key not found: $Key"
}

# Build fresh production files
Write-Host "`n[1/4] Building website..." -ForegroundColor Yellow
Push-Location $ProjectPath

try {
    npm run build

    if ($LASTEXITCODE -ne 0) {
        throw "Build failed. Live website has not been uploaded."
    }
}
finally {
    Pop-Location
}

if (!(Test-Path (Join-Path $DistPath "index.html"))) {
    throw "Build output missing: dist/index.html"
}

# Check SSH connection before uploading
Write-Host "`n[2/4] Checking SSH connection..." -ForegroundColor Yellow
ssh -i $Key $Server "whoami"

if ($LASTEXITCODE -ne 0) {
    throw "SSH connection failed."
}

# Upload Vite build files as the yunetra user
Write-Host "`n[3/4] Uploading production files..." -ForegroundColor Yellow
scp -i $Key -r "$DistPath\*" "${Server}:${RemotePath}/"

if ($LASTEXITCODE -ne 0) {
    throw "Upload failed. Check the SSH connection and destination permissions."
}

# Set permissions as the site user
Write-Host "`n[4/4] Verifying deployment..." -ForegroundColor Yellow
ssh -i $Key $Server "find '$RemotePath' -type d -exec chmod 750 {} \; && find '$RemotePath' -type f -exec chmod 640 {} \; && test -s '$RemotePath/index.html' && echo DEPLOYMENT_FILES_OK"

if ($LASTEXITCODE -ne 0) {
    throw "Deployment verification failed."
}

Write-Host "`nDeployment completed successfully." -ForegroundColor Green
Write-Host "Website: https://yunetra.com" -ForegroundColor Cyan
