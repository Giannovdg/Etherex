export default function ResourcesPage() {
  return (
    <main className="min-h-svh bg-[#0b1116] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <span className="size-1.5 rounded-full bg-white/60" />
          Learn & Grow
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Your AI Marketing Knowledge Hub</h1>

        {/* Getting Started Guides */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Getting Started Guides</h2>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• AI Marketing 101: A Beginner's Guide</li>
            <li>• Choosing the Right Digital Services for Your Business</li>
            <li>• Understanding Marketing Automation</li>
            <li>• Social Media Success for South African Businesses</li>
          </ul>
        </div>

        {/* Industry Insights */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Industry Insights</h2>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• AI Trends Shaping South African Business</li>
            <li>• Digital Marketing Benchmarks 2025</li>
            <li>• Case Studies: AI Success Stories</li>
            <li>• Monthly Market Analysis Reports</li>
          </ul>
        </div>

        {/* Tools & Templates */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Tools & Templates</h2>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• Marketing Budget Calculator</li>
            <li>• Content Calendar Templates</li>
            <li>• SEO Checklist for Businesses</li>
            <li>• Social Media Sizing Guide</li>
          </ul>
        </div>

        {/* Frequently Asked Questions */}
        <div id="faq" className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-medium">How quickly can I get started?</h3>
              <p className="mt-2 text-white/80">Most clients are up and running within 48–72 hours. Our AI-powered onboarding process means we can deploy your initial solutions quickly while we work on customizations.</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium">Do I need technical knowledge to use your services?</h3>
              <p className="mt-2 text-white/80">Not at all! We design everything to be user-friendly. If you can use email and social media, you can use our solutions. We also provide training and support.</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium">Can I upgrade or downgrade my package?</h3>
              <p className="mt-2 text-white/80">Absolutely. We believe in growing with you. You can adjust your package monthly to match your business needs.</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium">What makes ETHEREX different from other agencies?</h3>
              <p className="mt-2 text-white/80">We combine genuine AI innovation with local market understanding and a commitment to accessibility. Our solutions are powerful enough for enterprises yet simple enough for startups.</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium">Do you work with businesses outside South Africa?</h3>
              <p className="mt-2 text-white/80">Yes! While we specialize in the South African market, our solutions work globally. We have clients across Africa and internationally.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}