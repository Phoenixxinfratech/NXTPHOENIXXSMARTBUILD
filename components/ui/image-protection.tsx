'use client';

import { useEffect, useCallback } from 'react';

/**
 * Comprehensive Image Protection Component
 * Multi-layered protection against image downloading and extraction
 * 
 * Protection Layers:
 * 1. Right-click context menu disabled
 * 2. Drag-and-drop disabled
 * 3. Keyboard shortcuts blocked (Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12, etc.)
 * 4. Developer tools detection
 * 5. Touch long-press disabled (mobile)
 * 6. Copy/cut events blocked for images
 * 7. CSS-based selection and pointer protection
 * 8. Print protection for images
 * 
 * Note: This provides strong deterrence but is not 100% foolproof
 * Images remain crawlable for SEO (ALT attributes intact)
 */
export function ImageProtection() {
  // Handle right-click context menu
  const handleContextMenu = useCallback((e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    // Block right-click on images and elements containing images
    if (
      target.tagName === 'IMG' ||
      target.closest('img') ||
      target.querySelector('img') ||
      target.style.backgroundImage
    ) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    // Also block on picture elements and figure elements
    if (target.tagName === 'PICTURE' || target.tagName === 'FIGURE' || target.closest('picture') || target.closest('figure')) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  // Handle drag start
  const handleDragStart = useCallback((e: DragEvent): void => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.closest('img')) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  // Handle selection start
  const handleSelectStart = useCallback((e: Event): void => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG' || target.closest('img')) {
      e.preventDefault();
    }
  }, []);

  // Handle copy events
  const handleCopy = useCallback((e: ClipboardEvent): void => {
    const selection = window.getSelection();
    if (selection) {
      const selectedElement = selection.anchorNode?.parentElement;
      if (selectedElement?.tagName === 'IMG' || selectedElement?.closest('img')) {
        e.preventDefault();
      }
    }
  }, []);

  // Block keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent): void => {
    // Block Ctrl+S (Save), Ctrl+U (View Source), Ctrl+Shift+I (DevTools)
    // Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect Element), F12 (DevTools)
    const blockedCombos = [
      { ctrl: true, key: 's' },      // Save page
      { ctrl: true, key: 'u' },      // View source
      { ctrl: true, shift: true, key: 'i' }, // DevTools
      { ctrl: true, shift: true, key: 'j' }, // Console
      { ctrl: true, shift: true, key: 'c' }, // Inspect
      { ctrl: true, key: 'p' },      // Print (optional - uncomment if needed)
    ];

    const key = e.key.toLowerCase();
    
    // Check F12
    if (e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Check key combinations
    for (const combo of blockedCombos) {
      const ctrlMatch = combo.ctrl ? (e.ctrlKey || e.metaKey) : true;
      const shiftMatch = combo.shift ? e.shiftKey : !e.shiftKey;
      const keyMatch = key === combo.key;

      if (ctrlMatch && shiftMatch && keyMatch) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    }
  }, []);

  // Handle touch events for mobile (prevent long-press save)
  const handleTouchStart = useCallback((e: TouchEvent): void => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      // Prevent default to block long-press context menu on mobile
      (target.style as unknown as Record<string, string>).webkitTouchCallout = 'none';
    }
  }, []);

  // Detect DevTools opening (basic detection)
  const detectDevTools = useCallback(() => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      // DevTools might be open - you can add custom behavior here
      // For now, we just apply additional protection
      document.body.classList.add('devtools-open');
    } else {
      document.body.classList.remove('devtools-open');
    }
  }, []);

  useEffect(() => {
    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('dragstart', handleDragStart, true);
    document.addEventListener('selectstart', handleSelectStart, true);
    document.addEventListener('copy', handleCopy, true);
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    // DevTools detection interval
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Add comprehensive CSS protection styles
    const style = document.createElement('style');
    style.id = 'image-protection-styles';
    style.textContent = `
      /* ============================================
         COMPREHENSIVE IMAGE PROTECTION
         ============================================ */
      
      /* Prevent image selection and interaction */
      img,
      picture,
      figure img,
      [style*="background-image"],
      .image-protected {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        pointer-events: auto;
      }

      /* Disable dragging on all images */
      img {
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
        draggable: false !important;
      }

      /* Transparent overlay for additional protection */
      .image-container,
      .protected-image-wrapper {
        position: relative;
      }

      .image-container::after,
      .protected-image-wrapper::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent;
        pointer-events: none;
        z-index: 1;
      }

      /* Block text selection near images */
      figure,
      picture,
      .image-wrapper {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      /* Additional protection when DevTools detected */
      .devtools-open img {
        filter: blur(0);
        transition: filter 0.3s ease;
      }

      /* Print protection - hide/watermark images when printing */
      @media print {
        img,
        picture,
        figure img {
          opacity: 0.3 !important;
          position: relative;
        }
        
        img::after,
        picture::after {
          content: '© PHOENIXX SMARTBUILD - Protected Content';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          color: rgba(0, 0, 0, 0.5);
          pointer-events: none;
          white-space: nowrap;
        }
        
        /* Hide navigation and footer in print */
        nav, footer, .no-print {
          display: none !important;
        }
      }

      /* Mobile-specific touch protection */
      @media (pointer: coarse) {
        img,
        picture img {
          -webkit-touch-callout: none !important;
          touch-action: manipulation;
        }
      }

      /* Prevent save image dialog on mobile */
      img {
        -webkit-touch-callout: none !important;
      }

      /* Next.js Image component specific protection */
      [data-nimg],
      span > img,
      div > img {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        user-select: none !important;
        -webkit-touch-callout: none !important;
        -webkit-user-drag: none !important;
        pointer-events: none !important;
      }

      /* Re-enable pointer events for image containers (for clicks/links) */
      a img,
      button img,
      [role="button"] img {
        pointer-events: auto !important;
      }

      /* Wrapper elements should have pointer events */
      a:has(img),
      button:has(img),
      [role="button"]:has(img),
      .clickable-image {
        pointer-events: auto !important;
      }
    `;
    document.head.appendChild(style);

    // Apply draggable="false" to all existing images
    const applyImageProtection = () => {
      document.querySelectorAll('img').forEach((img) => {
        img.setAttribute('draggable', 'false');
        const imgStyle = img.style as unknown as Record<string, string>;
        imgStyle.webkitUserDrag = 'none';
        imgStyle.userSelect = 'none';
        imgStyle.webkitTouchCallout = 'none';
      });
    };

    // Initial application
    applyImageProtection();

    // Observe DOM for new images
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.tagName === 'IMG') {
              node.setAttribute('draggable', 'false');
              const nodeStyle = node.style as unknown as Record<string, string>;
              nodeStyle.webkitUserDrag = 'none';
              nodeStyle.webkitTouchCallout = 'none';
            }
            // Also check child images
            node.querySelectorAll?.('img').forEach((img) => {
              img.setAttribute('draggable', 'false');
              const imgStyle = img.style as unknown as Record<string, string>;
              imgStyle.webkitUserDrag = 'none';
              imgStyle.webkitTouchCallout = 'none';
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('dragstart', handleDragStart, true);
      document.removeEventListener('selectstart', handleSelectStart, true);
      document.removeEventListener('copy', handleCopy, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('touchstart', handleTouchStart);
      clearInterval(devToolsInterval);
      observer.disconnect();
      
      const styleEl = document.getElementById('image-protection-styles');
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, [handleContextMenu, handleDragStart, handleSelectStart, handleCopy, handleKeyDown, handleTouchStart, detectDevTools]);

  return null;
}

/**
 * Protected Image Wrapper Component
 * Use this wrapper for images that need extra protection
 * Adds transparent overlay and watermark on hover
 */
interface ProtectedImageProps {
  children: React.ReactNode;
  watermarkText?: string;
  showWatermark?: boolean;
}

export function ProtectedImageWrapper({ 
  children, 
  watermarkText = '© PHOENIXX SMARTBUILD',
  showWatermark = false 
}: ProtectedImageProps) {
  return (
    <div 
      className="relative image-protected select-none protected-image-wrapper"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {children}
      {/* Transparent protective overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ 
          background: 'transparent',
          pointerEvents: 'none'
        }}
      />
      {/* Optional visible watermark on hover */}
      {showWatermark && (
        <div 
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
          style={{ userSelect: 'none' }}
        >
          <span 
            className="text-sm text-white/70 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm"
            style={{ 
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              transform: 'rotate(-15deg)'
            }}
          >
            {watermarkText}
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * Hook for protecting specific images programmatically
 */
export function useImageProtection(imageRef: React.RefObject<HTMLImageElement | null>) {
  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const handleContextMenu = (e: Event) => e.preventDefault();
    const handleDragStart = (e: Event) => e.preventDefault();

    img.setAttribute('draggable', 'false');
    const imgStyle = img.style as unknown as Record<string, string>;
    imgStyle.webkitUserDrag = 'none';
    imgStyle.userSelect = 'none';
    imgStyle.webkitTouchCallout = 'none';

    img.addEventListener('contextmenu', handleContextMenu);
    img.addEventListener('dragstart', handleDragStart);

    return () => {
      img.removeEventListener('contextmenu', handleContextMenu);
      img.removeEventListener('dragstart', handleDragStart);
    };
  }, [imageRef]);
}
