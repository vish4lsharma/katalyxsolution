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


            <section className="py-24 bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] min-h-screen relative">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="container mx-auto px-6 relative z-10 pt-12">
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold mb-6 text-white"
                        >
                            Latest <span className="text-blue-500">Insights</span>
                        </motion.h1>
                        <p className="text-gray-400 text-lg mb-8">Exploring the frontier of technology, strategy, and innovation.</p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative max-w-md mx-auto"
                        >
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 pl-12 rounded-full bg-gray-900/80 border border-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-500 shadow-xl backdrop-blur-sm"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                        </motion.div>

                        {/* Tag filters */}
                        <div className="mt-6 flex flex-wrap gap-2 justify-center">
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/8'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-3 gap-10">
                            {filteredPosts.map((post, index) => (
                                <Link to={`/blog/${post.id}`} key={index}>
                                    <motion.article
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -10 }}
                                        className="h-full group cursor-pointer bg-gradient-to-br from-[#16213e] to-[#0f0f1a] rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-blue-500/50 transition-all flex flex-col"
                                    >
                                        <div className="h-56 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity" />
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                                <span className="flex items-center gap-1"><User size={14} /> {post.author.split(' ')[0]}</span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    {(post.tags || []).map((t) => (
                                                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300">{t}</span>
                                                    ))}
                                                </div>
                                                <span className="text-blue-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                                    Read Article <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl text-gray-400">No articles found matching "{searchQuery}"</h3>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Blog;
