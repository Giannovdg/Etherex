import { AnimatedBackground } from "@/components/ui/animated-background" // Declare the AnimatedBackground variable

export default function Home() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Minimal Header */}
        <header className="flex justify-between items-center p-6 lg:p-8">
          <div className="text-xs lg:text-sm text-gray-400 tracking-[0.2em]">EST. 2024</div>
          <nav className="flex space-x-6 lg:space-x-8 text-xs lg:text-sm tracking-[0.15em]">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              ABOUT
            </a>
            <a href="#work" className="text-gray-400 hover:text-white transition-colors duration-300">
              WORK
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-300">
              PRICING
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              CONTACT
            </a>
          </nav>
        </header>

        {/* Main Content - Centered and Layered */}
        <div className="flex-1 flex items-center justify-center relative px-6 lg:px-12">
          {/* Background Text Elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-[20vw] lg:text-[15vw] font-black tracking-tighter text-white select-none">ETHEREX</div>
          </div>

          {/* Floating Text Layers */}
          <div className="relative text-center max-w-4xl">
            {/* Main Brand */}
            <div className="mb-8 lg:mb-12">
              <h1 className="text-5xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-4 lg:mb-6">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  ETHEREX
                </span>
              </h1>
              <div className="flex items-center justify-center space-x-4 lg:space-x-6">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1 max-w-20 lg:max-w-32"></div>
                <p className="text-sm lg:text-base text-gray-400 tracking-[0.3em] font-light">DIGITAL EXCELLENCE</p>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1 max-w-20 lg:max-w-32"></div>
              </div>
            </div>

            {/* Centered Pills */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-16 lg:mt-20 mb-8 lg:mb-12">
              {/* Premium Card */}
              <div className="group relative">
                <div className="px-6 py-3 backdrop-blur-md bg-white/[0.12] border border-white/[0.2] rounded-full hover:bg-white/[0.18] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                  <span className="relative text-sm font-medium tracking-[0.1em] text-white">PREMIUM</span>
                </div>
              </div>

              {/* Innovative Card */}
              <div className="group relative">
                <div className="px-6 py-3 backdrop-blur-md bg-white/[0.12] border border-white/[0.2] rounded-full hover:bg-white/[0.18] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                  <span className="relative text-sm font-medium tracking-[0.1em] text-white">INNOVATIVE</span>
                </div>
              </div>

              {/* Exclusive Card */}
              <div className="group relative">
                <div className="px-6 py-3 backdrop-blur-md bg-white/[0.12] border border-white/[0.2] rounded-full hover:bg-white/[0.18] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                  <span className="relative text-sm font-medium tracking-[0.1em] text-white">EXCLUSIVE</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm lg:text-base tracking-wide hover:bg-white/20 transition-all duration-300">
                <span className="relative z-10">EXPLORE OUR WORK</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <div className="flex items-center space-x-3 text-sm lg:text-base text-gray-400">
                <span className="tracking-wide">SCROLL TO DISCOVER</span>
                <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Side Elements */}
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
  )
}
