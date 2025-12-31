'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { mainNavigation, type NavItem } from '@/lib/navigation';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
    setActiveSubDropdown(null);
  };

  const handleSubMouseEnter = (label: string) => {
    setActiveSubDropdown(label);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/brand/logos/logo.png"
            alt="PHOENIXX"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {mainNavigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }}
            >
              <Link
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md hover:bg-muted/50',
                  item.children && 'gap-1'
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>

              {/* Level 1 Dropdown Menu */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-64 rounded-lg border bg-background p-2 shadow-lg">
                    {item.children.map((child) => (
                      <div
                        key={child.label}
                        className="relative"
                        onMouseEnter={() => child.children && handleSubMouseEnter(child.label)}
                      >
                        <Link
                          href={child.href}
                          className="flex items-center justify-between rounded-md px-3 py-2 transition-colors hover:bg-muted"
                        >
                          <div>
                            <span className="block text-sm font-medium">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="block text-xs text-muted-foreground">
                                {child.description}
                              </span>
                            )}
                          </div>
                          {child.children && (
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Link>

                        {/* Level 2 Dropdown (Sub-products) */}
                        {child.children && activeSubDropdown === child.label && (
                          <div className="absolute left-full top-0 ml-2">
                            <div className="w-56 rounded-lg border bg-background p-2 shadow-lg">
                              {child.children.map((subChild) => (
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
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Button asChild>
            <Link href="/get-a-quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-h-[80vh] overflow-y-auto">
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
  );
}

// Mobile Navigation Item Component
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
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex w-full items-center justify-between font-medium hover:text-primary',
          depth > 0 && 'text-sm text-muted-foreground'
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      {isOpen && (
        <div className="mt-2 space-y-1 border-l pl-4">
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
