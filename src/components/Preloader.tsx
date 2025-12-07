'use client';

import Image from 'next/image';

const Preloader = ({ loading }: { loading: boolean }) => {
  return (
    <div
      className={`fixed inset-0 bg-pastel-blue flex items-center justify-center z-50 transition-opacity duration-1000 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="animate-pulse">
        <Image
          src="/images/logo-lulutejecrochet.png"
          alt="Logo lulutejecrochet"
          width={250}
          height={125}
          priority
        />
      </div>
    </div>
  );
};

export default Preloader;
