import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

import aiBlog from '../assets/images/ai_blog.jpg';
import cloudBlog from '../assets/images/cloud_blog.jpg';
import strategyBlog from '../assets/images/strategy_blog.jpg';

const Blog = () => {
    const posts = [
        {
            id: 'ai-in-enterprise',
            title: 'The Future of AI in Enterprise',
            excerpt: 'How generative AI is reshaping business operations and decision making.',
            date: 'Oct 12, 2023',
            category: 'Artificial Intelligence',
            image: aiBlog,
            author: 'Vishal Sharma'
        },
        {
            id: 'cloud-security-best-practices',
            title: 'Cloud Security Best Practices',
            excerpt: 'Essential strategies to protect your infrastructure in a multi-cloud environment.',
            date: 'Sep 28, 2023',
            category: 'Cybersecurity',
            image: cloudBlog,
            author: 'Anmol Babu'
        },
        {
            id: 'digital-transformation-roadmap',
            title: 'Digital Transformation Roadmap',
            excerpt: 'A step-by-step guide to modernizing your legacy systems.',
            date: 'Sep 15, 2023',
            category: 'Strategy',
            image: strategyBlog,
            author: 'Yash Gupta'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Blog - Katalyx Insights</title>
            </Helmet>

            <section className="py-24 bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] min-h-screen relative">
                <div className="absolute inset-0 bg-black/20 z-0" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl mx-auto text-center mb-20 pt-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold mb-6 text-white"
                        >
                            Latest <span className="text-blue-500">Insights</span>
                        </motion.h1>
                        <p className="text-gray-400 text-lg">Exploring the frontier of technology, strategy, and innovation.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {posts.map((post, index) => (
                            <Link to={`/blog/${post.id}`} key={index}>
                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="h-full group cursor-pointer bg-gradient-to-br from-[#16213e]/80 to-[#0f0f1a] rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-blue-500/50 transition-all flex flex-col"
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
                                            <span className="text-blue-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Read Article <ArrowRight size={16} />
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
