import { Helmet } from 'react-helmet-async';

const Terms = () => (
    <>
        <Helmet><title>Terms of Service - Katalyx</title></Helmet>
        <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
                <div className="prose lg:prose-xl prose-invert text-gray-300">
                    <p>By accessing this website, you agree to be bound by these Terms of Service...</p>
                    <h2>1. Intellectual Property</h2>
                    <p>The content, features, and functionality are owned by Katalyx Solutions...</p>
                </div>
            </div>
        </div>
    </>
);

export default Terms;
