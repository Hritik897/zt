import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'FinTech & Financial Software Engineering Solutions',
  description: 'High-frequency trading platforms, algorithmic payment processing, and institutional market analytics engineered by ZYNITH TECHNOLOGY. Ultra-low latency and PCI-DSS compliance.',
  keywords: [
    'FinTech Software Development',
    'Financial Software Engineering',
    'Trading Terminal Development',
    'Payment Gateway Integration',
    'Blockchain & Cryptographic Systems'
  ],
  openGraph: {
    title: 'FinTech Software Solutions | ZYNITH TECHNOLOGY',
    description: 'Sub-millisecond latency and institutional security for capital markets and financial services.',
    url: 'https://zynithtechnology.com/solutions/finance',
  }
};

const finPillars = [
  {
    title: 'High-Frequency Market Terminals',
    desc: 'Real-time order book reconstruction, level 2/3 market depth streams, and interactive candlestick charting handling tens of thousands of price ticks per second.'
  },
  {
    title: 'Algorithmic Payment Gateways',
    desc: 'PCI-DSS Level 1 compliant checkout engines with intelligent transaction routing, fraud scoring heuristics, and automated multi-currency settlements.'
  },
  {
    title: 'Quantitative Risk & Analytics',
    desc: 'Monte Carlo simulations, portfolio value-at-risk (VaR) calculators, and machine-learning driven market sentiment ingestion pipelines.'
  },
  {
    title: 'Banking Core & KYC/AML Pipelines',
    desc: 'Automated biometric identity verification, sanction list screening, and open-banking REST APIs connecting to Plaid, Stripe, and legacy core banking systems.'
  }
];

export default function FinanceSolutionsPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20">
      {/* Banner */}
      <div className="w-full bg-[#02122B] text-white py-16 px-5 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-300 uppercase">
              Capital Markets & FinTech
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            FinTech & Financial Software Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Where milliseconds matter. <strong className="text-white font-semibold">ZYNITH TECHNOLOGY</strong> architects low-latency trading engines, secure payment flows, and quantitative analytics for modern financial institutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-extrabold text-dark-blue-scopic mb-4">
              Institutional Speed & Zero-Trust Security
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              Financial markets demand deterministic performance. Our FinTech engineering division combines low-level memory-optimized backend systems with modern WebSocket architectures to deliver real-time data with microsecond precision.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Whether building quantitative trading analytics like Akillion or architecting multi-tenant banking middleware, we safeguard financial transactions with end-to-end cryptographic verification.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/static/05d7c2bd64b765e8deb601a1ca47a5d9/90089/finance.jpg"
              alt="Finance Solutions"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {finPillars.map((p, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 sm:p-10 shadow-card-shadow border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-dark-blue-scopic mb-3">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#02122B] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Ready to Modernize Your Financial Systems?</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Speak with our FinTech solutions architect today.
          </p>
          <Link
            href="/contact-us"
            className="bg-green-scopic hover:bg-gradient-to-b hover:from-[#3cd2ac] hover:to-[#1fae84] text-white font-bold px-10 py-3.5 rounded-full text-base transition-all duration-300 shadow-lg inline-block"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
