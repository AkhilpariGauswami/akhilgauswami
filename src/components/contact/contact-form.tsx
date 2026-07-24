'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const fieldClass =
  'w-full rounded-xl border border-transparent bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-background'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_30px_60px_-40px_rgba(30,27,75,0.4)] md:p-8">
      {submitted ? (
        <div className="flex min-h-80 flex-col items-center justify-center text-center">
          <CheckCircle2 className="size-12 text-primary" />
          <h2 className="mt-4 font-serif text-2xl font-bold text-foreground">Message sent</h2>
          <p className="mt-2 max-w-sm text-muted-foreground">
            Thanks for reaching out. I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input id="name" name="name" required placeholder="Jane Doe" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              placeholder="How can we work together?"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Message
              <Send className="size-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
