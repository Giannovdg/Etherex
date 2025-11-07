export default function PricingPage() {
  const plans = [
    {
      name: "STARTER",
      price: "R4,999/month",
      description: "Perfect for new businesses and solopreneurs",
      features: [
        "Professional 5-page website",
        "Mobile-responsive design",
        "Basic SEO setup",
        "10 AI-generated social posts/month",
        "Email marketing setup",
        "Monthly performance report",
        "Email support",
      ],
    },
    {
      name: "GROWTH",
      price: "R9,999/month",
      description: "Ideal for growing businesses ready to scale",
      features: [
        "Everything in Starter, plus:",
        "Advanced website with e-commerce",
        "Marketing automation workflows",
        "30 AI-generated content pieces/month",
        "Social media ad management",
        "CRM integration",
        "A/B testing and optimization",
        "Priority support",
      ],
    },
    {
      name: "PROFESSIONAL",
      price: "R19,999/month",
      description: "For established businesses demanding excellence",
      features: [
        "Everything in Growth, plus:",
        "Custom AI solutions development",
        "Unlimited content creation",
        "Multi-channel campaign management",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "Custom app development",
        "24/7 priority support",
      ],
    },
    {
      name: "ENTERPRISE",
      price: "Custom Pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Completely customized AI solutions",
        "Dedicated team of specialists",
        "White-label options",
        "API access and integrations",
        "Compliance and security features",
        "Global deployment capabilities",
        "SLA-backed support",
      ],
    },
  ];

  return (
    <main className="min-h-svh bg-[#0b1116] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <span className="size-1.5 rounded-full bg-white/60" />
          Pricing
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Transparent Pricing for Every Business</h1>
        <p className="mt-4 text-white/70 max-w-3xl">No Hidden Fees. No Surprises. Just Value.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-semibold tracking-wide">{plan.name}</h2>
                <div className="text-sm text-white/70">{plan.price}</div>
              </div>
              <p className="mt-2 text-white/80">{plan.description}</p>
              <ul className="mt-6 space-y-2 text-white/80 flex-1">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-block px-5 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">Get Started</a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Need a custom plan?</h3>
          <p className="mt-2 text-white/70">We tailor pricing for enterprise requirements and multi-market deployments.</p>
          <div className="mt-4 flex items-center gap-4">
            <a href="/contact" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">Talk to Sales</a>
            <a href="/solutions" className="px-6 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 transition">Explore Solutions</a>
          </div>
        </div>
      </section>
    </main>
  );
}