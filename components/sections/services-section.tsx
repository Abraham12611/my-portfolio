"use client"

import { FileText, Rocket, Users } from 'lucide-react'
import { CalendarEmbed } from "../ui/calendar-embed"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#06141B]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Services Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-[#CCD0CF] mb-4">Technical Writing Services</h2>
              <p className="text-[#9BA8AB] text-lg">
                Helping startups and SaaS companies create clear, engaging technical content
              </p>
            </div>

            <div className="grid gap-6">
              <ServiceCard
                icon={FileText}
                title="Technical Documentation"
                description="Clear, comprehensive documentation for your APIs, SDKs, and technical products"
              />
              <ServiceCard
                icon={Rocket}
                title="Product Tutorials"
                description="Step-by-step guides and tutorials to help users get the most out of your product"
              />
              <ServiceCard
                icon={Users}
                title="Developer Education"
                description="Educational content to help developers understand and implement your solutions"
              />
            </div>
          </div>

          {/* Calendar Integration */}
          <div className="bg-[#11212D] rounded-xl p-6 h-[600px]">
            <div className="mb-6">
              <h3 className="text-[#CCD0CF] text-2xl font-semibold mb-2">Schedule a Consultation</h3>
              <p className="text-[#9BA8AB]">Book a 30-minute call to discuss your technical writing needs</p>
            </div>
            <CalendarEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any
  title: string
  description: string 
}) {
  return (
    <div className="bg-[#11212D] p-6 rounded-lg space-y-4 hover:bg-[#1A2F3D] transition-colors">
      <div className="w-12 h-12 bg-[#253745] rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#9BA8AB]" />
      </div>
      <div>
        <h3 className="text-[#CCD0CF] text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#9BA8AB]">{description}</p>
      </div>
    </div>
  )
} 