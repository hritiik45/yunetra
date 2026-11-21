export const headerNavLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Ratnakhata', href: '/products/ratnakhata', isSubmenu: true },
  { name: 'BoundaryX', href: '/products/boundaryx', isSubmenu: true },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const footerNavSections = [
  {
    title: 'Products & Pricing',
    links: [
      { name: 'Ratnakhata', href: '/products/ratnakhata' },
      { name: 'BoundaryX', href: '/products/boundaryx' },
      { name: 'Pricing & Plans (INR)', href: '/pricing' },
      { name: 'BoundaryX App (Live)', href: 'https://boundaryx.yunetra.com/user/home', external: true },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Website Development', href: '/services' },
      { name: 'Mobile App Development', href: '/services' },
      { name: 'Custom Software', href: '/services' },
      { name: 'API Integrations', href: '/services' },
      { name: 'Maintenance & Support', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-and-conditions' },
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Shipping Policy', href: '/shipping-policy' },
    ],
  },
];
