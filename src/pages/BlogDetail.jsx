import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

import aiBlog from '../assets/images/ai_blog.jpg';
import cloudBlog from '../assets/images/cloud_blog.jpg';
import strategyBlog from '../assets/images/strategy_blog.jpg';

const blogPosts = {
    'ai-in-enterprise': {
        title: 'The Future of AI in Enterprise',
        category: 'Artificial Intelligence',
        date: 'Oct 12, 2023',
        author: 'Vishal Sharma',
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
        author: 'Anmol Babu',
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
        author: 'Yash Gupta',
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
            <div className="min-h-screen flex items-center justify-center bg-[#0f0f1a]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                    <Link to="/blog" className="text-blue-400 hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{post.title} - Katalyx Blog</title>
                <meta name="description" content={post.content[0].substring(0, 160)} />
            </Helmet>

            <article className="pt-32 pb-24 bg-[#0f0f1a] min-h-screen">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link to="/blog" className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors group">
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-4 text-sm text-blue-400 font-semibold mb-6">
                            <span className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                            <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> {post.date}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-8">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white">
                                {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <p className="text-white font-semibold">{post.author}</p>
                                <p className="text-gray-500 text-sm">Tech Strategist @ Katalyx</p>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl border border-gray-800">
                            <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                        </div>

                        <div className="prose prose-invert max-w-none">
                            {post.content.map((paragraph, i) => (
                                <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400 font-semibold flex items-center gap-2 italic"><Share2 size={18} /> Share this article:</span>
                                <div className="flex gap-4">
                                    <button className="text-gray-400 hover:text-blue-500 transition-colors"><Facebook size={20} /></button>
                                    <button className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></button>
                                    <button className="text-gray-400 hover:text-blue-700 transition-colors"><Linkedin size={20} /></button>
                                </div>
                            </div>
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
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
