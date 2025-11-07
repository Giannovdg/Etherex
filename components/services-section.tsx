"use client"
import React, { useMemo } from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export default function ServicesSection() {
  const cards = useMemo(() => 
    data.map((card, index) => <Card key={card.src} card={card} index={index} />),
    []
  )

  return (
    <div className="w-full h-full py-20 bg-transparent">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans mb-4">What We Create With AI</h2>
      <p className="max-w-7xl pl-4 mx-auto text-sm md:text-lg text-neutral-400 font-sans mb-8">
        Practical, conversion-focused outputs across your business
      </p>
      <Carousel items={cards} />
    </div>
  )
}

const ServiceContent = React.memo(({
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
})

const data = [
  {
    category: "Web & Commerce",
    title: "Smart Websites & E-Commerce",
    src: "/modern-web-development-coding-screen-dark-theme.jpg",
    description: "AI-optimized designs that convert visitors into customers",
    content: (
      <ServiceContent
        title="AI-Optimized Designs That Convert"
        description="We build responsive, high-performance websites and stores that turn visitors into customers, guided by AI insights."
        features={[
          "Conversion-focused layouts",
          "SEO and performance optimization",
          "E-commerce and CMS integration",
          "Analytics and growth tracking",
          "Security and accessibility best practices",
        ]}
      />
    ),
  },
  {
    category: "Content",
    title: "Content That Connects",
    src: "/graphic-design-creative-workspace-dark-theme.jpg",
    description: "Photos, videos, and copy that speak your brand's language",
    content: (
      <ServiceContent
        title="Photos, Videos, and Copy That Speak Your Brand"
        description="End-to-end content creation — visual, motion, and written — tuned to your identity and audience."
        features={[
          "Brand-aligned copywriting",
          "Photo and video production",
          "Design for social and web",
          "Templates and content systems",
          "Content calendars and QA",
        ]}
      />
    ),
  },
  {
    category: "Automation",
    title: "Marketing Automation",
    src: "/window.svg",
    description: "Set it, forget it, and watch your business grow on autopilot",
    content: (
      <ServiceContent
        title="Set It, Forget It, and Grow"
        description="Automated funnels, email, and workflows that keep your marketing running 24/7 with measurable ROI."
        features={[
          "Email and SMS automations",
          "Lead capture and nurturing",
          "CRM integrations",
          "Campaign orchestration",
          "Reporting and optimization",
        ]}
      />
    ),
  },
  {
    category: "Social",
    title: "Social Media Mastery",
    src: "/professional-photo-editing-retouching-dark.jpg",
    description: "AI-powered ads and posts that reach the right people at the right time",
    content: (
      <ServiceContent
        title="Reach the Right People at the Right Time"
        description="AI-powered strategy and content across platforms — posts, stories, and ads optimized for impact."
        features={[
          "Audience and platform strategy",
          "Post creation and scheduling",
          "Community management",
          "Paid ads management",
          "Analytics and iteration",
        ]}
      />
    ),
  },
  {
    category: "Apps & Tools",
    title: "Custom Apps & Tools",
    src: "/mobile-app-development-smartphone-interface-dark.jpg",
    description: "Streamline your operations with intelligent business solutions",
    content: (
      <ServiceContent
        title="Intelligent Solutions That Streamline Operations"
        description="Purpose-built apps and internal tools to automate workflows and unlock productivity."
        features={[
          "Cross-platform app development",
          "API and backend services",
          "Admin dashboards and portals",
          "Workflow automation",
          "Deployments and maintenance",
        ]}
      />
    ),
  },
]