import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-svh bg-[#0b1116] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-center">Let's Transform Your Business Together</h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto text-center">Your AI Journey Starts with a Conversation</p>
        <p className="mt-2 text-white/60 max-w-3xl mx-auto text-center">
          Whether you're just starting out or ready to scale, we're here to help. Our team of AI experts and marketing strategists are standing by to understand your unique challenges and craft a solution that fits your business perfectly.
        </p>

        {/* Contact Form */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Name (Required)</label>
                <input required type="text" className="rounded-lg bg-[#0e141a] border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" placeholder="Your full name" />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Email (Required)</label>
                <input required type="email" className="rounded-lg bg-[#0e141a] border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" placeholder="you@company.com" />
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Phone Number (Optional)</label>
                <input type="tel" className="rounded-lg bg-[#0e141a] border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" placeholder="e.g. 082 555 0100" />
              </div>
              {/* Company */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Company Name (Optional)</label>
                <input type="text" className="rounded-lg bg-[#0e141a] border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" placeholder="Your company" />
              </div>
              {/* Business Type */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Business Type</label>
                <select className="rounded-lg bg-[#0e141a] border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20">
                  <option>Startup</option>
                  <option>Small Business</option>
                  <option>Enterprise</option>
                  <option>Other</option>
                </select>
              </div>
              {/* Preferred Contact Method */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Preferred Contact Method</label>
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-2 text-white/80"><input type="radio" name="contact_method" defaultChecked /> Email</label>
                  <label className="flex items-center gap-2 text-white/80"><input type="radio" name="contact_method" /> Phone</label>
                  <label className="flex items-center gap-2 text-white/80"><input type="radio" name="contact_method" /> WhatsApp</label>
                </div>
              </div>
              {/* Services Interested In */}
              <div className="md:col-span-2">
                <label className="text-sm text-white/70">Services Interested In</label>
                <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3 text-white/80">
                  {[
                    "Website Design",
                    "AI Marketing",
                    "Automation",
                    "E-commerce",
                    "Content & SEO",
                    "Custom Apps",
                  ].map((s) => (
                    <label key={s} className="flex items-center gap-2"><input type="checkbox" /> {s}</label>
                  ))}
                </div>
              </div>
              {/* Message */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm text-white/70">Message</label>
                <textarea rows={5} className="rounded-lg bg-[#0e141a] border border-white/15 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" placeholder="Tell us about your project or goals" />
              </div>
              {/* Submit */}
              <div className="md:col-span-2">
                <button className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">Send Message</button>
              </div>
            </form>
          </div>

          {/* Direct Contact & Info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Direct Contact</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3"><Mail className="size-5" /><span>hello@etherex.co.za</span></div>
              <div className="flex items-center gap-3"><Phone className="size-5" /><span>087 555 0100</span></div>
              <div className="flex items-center gap-3"><span className="size-5 rounded-full bg-white/10 grid place-items-center text-xs">WA</span><span>082 555 0100</span></div>
            </div>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wide text-white/60">Office Hours</div>
              <p className="mt-2 text-white/80">Monday - Friday, 8:00 AM - 6:00 PM SAST</p>
              <p className="mt-1 text-white/60">AI Support: Available 24/7</p>
            </div>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wide text-white/60">Our Locations</div>
              <div className="mt-3 space-y-4 text-white/80">
                <div>
                  <div className="font-medium">Cape Town Office</div>
                  <div>123 Innovation Drive</div>
                  <div>Century City, Cape Town</div>
                  <div>7441</div>
                </div>
                <div>
                  <div className="font-medium">Johannesburg Office</div>
                  <div>456 Digital Avenue</div>
                  <div>Sandton, Johannesburg</div>
                  <div>2196</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}