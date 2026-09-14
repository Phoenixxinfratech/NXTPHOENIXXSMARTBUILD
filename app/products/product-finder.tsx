'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  productCatalog,
  productCategories,
  productFeatures,
  productIndustries,
  type ProductCategory,
  type ProductFeature,
  type ProductIndustry,
} from '@/lib/product-catalog';

type Filters = {
  category: ProductCategory | null;
  feature: ProductFeature | null;
  industry: ProductIndustry | null;
};

const EMPTY_FILTERS: Filters = { category: null, feature: null, industry: null };

function FilterRow<T extends string>({
  legend,
  options,
  selected,
  onSelect,
  activeClass,
}: {
  legend: string;
  options: readonly T[];
  selected: T | null;
  onSelect: (value: T | null) => void;
  activeClass: string;
}) {
  return (
    <fieldset>
      <legend className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selected === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(isActive ? null : option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive ? activeClass : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function ProductFinder() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);

  const hasCriteria =
    query.trim().length > 0 || Object.values(filters).some((value) => value !== null);

  const results = useMemo(() => {
    const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

    return productCatalog.filter((product) => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.feature && !product.features.includes(filters.feature)) return false;
      if (filters.industry && !product.industries.includes(filters.industry)) return false;
      if (terms.length === 0) return true;

      const haystack = [
        product.name,
        product.category,
        product.description,
        ...product.keywords,
        ...product.features,
        ...product.industries,
      ]
        .join(' ')
        .toLowerCase();

      return terms.every((term) => haystack.includes(term));
    });
  }, [query, filters]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200">
        <div className="relative">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by product name, category, thickness, or feature..."
            className="w-full px-5 py-4 pl-12 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="mt-6 space-y-4">
          <FilterRow
            legend="By Category"
            options={productCategories}
            selected={filters.category}
            onSelect={(category) => setFilters((f) => ({ ...f, category }))}
            activeClass="bg-blue-600 text-white"
          />
          <FilterRow
            legend="By Feature"
            options={productFeatures}
            selected={filters.feature}
            onSelect={(feature) => setFilters((f) => ({ ...f, feature }))}
            activeClass="bg-emerald-600 text-white"
          />
          <FilterRow
            legend="By Industry"
            options={productIndustries}
            selected={filters.industry}
            onSelect={(industry) => setFilters((f) => ({ ...f, industry }))}
            activeClass="bg-orange-600 text-white"
          />
        </div>

        <div className="mt-6 border-t border-slate-100 pt-6" aria-live="polite">
          {!hasCriteria ? (
            <p className="text-center text-sm text-slate-500">
              Start typing or apply a filter to narrow down {productCatalog.length} products.
            </p>
          ) : results.length === 0 ? (
            <div className="text-center">
              <p className="text-sm text-slate-600">
                Nothing matches that combination. We build to spec, so tell us what you need.
              </p>
              <Link
                href="/get-a-quote"
                className="mt-3 inline-flex rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
              >
                Describe your requirement
              </Link>
            </div>
          ) : (
            <>
              <p className="text-sm text-slate-500">
                {results.length} {results.length === 1 ? 'match' : 'matches'}
              </p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {results.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={product.href}
                      className="block h-full rounded-xl border border-slate-200 p-4 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
                    >
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {product.category}
                      </p>
                      <p className="mt-1 font-semibold text-slate-900">{product.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{product.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {hasCriteria && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setFilters(EMPTY_FILTERS);
            }}
            className="mt-4 text-sm font-medium text-blue-600 hover:underline"
          >
            Clear search and filters
          </button>
        )}
      </div>
    </div>
  );
}
