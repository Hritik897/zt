import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Client Testimonials & Verified Clutch Reviews',
  description: 'Read what CTOs, founders, and product leaders say about partnering with ZYNITH TECHNOLOGY for custom software, AI integration, and mission-critical cloud development.',
  keywords: [
    'Zynith Technology Reviews',
    'Client Testimonials',
    'Clutch 5 Star Rating Software Partner',
    'Software Development Case Reviews'
  ],
  openGraph: {
    title: 'Client Testimonials | ZYNITH TECHNOLOGY',
    description: 'Hear from our clients who have transformed their businesses with ZYNITH TECHNOLOGY.',
    url: 'https://zynithtechnology.com/testimonials',
  }
};

const reviews = [
  {
    name: 'Shanok C.',
    role: 'Co-Founder & CTO',
    company: 'MD Ally',
    rating: 5,
    industry: 'Healthcare & 911 Telehealth',
    quote: 'ZYNITH TECHNOLOGY has been an indispensable engineering partner. They took on our 911 emergency workflow architecture with extreme diligence, integrating our real-time telehealth video directly into municipal dispatch systems without a single hiccup. Our emergency diversion times plummeted.',
    metrics: '38% Ambulance Diversion, Zero CAD Latency'
  },
  {
    name: 'Angela DiMarco',
    role: 'Founder & CEO',
    company: 'FindUniquelyU',
    rating: 5,
    industry: 'AI E-Commerce',
    quote: 'The team delivered far beyond our initial expectations. Their deep technical grasp of artificial intelligence and responsive UI design resulted in a platform that doubled our user retention within three months. Communication was proactive, transparent, and completely honest.',
    metrics: '2.4x Average Order Value, 100% On-Time Delivery'
  },
  {
    name: 'David Reynolds',
    role: 'Chief Architect',
    company: 'Akillion Capital',
    rating: 5,
    industry: 'FinTech & Trading',
    quote: 'In high-frequency quantitative trading, milliseconds mean millions. ZYNITH TECHNOLOGY’s backend developers built a stream processing engine that ingests thousands of market ticks per second with absolute data integrity. Their technical rigor is top-tier.',
    metrics: '50k+ Ticks/Sec, Sub-Millisecond Latency'
  },
  {
    name: 'Dr. Marcus Vance',
    role: 'Medical Director',
    company: 'Mediphany Diagnostics',
    rating: 5,
    industry: 'MedTech / Cloud DICOM',
    quote: 'Deploying a HIPAA-compliant zero-install DICOM viewer in the browser felt nearly impossible until we brought in ZYNITH TECHNOLOGY. Their 3D graphics and WebGL engineers pulled off interactive slice rendering smoothly across all desktop and tablet browsers.',
    metrics: '60% Faster Diagnostics, 100% HIPAA Compliance'
  },
  {
    name: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Codeaid Systems',
    rating: 5,
    industry: 'Developer Assessment SaaS',
    quote: 'Their container sandbox architecture powers thousands of concurrent coding tests every day without fault. The sprint management was crystal clear, and the code was handed over cleanly with comprehensive automated test coverage.',
    metrics: '100,000+ Automated Tests, 99.99% Uptime'
  },
  {
    name: 'Robert Hastings',
    role: 'President',
    company: 'Homegrown Agricultural Logistics',
    rating: 5,
    industry: 'IoT & Omnichannel ERP',
    quote: 'We replaced four legacy siloed programs with a single unified cloud ERP engineered by ZYNITH TECHNOLOGY. Our inventory shrinkage decreased dramatically, and our regional distribution center was up and running in record time.',
    metrics: '28% Waste Reduction, 45% Checkout Lift'
  }
];

export default function TestimonialsPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20">
      {/* Banner */}
      <div className="w-full bg-[#02122B] text-white py-16 px-5 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-300 uppercase">
              Verified Client Outcomes
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Hear From Our Clients
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            There is nothing as rewarding as knowing our custom software engineering creates real, measurable impact. Read genuine reviews from executives and founders worldwide.
          </p>

          {/* Clutch rating banner */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white/10 px-6 py-3 rounded-full border border-white/20">
            <div className="flex text-yellow-400 text-lg">★★★★★</div>
            <span className="text-sm font-semibold text-white">4.9 / 5.0 Overall Client Rating on Clutch & G2</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow-card-shadow border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400 text-base">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {rev.industry}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>

                <div className="bg-slate-50 rounded-xl p-3 mb-6">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Key Result</div>
                  <div className="text-xs font-semibold text-dark-blue-scopic">{rev.metrics}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {rev.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-dark-blue-scopic text-sm">{rev.name}</h4>
                  <div className="text-xs text-slate-500">{rev.role}, {rev.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#02122B] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Ready to Experience Similar Results?</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Connect with our engineering team today for an upfront consultation and architectural scoping.
          </p>
          <Link
            href="/contact-us"
            className="bg-green-scopic hover:bg-gradient-to-b hover:from-[#3cd2ac] hover:to-[#1fae84] text-white font-bold px-10 py-3.5 rounded-full text-base transition duration-300 shadow-lg inline-block"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
