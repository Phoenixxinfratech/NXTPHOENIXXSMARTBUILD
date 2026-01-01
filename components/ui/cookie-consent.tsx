'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Cookie Consent Banner
 * - 90-day retention as per requirements
 * - Tracks consent via GA4
 * - Enables/disables tracking based on consent
 */

const COOKIE_CONSENT_KEY = 'phoenixx_cookie_consent';
const CONSENT_EXPIRY_DAYS = 90;

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');

  useEffect(() => {
    // Check for existing consent
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (storedConsent) {
      try {
        const { status, expiry } = JSON.parse(storedConsent);
        const isExpired = new Date().getTime() > expiry;
        
        if (!isExpired) {
          setConsentStatus(status);
          if (status === 'accepted') {
            enableTracking();
          }
          return;
        }
      } catch {
        // Invalid stored data, show banner
      }
    }
    
    // Show banner after short delay for better UX
    const timer = setTimeout(() => setShowBanner(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const enableTracking = () => {
    // Enable GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const disableTracking = () => {
    // Disable GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  const saveConsent = (status: ConsentStatus) => {
    const expiry = new Date().getTime() + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ status, expiry })
    );
    setConsentStatus(status);
    setShowBanner(false);

    if (status === 'accepted') {
      enableTracking();
      // Track consent acceptance
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'cookie_consent', {
          event_category: 'consent',
          event_label: 'accepted',
        });
      }
    } else {
      disableTracking();
    }
  };

  if (!showBanner || consentStatus !== 'pending') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-slide-up">
      <div className="max-w-6xl mx-auto bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Cookie Icon */}
          <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-amber-500/20 items-center justify-center">
            <span className="text-3xl">🍪</span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">
              We value your privacy
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, 
              and personalize content. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              Read our{' '}
              <Link href="/privacy-policy" className="text-blue-400 hover:underline">
                Privacy Policy
              </Link>{' '}
              for more information.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => saveConsent('rejected')}
              className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 font-medium hover:bg-slate-800 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={() => saveConsent('accepted')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold hover:shadow-lg transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


