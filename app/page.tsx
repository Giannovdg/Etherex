import { Suspense, lazy } from "react";
import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ETHEREX | AI-Powered Marketing Solutions for South African Businesses",
  description:
    "Transform your business with accessible AI marketing solutions. From websites to automation, ETHEREX makes cutting-edge technology work for every South African business. Start today!",
  keywords: [
    "AI marketing South Africa",
    "digital marketing agency",
    "web development",
    "marketing automation",
    "content creation",
    "social media management",
    "affordable AI solutions",
  ],
};

// Lazy load heavy components for better performance
const AnimatedBackground = lazy(() => import("@/components/ui/animated-background").then(module => ({ default: module.AnimatedBackground })));
const Globe = lazy(() => import("@/components/animated-globe/components/globe").then(module => ({ default: module.Globe })));
const SparklesGblobe = lazy(() => import("@/components/sparkles-globe").then(module => ({ default: module.SparklesGblobe })));
const ServicesSection = lazy(() => import("@/components/services-section"));

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white w-full">
      {/* Hero replaced with Etherex Hero */}
      <section className="relative overflow-hidden">
        <div className="min-h-screen relative bg-transparent text-white">
          <div className="absolute inset-0 z-0">
            <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />}>
              <AnimatedBackground />
            </Suspense>
          </div>
          <div className="relative z-10 min-h-screen flex flex-col">
            <header className="flex justify-between items-center p-6 lg:p-8">
              <div className="text-xs lg:text-sm text-gray-400 tracking-[0.2em]">EST. 2024</div>
              <nav className="flex space-x-6 lg:space-x-8 text-xs lg:text-sm tracking-[0.15em]">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">ABOUT</a>
                <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-300">WORK</a>
                <a href="/solutions" className="text-gray-400 hover:text-white transition-colors duration-300">SOLUTIONS</a>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">SERVICES</a>
                <a href="/pricing" className="text-gray-400 hover:text-white transition-colors duration-300">PRICING</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">CONTACT</a>
              </nav>
            </header>
            <div className="flex-1 flex items-center justify-center relative px-6 lg:px-12">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="text-[20vw] lg:text-[15vw] font-black tracking-tighter text-white select-none">ETHEREX</div>
              </div>
              <div className="relative text-center max-w-4xl">
                <div className="mb-8 lg:mb-12">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-4 lg:mb-6">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                      Transform Your Business with AI-Powered Marketing
                    </span>
                  </h1>
                  <p className="mx-auto max-w-3xl text-sm lg:text-base text-white/80 leading-relaxed">
                    From startup to enterprise, we make cutting-edge AI marketing accessible for every business. Create stunning websites, automate your marketing, and scale your growth with intelligent solutions designed for the South African market.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-16 lg:mt-20 mb-8 lg:mb-12">
                  <div className="group relative">
                    <div className="px-6 py-3 backdrop-blur-md bg-white/[0.12] border border-white/[0.2] rounded-full hover:bg-white/[0.18] transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                      <span className="relative text-sm font-medium tracking-[0.1em] text-white">PREMIUM</span>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="px-6 py-3 backdrop-blur-md bg-white/[0.12] border border-white/[0.2] rounded-full hover:bg-white/[0.18] transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                      <span className="relative text-sm font-medium tracking-[0.1em] text-white">INNOVATIVE</span>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="px-6 py-3 backdrop-blur-md bg-white/[0.12] border border-white/[0.2] rounded-full hover:bg-white/[0.18] transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                      <span className="relative text-sm font-medium tracking-[0.1em] text-white">EXCLUSIVE</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <a href="/contact" className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm lg:text-base tracking-wide hover:bg-white/20 transition-all duration-300">
                    <span className="relative z-10">Start Your AI Journey</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  <a href="/services" className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-sm lg:text-base tracking-wide hover:bg-white/10 transition-all duration-300">
                    <span className="relative z-10">Explore Our Services</span>
                  </a>
                  {/* Removed scroll indicator per request */}
                </div>
              </div>
              <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="writing-mode-vertical text-xs tracking-[0.4em] text-gray-500 opacity-60">
                  CREATIVE • STUDIO • 2024
                </div>
              </div>
              <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                <div className="writing-mode-vertical text-xs tracking-[0.4em] text-gray-500 opacity-60">
                  DESIGN • DEVELOP • DELIVER
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition & Key Benefits */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="size-1.5 rounded-full bg-white/60" />
              Why ETHEREX?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">We democratize AI-powered marketing</h2>
            <p className="mt-4 text-white/70 max-w-3xl">
              We believe every business deserves access to powerful AI marketing tools, regardless of size or budget. Our mission is to democratize AI-powered marketing, making it as accessible to the corner café as it is to the corporate giant.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">AI That Works for Everyone</h3>
              <p className="mt-2 text-white/70">No tech degree required. Our intuitive AI tools are designed for real people running real businesses.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Pricing That Makes Sense</h3>
              <p className="mt-2 text-white/70">Flexible packages from startup-friendly to enterprise-scale. Pay for what you need, scale as you grow.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Local Expertise, Global Standards</h3>
              <p className="mt-2 text-white/70">We understand the South African market while delivering world-class solutions that compete globally.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Results in Days, Not Months</h3>
              <p className="mt-2 text-white/70">Our AI-powered workflows deliver professional websites, campaigns, and content faster than traditional agencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview removed to reduce homepage crowding; see /services */}

      {/* Trust Indicators */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-4xl font-bold">200+</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-white/60">Businesses Transformed</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-4xl font-bold">95%</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-white/60">Client Satisfaction Rate</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-4xl font-bold">3x</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-white/60">Average ROI on Spend</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-4xl font-bold">24/7</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-white/60">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="values" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="size-1.5 rounded-full bg-white/60" />
              Our Values
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">What guides everything we build</h2>
            <p className="mt-4 text-white/70 max-w-3xl">
              We design with people first. Every solution we ship blends simplicity, impact, and trust — so technology empowers rather than intimidates.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Accessibility First</h3>
              <p className="mt-2 text-white/70">Technology should empower, not intimidate. We design every solution to be user-friendly, regardless of technical expertise.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Innovation with Purpose</h3>
              <p className="mt-2 text-white/70">We leverage cutting-edge AI not for the sake of technology, but to deliver real business results that matter.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Transparent Partnership</h3>
              <p className="mt-2 text-white/70">No jargon, no hidden fees, no surprises. We believe in clear communication and honest relationships.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Growth for All</h3>
              <p className="mt-2 text-white/70">Your success is our success. We're committed to helping every client achieve sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About section with globe effect */}
      <section
        id="about"
        className="relative min-h-svh flex items-center px-4 sm:px-6 py-24 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:-ml-4">
            <span className="inline-flex items-center gap-2 text-xs rounded-full border border-[#3273ff]/40 bg-[#0f1c35] px-3 py-1 animate-fade-up">
              <span className="size-1.5 rounded-full bg-[#3273ff]" />
              About Us
            </span>
            <h2 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight tracking-tight animate-fade-up anim-delay-200">
              Our Story
              <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#7aa2ff] to-[#ff7ad6] bg-clip-text text-transparent">
                Building Bridges Between Business and Technology
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-[660px] animate-fade-up anim-delay-300">
              ETHEREX was born from a simple observation: while AI technology was revolutionizing industries worldwide,
              many South African businesses were being left behind. Not because they didn’t want to innovate, but because
              existing solutions were either too complex, too expensive, or simply not designed with their needs in mind.
            </p>
            <p className="mt-4 text-sm md:text-base text-white/60 max-w-[660px] animate-fade-up anim-delay-400">
              We founded ETHEREX to change that narrative. Our name reflects our vision – creating connections that matter.
              Just as ether represents the bonds that hold molecules together, we create the vital connections between
              businesses and the technology that can transform them.
            </p>
            <p className="mt-4 text-sm md:text-base text-white/60 max-w-[660px] animate-fade-up anim-delay-500">
              Today, we’re proud to be the bridge that helps businesses of all sizes harness the power of AI marketing.
              From the entrepreneur working from their kitchen table to established companies ready to scale, we provide the tools,
              expertise, and support needed to thrive in the digital age.
            </p>
          </div>

          <div className="relative pl-4 flex flex-col items-center">
            {/* Background sparkles positioned behind, not affecting layout */}
            <div className="absolute inset-0 -z-10 pointer-events-none [mask-image:radial-gradient(50%_60%,white,transparent)]">
              <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />}>
                <SparklesGblobe density={1200} className="absolute inset-0" />
              </Suspense>
            </div>
            <div className="relative z-10 animate-fade-up anim-delay-300">
              <Suspense fallback={<div className="mx-auto max-w-[140px] md:max-w-[160px] aspect-square bg-blue-500/20 rounded-full animate-pulse" />}>
                <div className="mx-auto w-[140px] md:w-[160px] aspect-square">
                  <Globe />
                </div>
              </Suspense>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-medium bg-gradient-to-r from-[#7aa2ff] to-[#ff7ad6] bg-clip-text text-transparent">Global Reach</h3>
              <p className="mt-2 text-white/70 max-w-md mx-auto">Connecting businesses worldwide with innovative digital solutions that transcend geographical boundaries.</p>
              <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-white/10 relative">
                <span className="absolute left-1/2 -translate-x-1/2 -top-2 w-2 h-2 rounded-full bg-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ETHEREX? */}
      <section id="why" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="size-1.5 rounded-full bg-white/60" />
              Why Choose ETHEREX?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">Local strength, global standards</h2>
            <p className="mt-4 text-white/70 max-w-3xl">
              We’re proudly South African and deeply understand local market dynamics. At the same time, we deliver solutions that meet international standards so you can compete anywhere.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Local Understanding, Global Excellence</h3>
              <p className="mt-2 text-white/70">We're proudly South African, deeply understanding local market dynamics, consumer behavior, and business challenges. Yet we deliver solutions that meet international standards, ensuring our clients can compete both locally and globally.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">AI That Actually Works</h3>
              <p className="mt-2 text-white/70">While others talk about AI, we deliver it. Our proprietary AI tools and workflows are battle-tested, delivering measurable results for businesses across industries.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium">Support That Never Sleeps</h3>
              <p className="mt-2 text-white/70">Our AI-powered support system means you're never alone. Get instant answers, real-time assistance, and human expertise when you need it most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio section removed as requested */}

      <section id="contact" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Get in Touch</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-center">View-only contact details below — no forms required.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="size-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wide text-white/60">Email</div>
              <div className="mt-2 text-lg font-medium">x@monno.co.za</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="size-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wide text-white/60">Phone</div>
              <div className="mt-2 text-lg font-medium">084 759 2845</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
