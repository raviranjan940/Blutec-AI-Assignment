// Replaces Next.js server actions. The original site posts enquiries to its own
// server ("sendEnquiry"); this clone validates in the browser and reports success.
// Set VITE_ENQUIRY_ENDPOINT to your own API URL to deliver enquiries for real.
const ENQUIRY_ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT || '';

async function sendEnquiry(_prev, formData) {
  const data = Object.fromEntries(formData.entries());
  if (data.website) return { ok: true };
  const errors = {};
  if (!data.name || String(data.name).trim().length < 2) errors.name = 'Please tell us your name.';
  if (!data.phone || String(data.phone).replace(/\D/g, '').length < 7) errors.phone = 'Please add a phone or WhatsApp number.';
  if (data.email && !/^\S+@\S+\.\S+$/.test(String(data.email))) errors.email = 'That email does not look right.';
  if (Object.keys(errors).length) return { ok: false, message: 'Please check the highlighted fields.', errors };
  if (ENQUIRY_ENDPOINT) {
    try {
      const res = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
    } catch {
      return { ok: false, message: 'We could not send that just now. Please try WhatsApp instead.' };
    }
  }
  return { ok: true };
}

const actions = { sendEnquiry };

export const callServer = async () => {
  throw new Error('No server in this build');
};
export const findSourceMapURL = () => null;
export const createServerReference = (_id, _call, _enc, _find, name) =>
  actions[name] || (async () => ({ ok: false, message: 'Not available' }));
