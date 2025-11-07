"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="w-full h-full py-20 bg-[#0a0e1a]">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans mb-4">Our Services</h2>
      <p className="max-w-7xl pl-4 mx-auto text-sm md:text-lg text-neutral-400 font-sans mb-8">
        Digital excellence across every discipline
      </p>
      <Carousel items={cards} />
    </div>
  )
}

const ServiceContent = ({
  title,
  description,
  features,
}: { title: string; description: string; features: string[] }) => {
  return (
    <div className="bg-[#0f1420] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-300 text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
        <span className="font-bold text-white text-xl md:text-2xl block mb-4">{title}</span>
        {description}
      </p>
      <div className="space-y-4 max-w-3xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <p className="text-neutral-400 text-sm md:text-base">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    category: "Development",
    title: "Web Development",
    src: "/modern-web-development-coding-screen-dark-theme.jpg",
    content: (
      <ServiceContent
        title="Crafting Digital Experiences"
        description="We build responsive, high-performance websites that combine stunning design with cutting-edge technology. From landing pages to complex web applications, we deliver solutions that drive results."
        features={[
          "Custom website design and development",
          "Responsive layouts for all devices",
          "Performance optimization and SEO",
          "Modern frameworks (React, Next.js, Vue)",
          "E-commerce and CMS integration",
        ]}
      />
    ),
  },
  {
    category: "Development",
    title: "App Development",
    src: "/mobile-app-development-smartphone-interface-dark.jpg",
    content: (
      <ServiceContent
        title="Mobile Solutions That Scale"
        description="Transform your ideas into powerful mobile applications. We create native and cross-platform apps that deliver seamless user experiences and drive engagement."
        features={[
          "iOS and Android native development",
          "Cross-platform solutions (React Native, Flutter)",
          "Intuitive UI/UX design",
          "API integration and backend services",
          "App store optimization and deployment",
        ]}
      />
    ),
  },
  {
    category: "Design",
    title: "Graphic Design",
    src: "/graphic-design-creative-workspace-dark-theme.jpg",
    content: (
      <ServiceContent
        title="Visual Identity That Resonates"
        description="Create a lasting impression with compelling visual design. From brand identity to marketing materials, we craft designs that communicate your message and captivate your audience."
        features={[
          "Brand identity and logo design",
          "Marketing collateral and print design",
          "Social media graphics and templates",
          "Packaging and product design",
          "Illustration and iconography",
        ]}
      />
    ),
  },
  {
    category: "Marketing",
    title: "Social Media Management",
    src: "/professional-photo-editing-retouching-dark.jpg",
    content: (
      <ServiceContent
        title="Building Your Digital Presence"
        description="Amplify your brand's voice across social platforms. We create engaging content, manage your online presence, and build meaningful connections with your audience."
        features={[
          "Content strategy and planning",
          "Social media account management",
          "Engaging post creation and scheduling",
          "Community management and engagement",
          "Analytics and performance tracking",
        ]}
      />
    ),
  },
]
