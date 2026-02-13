import { Helmet } from 'react-helmet-async';

const Privacy = () => (
    <>
        <Helmet><title>Privacy Policy - Katalyx</title></Helmet>
        <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#16213e] py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
                <p className="mb-4 text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
                <div className="prose lg:prose-xl prose-invert text-gray-300">
                    <p>At Katalyx Solutions, we value your privacy...</p>
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly to us through our contact forms...</p>
                    <h2>2. How We Use Information</h2>
                    <p>We use the information to respond to your inquiries and improve our services...</p>
                </div>
            </div>
        </div>
    </>
);

export default Privacy;
