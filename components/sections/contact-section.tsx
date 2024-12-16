"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#06141B]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#CCD0CF] mb-4">Let's Connect</h2>
              <p className="text-[#9BA8AB] text-lg">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="flex items-center gap-4 text-[#9BA8AB] hover:text-[#CCD0CF] transition-colors">
                <Mail className="w-5 h-5" />
                <Link href="mailto:contact@example.com">
                  contact@example.com
                </Link>
              </div>
              
              <div className="flex items-center gap-4 text-[#9BA8AB]">
                <MessageSquare className="w-5 h-5" />
                <p>Response time: Within 24 hours</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link 
                href="https://cal.com/abdahunsi/15min?date=2024-12-16&month=2024-12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#253745] text-[#CCD0CF] px-8 py-6 rounded-lg hover:bg-[#1A2F3D] transition-all duration-300 flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5" />
                  Schedule a Discovery Call
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-[#11212D] rounded-xl p-8">
            <div className="text-[#CCD0CF] space-y-6">
              <h3 className="text-2xl font-semibold">What to Expect</h3>
              <ul className="space-y-4 text-[#9BA8AB]">
                <li className="flex items-start gap-3">
                  <span className="text-[#4A5C6A]">1.</span>
                  <p>15-minute introductory call to understand your project needs</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4A5C6A]">2.</span>
                  <p>Discussion of your goals and timeline</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4A5C6A]">3.</span>
                  <p>Quick overview of my process and how I can help</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4A5C6A]">4.</span>
                  <p>Next steps and proposal timeline if we're a good fit</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 