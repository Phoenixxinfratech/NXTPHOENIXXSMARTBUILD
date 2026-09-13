'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BlogListing } from '@/lib/blog-data';

const FALLBACK_IMAGE =
  '/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp';

const ALL = 'All';
const PAGE_SIZE = 24;
// Below this, a category is a tail of one or two posts and only adds noise to
// the filter bar. Those posts still appear under "All".
const MIN_POSTS_FOR_TAB = 3;

export function BlogList({ posts }: { posts: BlogListing[] }) {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Derived from the posts themselves; a hardcoded list silently goes stale as
  // categories are added, which is how Export ended up with 10 posts and no tab.
  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) counts.set(post.category, (counts.get(post.category) || 0) + 1);
    return [
      ALL,
      ...Array.from(counts.entries())
        .filter(([, count]) => count >= MIN_POSTS_FOR_TAB)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([category]) => category),
    ];
  }, [posts]);

  const showFeatured = activeCategory === ALL;
  const featuredPosts = useMemo(() => posts.filter((p) => p.featured), [posts]);
  const listedPosts = useMemo(() => {
    if (activeCategory === ALL) return posts.filter((p) => !p.featured);
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <section className="py-6 bg-white border-b sticky top-0 z-20">
        <div className="container-custom">
          <div
            className="flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {showFeatured && featuredPosts.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredPosts.map((post, idx) => (
                <article
                  key={post.slug}
                  className={`group rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                    idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <div className={`relative overflow-hidden bg-slate-100 ${idx === 0 ? 'h-64 lg:h-80' : 'h-48'}`}>
                    <Image
                      src={post.coverImage || FALLBACK_IMAGE}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes={idx === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 1024px) 100vw, 33vw'}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">{post.date}</span>
                      <span className="text-xs text-slate-500">&bull; {post.readTime}</span>
                    </div>
                    <h3 className={`font-bold text-slate-900 group-hover:text-blue-600 transition-colors ${idx === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {post.title}
                    </h3>
                    <p className={`mt-2 text-slate-600 ${idx === 0 ? '' : 'text-sm line-clamp-2'}`}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/resources/blogs/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Read Article &rarr;
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {activeCategory === ALL ? 'Recent Articles' : activeCategory}
            <span className="ml-3 text-base font-normal text-slate-500">
              {listedPosts.length} {listedPosts.length === 1 ? 'article' : 'articles'}
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {listedPosts.slice(0, visibleCount).map((post) => (
              <Link key={post.slug} href={`/resources/blogs/${post.slug}`}>
                <article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-blue-200 hover:shadow-md transition-all h-full">
                  <div className="relative h-40 overflow-hidden bg-slate-100">
                    <Image
                      src={post.coverImage || FALLBACK_IMAGE}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">{post.date}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          {listedPosts.length > visibleCount && (
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Load more articles ({listedPosts.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
