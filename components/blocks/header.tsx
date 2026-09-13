'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { mainNavigation, type NavItem } from '@/lib/navigation';

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const openDropdown = (label: string) => {
    setActiveDropdown(label);
    setActiveSubDropdown(null);
  };

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, []);

  // Navigating with a menu open would otherwise leave it hanging over the new page.
  useEffect(() => {
    setMobileMenuOpen(false);
    closeDropdowns();
  }, [pathname, closeDropdowns]);

  // Keep keyboard focus inside the mobile panel while it covers the page.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const panel = mobilePanelRef.current;
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        mobileToggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !panel) return;

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const toggle = mobileToggleRef.current;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        toggle?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container-custom flex h-16 items-center justify-between" aria-label="Main">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/brand/logos/logo.png"
              alt="PHOENIXX SMARTBUILD home"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            {mainNavigation.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                isOpen={activeDropdown === item.label}
                activeSubDropdown={activeSubDropdown}
                onOpen={() => openDropdown(item.label)}
                onClose={closeDropdowns}
                onOpenSub={setActiveSubDropdown}
              />
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <Button asChild>
              <Link href="/get-a-quote">Get a Quote</Link>
            </Button>
          </div>

          <button
            ref={mobileToggleRef}
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            ref={mobilePanelRef}
            className="lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="border-t bg-background px-4 py-4">
              {mainNavigation.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
              <div className="mt-4 pt-4 border-t">
                <Button asChild className="w-full">
                  <Link href="/get-a-quote" onClick={() => setMobileMenuOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function DesktopNavItem({
  item,
  isOpen,
  activeSubDropdown,
  onOpen,
  onClose,
  onOpenSub,
}: {
  item: NavItem;
  isOpen: boolean;
  activeSubDropdown: string | null;
  onOpen: () => void;
  onClose: () => void;
  onOpenSub: (label: string | null) => void;
}) {
  const menuId = `${useId()}-menu`;
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 hover:text-primary"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          event.stopPropagation();
          onClose();
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node | null)) onClose();
      }}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          className="rounded-md py-2 pl-3 text-sm font-medium transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="rounded-md py-2 pl-1 pr-2 transition-colors hover:text-primary"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={`${isOpen ? 'Hide' : 'Show'} ${item.label} submenu`}
          onClick={() => (isOpen ? onClose() : onOpen())}
        >
          <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
        </button>
      </div>

      {isOpen && (
        <div id={menuId} className="absolute left-0 top-full pt-2">
          <div className="w-64 rounded-lg border bg-background p-2 shadow-lg">
            {item.children.map((child) => (
              <DesktopSubNavItem
                key={child.label}
                item={child}
                isOpen={activeSubDropdown === child.label}
                onOpen={() => onOpenSub(child.label)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopSubNavItem({
  item,
  isOpen,
  onOpen,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
}) {
  const submenuId = `${useId()}-submenu`;

  return (
    <div className="relative" onMouseEnter={() => item.children && onOpen()}>
      <div className="flex items-center justify-between rounded-md transition-colors hover:bg-muted">
        <Link href={item.href} className="flex-1 px-3 py-2">
          <span className="block text-sm font-medium">{item.label}</span>
          {item.description && (
            <span className="block text-xs text-muted-foreground">{item.description}</span>
          )}
        </Link>
        {item.children && (
          <button
            type="button"
            className="px-2 py-2"
            aria-expanded={isOpen}
            aria-controls={submenuId}
            aria-label={`${isOpen ? 'Hide' : 'Show'} ${item.label} submenu`}
            onClick={onOpen}
            onFocus={onOpen}
          >
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {item.children && isOpen && (
        <div id={submenuId} className="absolute left-full top-0 ml-2">
          <div className="w-56 rounded-lg border bg-background p-2 shadow-lg">
            {item.children.map((subChild) => (
              <Link
                key={subChild.label}
                href={subChild.href}
                className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
              >
                {subChild.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  item,
  onClose,
  depth = 0,
}: {
  item: NavItem;
  onClose: () => void;
  depth?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `${useId()}-panel`;

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          'block py-2 text-base font-medium hover:text-primary',
          depth > 0 && 'pl-4 text-sm text-muted-foreground'
        )}
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className={cn('py-2', depth > 0 && 'pl-4')}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={cn(
          'flex w-full items-center justify-between font-medium hover:text-primary',
          depth > 0 && 'text-sm text-muted-foreground'
        )}
      >
        {item.label}
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
      </button>
      {isOpen && (
        <div id={panelId} className="mt-2 space-y-1 border-l pl-4">
          <Link
            href={item.href}
            className="block py-1 text-sm text-muted-foreground hover:text-primary"
            onClick={onClose}
          >
            View All {item.label}
          </Link>
          {item.children.map((child) => (
            <MobileNavItem
              key={child.label}
              item={child}
              onClose={onClose}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
