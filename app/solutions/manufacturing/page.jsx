import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Manufacturing & IoT Software Engineering Solutions',
  description: 'Industry 4.0 software, predictive sensor telemetry, and automated supply chain ERP systems engineered by ZYNITH TECHNOLOGY. Connect edge devices to intelligent cloud analytics.',
  keywords: [
    'Manufacturing Software Development',
    'IoT Software Engineering',
    'Industry 4.0 Solutions',
    'Predictive Maintenance Software',
    'Supply Chain ERP Development'
  ],
  openGraph: {
    title: 'Manufacturing & IoT Solutions | ZYNITH TECHNOLOGY',
    description: 'Transform factories and supply chains with intelligent IoT telemetry and automation.',
    url: 'https://zynithtechnology.com/solutions/manufacturing',
  }
};

const mfgPillars = [
  {
    title: 'Industrial IoT & Sensor Telemetry',
    desc: 'MQTT and OPC-UA data ingestion pipelines streaming real-time temperature, vibration, and throughput metrics from factory floor PLCs into cloud analytics.'
  },
  {
    title: 'Predictive Maintenance Models',
    desc: 'Machine learning algorithms that analyze sensor acoustics and thermal anomalies to predict machinery failure weeks before costly breakdowns occur.'
  },
  {
    title: 'Automated Supply Chain & Warehouse ERP',
    desc: 'Dynamic inventory tracking, automated replenishment dispatch, and real-time transit telemetry that minimizes storage bottlenecks and material waste.'
  },
  {
    title: 'Digital Twin & CAD/CAM Integration',
    desc: '3D interactive digital twins visualizing factory layout operations, robotic cell performance, and ergonomic assembly line efficiency in real time.'
  }
];

export default function ManufacturingSolutionsPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20">
      {/* Banner */}
      <div className="w-full bg-[#02122B] text-white py-16 px-5 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-300 uppercase">
              Industry 4.0 & Smart Factories
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Manufacturing & IoT Software Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Bridge physical operations with intelligent code. <strong className="text-white font-semibold">ZYNITH TECHNOLOGY</strong> builds sensor-connected systems that maximize plant floor uptime and streamline logistics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-extrabold text-dark-blue-scopic mb-4">
              Real-Time Factory Intelligence at Scale
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
              Modern manufacturing cannot afford unplanned downtime or opaque logistics. Our industrial engineering team connects hardware sensors and legacy SCADA systems to cloud-native analytics dashboards.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              From our climate-automated greenhouse logistics engine for Homegrown Nursery to industrial equipment telemetry, our solutions give leadership total visibility across the factory floor and supply chain.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/static/5190432f5bdc252eacf87dcae140a970/90089/manufacturing.jpg"
              alt="Manufacturing Solutions"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mfgPillars.map((p, idx) => (
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
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">Have an Industrial IoT Project?</h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base mb-8">
            Connect with our IoT engineering lead for an architectural evaluation.
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
