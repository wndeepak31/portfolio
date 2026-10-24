"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './JewelryConfiguratorShowcase.module.css';

export default function JewelryConfiguratorShowcase({ className = "" }) {
  const [isInView, setIsInView] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const containerRef = useRef(null);

  const specs = [
    { icon: "⚡", label: "Rendering Engine", value: "Three.js / WebGL (60 FPS)" },
    { icon: "🛒", label: "E-Commerce Ready", value: "Headless Shopify & WooCommerce" },
    { icon: "📦", label: "Asset Optimization", value: "Compressed Draco & KTX2" },
    { icon: "⏱️", label: "First Interactive", value: "< 1.2s on 4G / 5G" },
  ];

  // Lazy-load the WebGL iframe automatically when scrolled near the section (Lighthouse 95+ Core Web Vitals)
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="3d-configurator" ref={containerRef} className={`${styles.showcaseSection} ${className}`}>
      <div className={styles.showcaseWrapper}>
        <div className={styles.bentoCard}>
          <div className={styles.cardGlowAmbient} />

          <div className={styles.cardLayout}>
            {/* Left / Main Viewport Section */}
            <div className={styles.viewportContainer}>
              {/* Studio Terminal Header Bar */}
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <div className={styles.dotRed}></div>
                  <div className={styles.dotYellow}></div>
                  <div className={styles.dotGreen}></div>
                </div>

                <div className={styles.terminalTitle}>
                  <span className={styles.terminalTitleFull}>apextech+ — jewelry_configurator_3d.webgl (60 FPS)</span>
                  <span className={styles.terminalTitleShort}>apextech+ — 3d.webgl</span>
                  <span className={styles.terminalTip}>• Drag to rotate 360° • Pinch / scroll to zoom</span>
                </div>

                <div className={styles.terminalActions}>
                  <a
                    href="https://jewel-render-studio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.fullscreenLink}
                    title="Open Fullscreen Studio in New Tab"
                  >
                    <span className={styles.fullscreenTextFull}>Open Fullscreen Studio ↗</span>
                    <span className={styles.fullscreenTextShort}>Fullscreen ↗</span>
                  </a>
                </div>
              </div>

              {/* Viewport Frame */}
              <div className={styles.canvasWrapper}>
                {!isIframeLoaded && (
                  <div className={styles.canvasLoading}>
                    <div className={styles.spinner}></div>
                    <span>Initializing Real-Time 3D Studio...</span>
                  </div>
                )}

                {isInView && (
                  <iframe
                    src="https://jewel-render-studio.vercel.app"
                    title="Live 3D Luxury Ring Studio Configurator"
                    className={styles.iframeElement}
                    loading="lazy"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
                    onLoad={() => setIsIframeLoaded(true)}
                  />
                )}
              </div>
            </div>

            {/* Right Side / Feature Panel */}
            <div className={styles.featurePanel}>
              <div className={styles.panelHeader}>
                <div className={styles.eyebrowBadge}>
                  <span className={styles.badgeDot}></span>
                  <span>PROPRIETARY WEBGL ARCHITECTURE</span>
                </div>

                <h2 className={styles.headline}>
                  Next-Gen 3D E-Commerce for <span className={styles.accentGradient}>Luxury Jewelry & Retail</span>
                </h2>

                <p className={styles.description}>
                  Eliminate static 2D images. We build real-time, photorealistic WebGL 3D configurators with physical light refraction, instant diamond customization, and headless Shopify integration.
                </p>
              </div>

              {/* Key Specs Grid (Always 2x2 for clean compact mobile/desktop density) */}
              <div className={styles.specsGrid}>
                {specs.map((spec, index) => (
                  <div key={index} className={styles.specCard}>
                    <div className={styles.specHeader}>
                      <span className={styles.specIcon}>{spec.icon}</span>
                      <span className={styles.specLabel}>{spec.label}</span>
                    </div>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* ROI / Performance Mini-Banner */}
              <div className={styles.roiBanner}>
                <span className={styles.roiIcon}>📈</span>
                <span><strong>+40% Conversion Lift:</strong> Real-time 3D inspection drastically increases buyer confidence and reduces returns.</span>
              </div>

              {/* Action Buttons */}
              <div className={styles.buttonGroup}>
                <Link href="/contact" className={styles.primaryBtn}>
                  <span>Book a 3D Demo Call</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <a
                  href="https://jewel-render-studio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  <span>Open Fullscreen Studio ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
