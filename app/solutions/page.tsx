export default function SolutionsPage() {
  return (
    <main className="min-h-svh bg-[#0b1116] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <span className="size-1.5 rounded-full bg-white/60" />
          Solutions by Business Type
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Tailored AI Solutions for Every Business Stage</h1>

        {/* Startups & New Businesses */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">For Startups & New Businesses</h2>
            <span className="text-sm text-white/70">Starting from R4,999/month</span>
          </div>
          <p className="mt-2 text-white/80">Launch Strong, Scale Smart</p>
          <p className="mt-4 text-white/70 max-w-3xl">Starting a business is challenging enough without worrying about complex marketing technology. Our Startup Accelerator Package includes:</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• Professional website with AI-optimized design</li>
              <li>• Brand identity development</li>
              <li>• Social media setup and initial content</li>
              <li>• Basic automation workflows</li>
              <li>• Monthly AI-generated content</li>
              <li>• Growth strategy consultation</li>
            </ul>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/80">Starting from just R4,999/month – because every business deserves a professional start.</p>
              <div className="mt-4 flex gap-3">
                <a href="/pricing" className="px-5 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">View Starter Plan</a>
                <a href="/contact" className="px-5 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 transition">Talk to Us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Small & Medium Businesses */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">For Small & Medium Businesses</h2>
            <span className="text-sm text-white/70">From R9,999/month</span>
          </div>
          <p className="mt-2 text-white/80">Compete Like the Big Players</p>
          <p className="mt-4 text-white/70 max-w-3xl">Level the playing field with AI tools that make you look and perform like a much larger company:</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• Advanced e-commerce capabilities</li>
              <li>• Comprehensive marketing automation</li>
              <li>• Multi-channel campaign management</li>
              <li>• Customer relationship management</li>
              <li>• Performance analytics and insights</li>
              <li>• Dedicated account management</li>
            </ul>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/80">Flexible packages from R9,999/month – invest in growth, not complexity.</p>
              <div className="mt-4 flex gap-3">
                <a href="/pricing" className="px-5 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">View Growth Plan</a>
                <a href="/contact" className="px-5 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 transition">Speak to Sales</a>
              </div>
            </div>
          </div>
        </div>

        {/* Established Enterprises */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">For Established Enterprises</h2>
          <p className="mt-2 text-white/80">Scale Without Limits</p>
          <p className="mt-4 text-white/70 max-w-3xl">Transform your marketing operations with enterprise-grade AI solutions:</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• Custom AI model development</li>
              <li>• Advanced predictive analytics</li>
              <li>• Multi-market campaign orchestration</li>
              <li>• API integration with existing systems</li>
              <li>• Dedicated AI specialists team</li>
              <li>• White-label solutions available</li>
            </ul>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/80">Custom enterprise pricing – solutions as unique as your business.</p>
              <div className="mt-4 flex gap-3">
                <a href="/solutions" className="px-5 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">Explore Enterprise Solutions</a>
                <a href="/contact" className="px-5 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 transition">Speak to a Specialist</a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}