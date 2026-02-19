import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Privacy = () => (
    <>
        <Helmet>
            <title>Privacy Policy - Katalyx Solutions</title>
            <meta name="description" content="Privacy Policy for Katalyx Solutions services and products." />
        </Helmet>
        <div className="min-h-screen bg-[#0f0f1a] pt-32 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
                    <p className="mb-12 text-gray-400 flex items-center gap-2">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p>
                                Welcome to Katalyx Solutions ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at info@katalyxsolutions.com.
                            </p>
                            <p className="mt-4">
                                This Privacy Policy applies to all information collected through our website (such as https://www.katalyxsolutions.com), our SaaS products ("Services"), and any related services, sales, marketing, or events.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold text-blue-400 mb-2">Personal Information You Disclose to Us</h3>
                            <p className="mb-4">
                                We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li><strong>Personal Data:</strong> Names, phone numbers, email addresses, mailing addresses, job titles, usernames, passwords, contact preferences, and similar information.</li>
                                <li><strong>Payment Data:</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-blue-400 mb-2">Information Automatically Collected</h3>
                            <p>
                                We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                            <p className="mb-4">
                                We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>To facilitate account creation and logon process.</strong></li>
                                <li><strong>To send you marketing and promotional communications.</strong></li>
                                <li><strong>To send administrative information to you.</strong></li>
                                <li><strong>To fulfill and manage your orders.</strong></li>
                                <li><strong>To post testimonials.</strong></li>
                                <li><strong>To request feedback.</strong></li>
                                <li><strong>To protect our Services.</strong></li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Will Your Information Be Shared With Anyone?</h2>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                                <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                                <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                                <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Use of Cookies and Other Tracking Technologies</h2>
                            <p>
                                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                            <p>
                                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
                            <p>
                                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
                            <p>
                                If you have questions or comments about this policy, you may email us at <a href="mailto:info@katalyxsolutions.com" className="text-blue-400 hover:text-blue-300 transition-colors">info@katalyxsolutions.com</a> or by post to:
                            </p>
                            <address className="mt-4 not-italic bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                                <strong className="text-white block mb-2">Katalyx Solutions</strong>
                                India
                            </address>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    </>
);

export default Privacy;
