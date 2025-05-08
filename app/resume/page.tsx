// app/resume/page.tsx
import React from 'react';

export default function ResumePage() {
  return (
    <div className="w-full h-[calc(100vh-5rem)]">
      <iframe
        src="/resume.pdf#zoom=112"
        className="w-full h-full"
      />
    </div>
  );
}
