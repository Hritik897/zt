import React from 'react';

export default function ClientsMarquee() {
  const clients = [
    { name: 'Akillion', src: '/static/Akillion-a884273317be9e8f62d3ba681edd405c.webp', h: 'max-h-10' },
    { name: 'McMillan', src: '/static/mc-millan-ffab4f7058601255223eddcfa4d0e81a.svg', h: 'max-h-9' },
    { name: 'Mediphany', src: '/static/mediphany-new-63647b1eedd5451afebd628ee0cece34.webp', h: 'max-h-10' },
    { name: 'Xerxes', src: '/static/xerxes-6548dd8bee3fe9f8d6e6a884ff30ba49.svg', h: 'max-h-9' },
    { name: 'Ortho Select', src: '/static/ortho-select-a3de061d550827f25ebb591c84557d27.webp', h: 'max-h-10' },
    { name: 'MD Ally', src: '/static/md-ally-new-75b67c05461a186e8ad66ce00b769896.webp', h: 'max-h-10' },
    { name: 'Codeaid', src: '/static/codeaid-new-3d3d79dcb28ca88d9c36345dd1e6bd5f.webp', h: 'max-h-10' }
  ];

  return (
    <div className="marquee-container py-4">
      <div className="marquee-track">
        {clients.concat(clients).map((c, i) => (
          <div key={i} className="flex-shrink-0 flex justify-center items-center h-14 min-w-[160px] grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
            <img alt={c.name} src={c.src} className={`${c.h} w-auto object-contain`} />
          </div>
        ))}
      </div>
    </div>
  );
}
