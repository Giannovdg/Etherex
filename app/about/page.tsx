import { BackgroundPattern } from "@/components/background-pattern"
import Earth from "@/components/globe"
import { SparklesGblobe } from "@/components/sparkles-globe"

export default function AboutPage() {
  return (
    <>
      <BackgroundPattern />
      <main className="relative min-h-svh text-white px-6 py-16 z-10 flex items-center">
        {/* About Us indicator */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>ABOUT US</span>
          </div>
        </div>

        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Main Title */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Our Story</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Building Bridges Between Business and Technology
                  </span>
                </h1>
              </div>

              {/* Body Text */}
              <div className="space-y-6 text-lg text-white/70 max-w-xl">
                <p>
                  ETHEREX was born from a simple observation: while AI technology was revolutionizing industries worldwide, many South African businesses were being left behind. Not because they didn't want to innovate, but because existing solutions were either too complex, too expensive, or simply not designed with their needs in mind.
                </p>
                <p>
                  We founded ETHEREX to change that narrative. Our name reflects our vision – creating connections that matter. Just as ether represents the bonds that hold molecules together, we create the vital connections between businesses and the technology that can transform them.
                </p>
                <p>
                  Today, we're proud to be the bridge that helps businesses of all sizes harness the power of AI marketing. From the entrepreneur working from their kitchen table to established companies ready to scale, we provide the tools, expertise, and support needed to thrive in the digital economy.
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Countries Served</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">5+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column - Globe and Global Reach */}
            <div className="flex flex-col items-center space-y-12">
              {/* Rotating Earth globe with sparkles background (match home layout) */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 -z-10 pointer-events-none [mask-image:radial-gradient(50%_60%,white,transparent)]">
                  <SparklesGblobe density={1200} className="absolute inset-0" />
                </div>
                <Earth className="mx-auto max-w-[160px] md:max-w-[180px]" />
              </div>

              {/* Global Reach Section */}
              <div className="text-center space-y-4 max-w-md">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Global Reach
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Connecting businesses worldwide with innovative digital solutions that transcend geographical boundaries
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}