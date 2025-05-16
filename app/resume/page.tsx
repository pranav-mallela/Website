'use client';

import React, { useEffect, useState } from 'react';

export default function ResumePage() {
  const [zoomLevel, setZoomLevel] = useState(112);

  useEffect(() => {
    const updateZoom = () => {
      const width = window.innerWidth;
      if (width > 1280) {
        setZoomLevel(112);
      } else if (width > 1024) {
        setZoomLevel(100);
      } else if (width > 768) {
        setZoomLevel(85);
      } else {
        setZoomLevel(70);
      }
    };

    updateZoom();
    window.addEventListener('resize', updateZoom);
    return () => window.removeEventListener('resize', updateZoom);
  }, []);

  return (
    <div className="w-full h-[calc(100vh-5rem)]">
      <iframe
        key={zoomLevel}  // <-- this forces iframe to re-render when zoomLevel changes
        src={`/resume.pdf#zoom=${zoomLevel}`}
        className="w-full h-full"
      />
    </div>
  );
}
