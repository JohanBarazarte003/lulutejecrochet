'use client';

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds, can be adjusted

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader loading={loading} />
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}
