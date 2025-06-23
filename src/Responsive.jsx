import React, { useEffect, useRef, useState } from 'react';

const ResponsiveVideo = () => {
  const videoRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); // Update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isLargeScreen) {
        video.autoplay = true;
        video.load(); // Re-apply autoplay
        video.play().catch(err => {
          // Some browsers require user interaction
          console.warn('Autoplay failed:', err);
        });
      } else {
        video.autoplay = false;
        video.pause();
      }
    }
  }, [isLargeScreen]);

  return (
    <video
      ref={videoRef}
      muted
      controls
      playsInline
      style={{ width: '100%', height: 'auto' }}
    >
      <source src="/The Future of Artificial Intelligence (Animated).mp4" type="video/mp4" />
    </video>
  );
};

export default ResponsiveVideo;
