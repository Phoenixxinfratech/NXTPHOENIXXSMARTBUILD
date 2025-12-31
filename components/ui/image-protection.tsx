'use client';

import { useEffect } from 'react';

/**
 * Image Protection Component
 * Prevents casual copying of images while maintaining SEO
 * 
 * Features:
 * - Disables right-click on images
 * - Prevents drag-and-drop
 * - Adds transparent overlay on hover
 * 
 * Note: This is a deterrent, not foolproof security
 * Images remain crawlable for SEO
 */
export function ImageProtection() {
  useEffect(() => {
    // Disable right-click context menu on images
    const handleContextMenu = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Prevent drag start on images
    const handleDragStart = (e: DragEvent): void => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Prevent image selection
    const handleSelectStart = (e: Event): void => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);

    // Add CSS to prevent image pointer events (but allow click-through for lightboxes)
    const style = document.createElement('style');
    style.id = 'image-protection-styles';
    style.textContent = `
      /* Prevent image selection */
      img {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
      }
      
      /* Add protection overlay on hover - subtle and non-intrusive */
      .image-protected {
        position: relative;
      }
      
      .image-protected::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: transparent;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
      const styleEl = document.getElementById('image-protection-styles');
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, []);

  return null;
}

/**
 * Protected Image Wrapper Component
 * Wrap images that need extra protection with watermark overlay
 */
interface ProtectedImageProps {
  children: React.ReactNode;
  watermarkText?: string;
}

export function ProtectedImageWrapper({ 
  children, 
  watermarkText = '© PHOENIXX SMARTBUILD' 
}: ProtectedImageProps) {
  return (
    <div className="relative image-protected select-none">
      {children}
      {/* Invisible watermark for additional protection */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-end justify-end p-2 opacity-0 hover:opacity-30 transition-opacity"
        style={{ userSelect: 'none' }}
      >
        <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">
          {watermarkText}
        </span>
      </div>
    </div>
  );
}

