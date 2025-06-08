"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Empower Your Business with Expert Consulting
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Trusted advice for consulting firms, financial advisors, and business strategists to help you grow and succeed.
        </p>
        <Button className="px-8 py-3 text-lg font-semibold">Get Started</Button>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Business Strategy</h3>
            <p className="text-gray-700">
              Develop clear, actionable strategies to drive growth and competitive advantage.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Financial Advisory</h3>
            <p className="text-gray-700">
              Expert financial planning and advice to secure your business’s future.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
            <p className="text-gray-700">
              In-depth market research to identify opportunities and risks.
            </p>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a team of experienced consultants dedicated to helping businesses achieve their goals through tailored strategies and expert advice.
        </p>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 italic text-gray-800">
            “Their strategic insights transformed our business approach and boosted our revenue.”
            <p className="mt-4 font-semibold">- Jane Doe, CEO</p>
          </Card>
          <Card className="p-6 italic text-gray-800">
            “Professional, knowledgeable, and results-driven. Highly recommended.”
            <p className="mt-4 font-semibold">- John Smith, CFO</p>
          </Card>
          <Card className="p-6 italic text-gray-800">
            “A trusted partner who helped us navigate complex financial decisions.”
            <p className="mt-4 font-semibold">- Mary Johnson, Business Owner</p>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Business?</h2>
        <p className="text-gray-700 mb-8">
          Contact us today to schedule a consultation and start your journey to success.
        </p>
        <Button className="px-8 py-3 text-lg font-semibold">Contact Us</Button>
      </section>
    </main>
  );
}
