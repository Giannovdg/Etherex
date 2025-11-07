export default function WorkPage() {
  return (
    <main className="min-h-svh bg-[#0b1116] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <span className="size-1.5 rounded-full bg-white/60" />
          Success Stories
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Real Results for Real Businesses</h1>
        <p className="mt-4 text-white/70 max-w-3xl">Featured Case Studies</p>

        {/* Local Restaurant Chain */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Local Restaurant Chain</h2>
            <span className="text-sm text-white/70">Hospitality • Multi-location</span>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Challenge</div>
              <p className="mt-2 text-white/80">Struggling with online orders and social media presence</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Solution</div>
              <p className="mt-2 text-white/80">AI-powered ordering system and automated social campaigns</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Results</div>
              <p className="mt-2 text-white/80">250% increase in online orders, 180% social engagement growth</p>
            </div>
          </div>
        </div>

        {/* E-commerce Startup */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">E-commerce Startup</h2>
            <span className="text-sm text-white/70">Retail • DTC</span>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Challenge</div>
              <p className="mt-2 text-white/80">Limited budget, needed professional presence quickly</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Solution</div>
              <p className="mt-2 text-white/80">Rapid AI website deployment with integrated marketing</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Results</div>
              <p className="mt-2 text-white/80">R500K in sales within 3 months, 45% conversion rate</p>
            </div>
          </div>
        </div>

        {/* Professional Services Firm */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Professional Services Firm</h2>
            <span className="text-sm text-white/70">Consulting • B2B</span>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Challenge</div>
              <p className="mt-2 text-white/80">Manual processes eating up billable hours</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Solution</div>
              <p className="mt-2 text-white/80">Custom automation workflows and AI appointment system</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/60">Results</div>
              <p className="mt-2 text-white/80">30 hours/week saved, 40% more client capacity</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}