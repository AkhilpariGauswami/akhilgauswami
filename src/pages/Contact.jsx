import { useState } from 'react';
import { Mail, Send, Download, ArrowUpRight } from 'lucide-react';
import Button from '../components/ui/Button';
import useDocumentTitle from '../hooks/useDocumentTitle';

// GitHub URL intentionally kept as "Goswami" — see Footer.jsx for why.
const DIRECT_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/TODO' },
  { label: 'GitHub', href: 'https://github.com/AkhilpariGoswami' },
  { label: 'Read.cv', href: 'https://read.cv/TODO' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useDocumentTitle(
    'Get in Touch',
    'Product and frontend roles, freelance work, or just an idea worth talking through.'
  );

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    // TODO: wire to Formspree or EmailJS — same integration point used in
    // the previous static build's stub. Swap this block for the real call:
    //   await fetch('https://formspree.io/f/XXXXXXX', { method: 'POST', body: JSON.stringify(form) })
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <section className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-8 py-32 text-center">
        <h1 className="font-display text-4xl font-bold italic text-ink">Message sent.</h1>
        <p className="mt-4 max-w-md font-body text-body">
          Thanks for reaching out — I typically respond within 48 hours.
        </p>
        <Button to="/" variant="secondary" className="mt-8">
          Back to home
        </Button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1200px] px-8 py-20 md:py-28">
      <span className="inline-flex items-center gap-2 rounded-full bg-tint px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Open to opportunities
      </span>

      <h1 className="mt-6 font-display text-5xl font-black italic text-ink md:text-6xl">Get in Touch</h1>

      <p className="mt-6 max-w-xl font-body text-lg text-body">
        Whether it's a product or frontend role, a freelance project, or just
        an idea worth talking through — I'd like to hear about it.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">Direct Contact</p>
            <a
              href="mailto:hello@akhilpari.com"
              className="mt-3 flex items-center gap-3 font-body text-ink hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-3">
                <Mail size={16} />
              </span>
              hello@akhilpari.com
            </a>
          </div>

          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-wide text-muted">Digital Presence</p>
            <div className="mt-3 flex flex-col gap-2">
              {DIRECT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1 font-body text-body hover:text-primary"
                >
                  {link.label} <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          <Button href="/resume.pdf" variant="secondary" icon={Download} iconPosition="left" className="mt-10">
            Download Resume
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border-2 bg-white p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name">
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClasses}
              />
            </Field>
            <Field label="Email Address">
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClasses}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Subject">
              <input
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we work together?"
                className={inputClasses}
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Message">
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project, timeline, and what you're looking to achieve…"
                className={inputClasses}
              />
            </Field>
          </div>

          <Button type="submit" disabled={status === 'sending'} icon={Send} className="mt-6 w-full sm:w-auto">
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
}

const inputClasses =
  'w-full rounded-lg border border-border-2 bg-surface-2 px-4 py-2.5 font-body text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none';

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="font-body text-sm font-medium text-ink">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
