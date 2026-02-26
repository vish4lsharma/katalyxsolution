import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

import aiBlog from '../assets/images/ai_blog.jpg';
import cloudBlog from '../assets/images/cloud_blog.jpg';
import strategyBlog from '../assets/images/strategy_blog.jpg';

const blogPosts = {
    'ai-in-enterprise': {
        title: 'The Future of AI in Enterprise',
        category: 'Artificial Intelligence',
        date: 'Oct 12, 2023',
        author: 'Katalyx Team',
        image: aiBlog,
        content: [
            'Artificial Intelligence is no longer just a buzzword; it is the backbone of modern enterprise efficiency. At Katalyx Solutions, we have seen firsthand how generative AI and machine learning are reshaping the way businesses operate, from automating mundane tasks to providing deep predictive analytics.',
            'The integration of AI into enterprise workflows allows teams to focus on high-value creative tasks while machines handle the data-heavy processing. This synergy results in faster decision-making processes and significantly reduced operational costs.',
            'One of the most exciting developments is the rise of Custom LLMs (Large Language Models) tailored for specific business domains. These models can understand unique company terminologies, compliance rules, and historical data, making them far more effective than generic out-of-the-box solutions.',
            'As we move into 2026, the focus will shift from simple automation to "Cognitive Business Operations," where AI systems act as co-pilots for every department, from HR to Finance. Companies that embrace this shift early will define the next decade of innovation.'
        ]
    },
    'cloud-security-best-practices': {
        title: 'Cloud Security Best Practices',
        category: 'Cybersecurity',
        date: 'Sep 28, 2023',
        author: 'Katalyx Team',
        image: cloudBlog,
        content: [
            'As organizations migrate more of their mission-critical infrastructure to the cloud, security becomes a moving target. The perimeter is no longer a physical wall but a complex web of identities and permissions.',
            'Zero Trust Architecture is the gold standard for cloud security today. The philosophy is simple: never trust, always verify. Every request, whether originating from inside or outside the network, must be authenticated and authorized based on least-privileged access.',
            'Automated threat detection and response is another crucial pillar. By utilizing AI-driven monitoring tools, we can identify anomalies in network traffic that might signal a breach long before a human analyst could detect it.',
            'Finally, encryption is non-negotiable. Both data at rest and data in transit must be encrypted using industry-standard protocols. At Katalyx, we emphasize that cloud security is a shared responsibility, and proactive measures are the best defense against evolving cyber threats.'
        ]
    },
    'digital-transformation-roadmap': {
        title: 'Digital Transformation Roadmap',
        category: 'Strategy',
        date: 'Sep 15, 2023',
        author: 'Katalyx Team',
        image: strategyBlog,
        content: [
            'Digital transformation is not about buying new tech; it\'s about evolving your business culture to leverage digital capabilities. A successful roadmap starts with a clear understanding of the "Why" before tackling the "How."',
            'The first stage of our roadmap always begins with Digital Maturity Assessment. We evaluate current systems, pinpoint bottlenecks, and identify high-impact areas where technology can drive immediate value.',
            'Next comes the implementation of a scalable architecture. Moving away from monolithic legacy systems to microservices and cloud-native environments allows for the agility needed in today\'s fast-paced market.',
            'Continuous iteration is the final and most important step. Digital transformation is an ongoing journey, not a destination. By fostering a data-driven culture, businesses can pivot quickly based on real-time insights and customer feedback.'
        ]
    }
};

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts[id];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold text-slate-900">Article Not Found</h1>
                    <Link to="/blog" className="text-sky-600 hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | Katalyx Solutions Blog</title>
                <meta name="description" content={post.content[0].substring(0, 160)} />
                <meta name="keywords" content={`${post.category}, ${post.title}, Katalyx blog, technology insights, AI enterprise`} />
                <link rel="canonical" href={`https://katalyxsolutions.com/blog/${id}`} />
                <meta property="og:title" content={`${post.title} | Katalyx Solutions`} />
                <meta property="og:description" content={post.content[0].substring(0, 160)} />
                <meta property="og:url" content={`https://katalyxsolutions.com/blog/${id}`} />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://katalyxsolutions.com/og-image.png" />
                <meta property="article:published_time" content={post.date} />
                <meta property="article:author" content="Katalyx Solutions" />
                <meta property="article:section" content={post.category} />
                <meta name="twitter:title" content={`${post.title} | Katalyx Blog`} />
                <meta name="twitter:description" content={post.content[0].substring(0, 160)} />
                <meta name="twitter:image" content="https://katalyxsolutions.com/og-image.png" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": post.title,
                    "description": post.content[0].substring(0, 200),
                    "author": { "@type": "Organization", "name": "Katalyx Solutions", "url": "https://katalyxsolutions.com" },
                    "publisher": { "@type": "Organization", "name": "Katalyx Solutions", "logo": { "@type": "ImageObject", "url": "https://katalyxsolutions.com/favicon.svg" } },
                    "datePublished": post.date,
                    "dateModified": post.date,
                    "url": `https://katalyxsolutions.com/blog/${id}`,
                    "image": "https://katalyxsolutions.com/og-image.png",
                    "articleSection": post.category,
                    "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://katalyxsolutions.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://katalyxsolutions.com/blog" }, { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://katalyxsolutions.com/blog/${id}` }] }
                })}</script>
            </Helmet>

            <article className="relative min-h-screen overflow-hidden bg-white pt-32 pb-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),_rgba(248,250,252,0.92),_rgba(255,255,255,1))]" />
                <div className="absolute -top-36 right-[-8%] h-[460px] w-[460px] rounded-full bg-sky-200/30 blur-3xl" />
                <div className="absolute bottom-[-18%] left-[-8%] h-[400px] w-[400px] rounded-full bg-indigo-100/30 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link to="/blog" className="group flex items-center gap-2 text-sky-600 transition-colors hover:text-sky-700">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="mb-6 flex items-center gap-4 text-sm font-semibold text-sky-600">
                            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 uppercase tracking-wider">{post.category}</span>
                            <span className="flex items-center gap-1 text-slate-500"><Calendar size={14} /> {post.date}</span>
                        </div>

                        <h1 className="mb-8 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                            {post.title}
                        </h1>

                        <div className="mb-12 flex items-center gap-4 border-b border-sky-100 pb-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 font-bold text-white">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">{post.author}</p>
                                <p className="text-sm text-slate-500">Tech Strategist @ Katalyx</p>
                            </div>
                        </div>

                        <div className="mb-12 overflow-hidden rounded-3xl border border-sky-100 shadow-[0_18px_35px_rgba(14,116,144,0.14)]">
                            <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                        </div>

                        <div className="max-w-none">
                            {post.content.map((paragraph, i) => (
                                <p key={i} className="mb-6 text-lg leading-relaxed text-slate-700">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-sky-100 pt-8 md:flex-row">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-2 font-semibold italic text-slate-600"><Share2 size={18} /> Share this article:</span>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                                        className="text-slate-500 transition-colors hover:text-sky-600"
                                        aria-label="Share on Facebook"
                                    >
                                        <Facebook size={20} />
                                    </button>
                                    <button
                                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                                        className="text-slate-500 transition-colors hover:text-sky-500"
                                        aria-label="Share on Twitter"
                                    >
                                        <Twitter size={20} />
                                    </button>
                                    <button
                                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                                        className="text-slate-500 transition-colors hover:text-sky-700"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </button>
                                    {typeof navigator !== 'undefined' && navigator.share && (
                                        <button
                                            onClick={() => navigator.share({ title: post.title, text: post.content[0], url: window.location.href })}
                                            className="text-slate-500 transition-colors hover:text-sky-600"
                                            aria-label="Share via..."
                                        >
                                            <Share2 size={20} />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="rounded-full border border-sky-500 bg-sky-400 px-8 py-3 font-bold text-white shadow-lg shadow-sky-500/20 transition-colors hover:bg-sky-500"
                                >
                                    Discuss Your Strategy
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </article>
        </>
    );
};

export default BlogDetail;
