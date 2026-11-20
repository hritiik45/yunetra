import { CONTACT } from '../data/contact';

/**
 * Delivers a form submission to the owner's inbox with no backend, via the
 * FormSubmit.co AJAX endpoint. The first ever submission makes FormSubmit email
 * an activation link to the inbox; once confirmed, every submission arrives as
 * a formatted email (replying goes to the submitter's address).
 *
 * @param {Record<string,string>} fields  field name -> value
 * @param {{subject?: string}} [meta]
 * @returns {Promise<void>} rejects when delivery fails
 */
export async function submitForm(fields, { subject = 'New website enquiry' } = {}) {
  let res;
  try {
    res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...fields,
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
      }),
    });
  } catch {
    throw new Error('network');
  }

  let data = null;
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }
  if (!res.ok || (data && (data.success === 'false' || data.success === false))) {
    throw new Error((data && data.message) || 'failed');
  }
}
