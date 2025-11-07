export default function ServicesPage() {
  return (
    <main className="min-h-svh bg-[#0b1116] text-white px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <span className="size-1.5 rounded-full bg-white/60" />
          Our Services
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">Comprehensive AI-Powered Solutions for Every Business Need</h1>
        <p className="mt-4 text-white/70 max-w-3xl">
          At ETHEREX, we offer a full spectrum of digital marketing and media services, all enhanced by cutting-edge AI technology. Whether you need a single service or a complete digital transformation, we have the expertise and tools to deliver exceptional results.
        </p>

        {/* 1. Website & E-Commerce Development */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">1. Website & E-Commerce Development</h2>
          <p className="mt-2 text-white/80">AI-Optimized Web Presence That Converts</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• Custom Website Design & Development</li>
              <li>• E-commerce Stores with AI-Powered Product Recommendations</li>
              <li>• Mobile-First Responsive Design</li>
              <li>• SEO Optimization with AI Content Analysis</li>
              <li>• Conversion Rate Optimization</li>
              <li>• Website Maintenance & Support</li>
            </ul>
            <div className="text-white/70">
              Our AI analyzes user behavior in real-time to optimize layouts, content placement, and calls-to-action, ensuring maximum conversion rates.
            </div>
          </div>
        </div>

        {/* 2. Content Creation & Management */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">2. Content Creation & Management</h2>
          <p className="mt-2 text-white/80">Content That Captivates and Converts</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• AI-Generated Blog Posts & Articles</li>
              <li>• Professional Photography & AI Image Enhancement</li>
              <li>• Video Production & AI Editing</li>
              <li>• Social Media Content Creation</li>
              <li>• Brand Storytelling & Copywriting</li>
              <li>• Content Calendar Management</li>
            </ul>
            <div className="text-white/70">
              Our AI ensures every piece of content is optimized for your target audience, maintaining brand consistency while maximizing engagement.
            </div>
          </div>
        </div>

        {/* 3. Marketing Automation & CRM */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">3. Marketing Automation & CRM</h2>
          <p className="mt-2 text-white/80">Set It and Scale It</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• Email Marketing Automation</li>
              <li>• Customer Journey Mapping & Automation</li>
              <li>• Lead Scoring & Nurturing</li>
              <li>• CRM Integration & Management</li>
              <li>• WhatsApp Business Automation</li>
              <li>• Sales Funnel Optimization</li>
            </ul>
            <div className="text-white/70">
              Our AI learns from every interaction, continuously improving your automation workflows for better results over time.
            </div>
          </div>
        </div>

        {/* 4. Social Media & Paid Advertising */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">4. Social Media & Paid Advertising</h2>
          <p className="mt-2 text-white/80">Reach the Right People at the Right Time</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• AI-Powered Ad Creation & Testing</li>
              <li>• Social Media Management Across All Platforms</li>
              <li>• Targeted Campaign Strategy</li>
              <li>• Real-Time Budget Optimization</li>
              <li>• Performance Analytics & Reporting</li>
              <li>• Influencer Marketing Coordination</li>
            </ul>
            <div className="text-white/70">
              Our AI optimizes your ad spend in real-time, ensuring every rand delivers maximum return on investment.
            </div>
          </div>
        </div>

        {/* 5. Custom Apps & Business Solutions */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">5. Custom Apps & Business Solutions</h2>
          <p className="mt-2 text-white/80">Tailored Technology for Your Unique Needs</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• Custom Mobile App Development</li>
              <li>• Business Process Automation</li>
              <li>• AI Chatbots & Virtual Assistants</li>
              <li>• Data Analytics Dashboards</li>
              <li>• API Integration Services</li>
              <li>• Cloud Migration & Management</li>
            </ul>
            <div className="text-white/70">
              We build intelligent solutions that grow with your business, automating repetitive tasks so you can focus on what matters most.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-4">
          <a href="/contact" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">Discuss Your Project</a>
          <a href="/pricing" className="px-6 py-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 transition">View Pricing</a>
        </div>
      </section>
    </main>
  );
}