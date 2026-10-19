import PortfolioPage, { metadata as portfolioMetadata } from '../portfolio/page';

export const metadata = {
  ...portfolioMetadata,
  title: 'Client Case Studies & Technical Success Stories',
  description: 'In-depth engineering case studies from ZYNITH TECHNOLOGY. Learn how we built clinical 911 dispatch systems, high-frequency trading tools, and automated code testing sandboxes.',
  openGraph: {
    ...portfolioMetadata.openGraph,
    title: 'Client Case Studies | ZYNITH TECHNOLOGY',
    url: 'https://zynithtechnology.com/case-studies',
  }
};

export default PortfolioPage;
