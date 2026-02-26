import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

import aiBlog from '../assets/images/ai_blog.jpg';
import cloudBlog from '../assets/images/cloud_blog.jpg';
import strategyBlog from '../assets/images/strategy_blog.jpg';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const posts = [
        {
            id: 'ai-in-enterprise',
            title: 'The Future of AI in Enterprise',
            excerpt: 'How generative AI is reshaping business operations and decision making.',
            date: 'Oct 12, 2023',
            category: 'Artificial Intelligence',
            image: aiBlog,
            author: 'Vishal Sharma',
            tags: ['AI', 'Enterprise', 'Strategy']
        },
        {
            id: 'cloud-security-best-practices',
            title: 'Cloud Security Best Practices',
            excerpt: 'Essential strategies to protect your infrastructure in a multi-cloud environment.',
            date: 'Sep 28, 2023',
            category: 'Cybersecurity',
            image: cloudBlog,
            author: 'Anmol Babu',
            tags: ['Cloud', 'Security', 'Best Practices']
        },
        {
            id: 'digital-transformation-roadmap',
            title: 'Digital Transformation Roadmap',
            excerpt: 'A step-by-step guide to modernizing your legacy systems.',
            date: 'Sep 15, 2023',
            category: 'Strategy',
            image: strategyBlog,
            author: 'Yash Gupta',
            tags: ['Transformation', 'Strategy', 'Legacy']
        }
    ];

    const [selectedTag, setSelectedTag] = useState('All');

    const allTags = useMemo(() => {
        const set = new Set();
        posts.forEach(p => (p.tags || []).forEach(t => set.add(t)));
        return ['All', ...Array.from(set)];
    }, [posts]);

    const filteredPosts = posts.filter(post => {
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch = !q || post.title.toLowerCase().includes(q) || post.category.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || (post.tags || []).some(t => t.toLowerCase().includes(q));
        const matchesTag = selectedTag === 'All' || (post.tags || []).includes(selectedTag);
        return matchesSearch && matchesTag;
    });

    return (
        <>
            <Helmet>
                <title>Blog – AI, Cloud & Digital Transformation Insights | Katalyx Solutions</title>
                <meta name="description" content="Read Katalyx Solutions' latest insights on AI in enterprise, cloud security best practices, digital transformation strategy and more from our technology experts." />
                <meta name="keywords" content="AI blog India, technology insights, digital transformation blog, cloud security, ERP software blog, Katalyx blog, AI enterprise" />
                <link rel="canonical" href="https://katalyxsolutions.com/blog" />
                <meta property="og:title" content="Blog – AI, Cloud & Digital Transformation Insights | Katalyx Solutions" />
                <meta property="og:description" content="Explore articles on AI, cloud security and digital transformation from Katalyx Solutions' technology experts." />
                <meta property="og:url" content="https://katalyxsolutions.com/blog" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Katalyx Blog – AI & Digital Transformation Insights" />
                <meta name="twitter:description" content="Technology trends, AI insights and cloud strategy from Katalyx Solutions." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Blog",
                    "name": "Katalyx Solutions Blog",
                    "url": "https://katalyxsolutions.com/blog",
                    "description": "Latest insights on AI, cloud and digital transformation from Katalyx Solutions.",
                    "publisher": { "@type": "Organization", "name": "Katalyx Solutions", "url": "https://katalyxsolutions.com" },
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://katalyxsolutions.com/blog" }] }
                })}</script>
            </Helmet>
            <section className="relative min-h-screen overflow-hidden bg-white pt-32 pb-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),_rgba(248,250,252,0.92),_rgba(255,255,255,1))]" />
                <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-sky-200/30 blur-3xl" />
                <div className="absolute bottom-[-18%] left-[-8%] h-[460px] w-[460px] rounded-full bg-indigo-100/30 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-[76rem] px-6">
                    <div className="mx-auto mb-14 max-w-3xl text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4 inline-flex items-center rounded-full border border-sky-200 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600"
                        >
                            Katalyx Journal
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-tight tracking-tight text-slate-900"
                        >
                            Latest <span className="text-sky-500">Insights</span>
                        </motion.h1>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                            Exploring the frontier of technology, strategy, and innovation.
                        </p>

                        <div className="mx-auto max-w-2xl p-1 md:p-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full rounded-full border border-sky-200 bg-white py-3.5 pl-12 pr-5 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm transition-all focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            </motion.div>

                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                {allTags.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => setSelectedTag(tag)}
                                        className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${selectedTag === tag
                                            ? 'border-sky-400 bg-sky-400 text-white shadow-sm shadow-sky-200'
                                            : 'border-sky-200 bg-white text-slate-600 hover:border-sky-300 hover:bg-sky-50'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {filteredPosts.length > 0 ? (
                        <div className="mx-auto grid max-w-[76rem] gap-7 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPosts.map((post, index) => (
                                <Link to={`/blog/${post.id}`} key={index}>
                                    <motion.article
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -8 }}
                                        className="group relative flex h-full min-h-[520px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-sky-100/80 bg-transparent shadow-[0_16px_32px_rgba(14,116,144,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_20px_36px_rgba(14,116,144,0.16)]"
                                    >
                                        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sky-100/70 blur-2xl" />
                                        <div className="relative h-52 overflow-hidden">
                                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent opacity-70 transition-opacity group-hover:opacity-50" />
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute left-4 top-4 z-20">
                                                <span className="rounded-lg bg-sky-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="relative z-10 flex flex-1 flex-col p-6 md:p-7">
                                            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                                                <span className="inline-flex items-center gap-1 rounded-full border border-sky-100 bg-white px-2.5 py-1"><Calendar size={13} /> {post.date}</span>
                                                <span className="inline-flex items-center gap-1 rounded-full border border-sky-100 bg-white px-2.5 py-1"><User size={13} /> {post.author.split(' ')[0]}</span>
                                                <span className="inline-flex rounded-full border border-sky-100 bg-white px-2.5 py-1 text-slate-400">6 min read</span>
                                            </div>
                                            <h2 className="mb-3 min-h-[56px] text-xl font-semibold leading-tight text-slate-900 transition-colors group-hover:text-sky-600" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                {post.title}
                                            </h2>
                                            <p className="mb-5 min-h-[72px] text-sm leading-relaxed text-slate-600" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                {post.excerpt}
                                            </p>
                                            <div className="mt-auto border-t border-sky-100 pt-4">
                                                <div className="mb-3 flex min-h-[56px] flex-wrap content-start items-start gap-2">
                                                    {(post.tags || []).map((t) => (
                                                        <span key={t} className="rounded-md border border-sky-100 bg-sky-50 px-2 py-1 text-xs text-sky-700">{t}</span>
                                                    ))}
                                                </div>
                                                <span className="flex items-center justify-end gap-2 text-sm font-semibold text-sky-600 transition-all group-hover:gap-3">
                                                    Read Article <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <h3 className="text-lg text-slate-600">No articles found matching "{searchQuery}"</h3>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Blog;
