"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footerdemo() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company */}
          <div className="space-y-6">
            <div className="text-xs tracking-[0.2em] text-gray-400 mb-4">ETHEREX</div>
            <h4 className="text-sm font-medium tracking-[0.15em] text-gray-300 uppercase">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">About Us</a></li>
              <li><a href="/about#team" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Our Team</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Press</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-[0.15em] text-gray-300 uppercase">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Web Development</a></li>
              <li><a href="/services" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Content Creation</a></li>
              <li><a href="/services" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Marketing Automation</a></li>
              <li><a href="/services" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">AI Solutions</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-[0.15em] text-gray-300 uppercase">Resources</h4>
            <ul className="space-y-3">
              <li><a href="/resources" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Blog</a></li>
              <li><a href="/resources#guides" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Guides</a></li>
              <li><a href="/resources#case-studies" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Case Studies</a></li>
              <li><a href="/resources#faq" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">FAQ</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-[0.15em] text-gray-300 uppercase">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Facebook</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Instagram</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Twitter</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-[0.15em] text-gray-300 uppercase">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-[0.15em] text-gray-300 uppercase">Newsletter</h4>
            <p className="text-sm text-gray-400 leading-relaxed tracking-wide">
              Stay ahead with AI insights and marketing tips. Join our newsletter for weekly updates tailored to South African businesses.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="backdrop-blur-md bg-white/[0.08] border border-white/[0.1] text-white placeholder-gray-500 focus:bg-white/[0.12] focus:border-white/[0.2] transition-all duration-300 rounded-full px-4 py-3"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full backdrop-blur-md bg-white/[0.12] border border-white/[0.2] text-white font-medium hover:bg-white/[0.18] transition-all duration-300 rounded-full py-3 tracking-[0.1em] relative overflow-hidden group"
              >
                <span className="relative z-10">SUBSCRIBE</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/[0.1] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <TooltipProvider>
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <a
                        href={href}
                        className="backdrop-blur-md bg-white/[0.08] border border-white/[0.1] rounded-full p-3 hover:bg-white/[0.15] text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden group"
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5 relative z-10" />
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="backdrop-blur-md bg-black/80 border border-white/[0.1] text-white">
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 tracking-[0.1em]">
              © 2025 ETHEREX. All rights reserved. Empowering South African businesses with intelligent marketing solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}