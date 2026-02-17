import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Terms = () => (
    <>
        <Helmet>
            <title>Terms of Service - Katalyx Solutions</title>
            <meta name="description" content="Terms of Service for Katalyx Solutions services and products." />
        </Helmet>
        <div className="min-h-screen bg-[#0f0f1a] pt-32 pb-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] pointer-events-none" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Terms of Service</h1>
                    <p className="mb-12 text-gray-400 flex items-center gap-2">
                        Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="space-y-12 text-gray-300 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                            <p>
                                By accessing or using the website and services provided by Katalyx Solutions ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
                            <h3 className="text-xl font-semibold text-blue-400 mb-2">License to Use</h3>
                            <p className="mb-4">
                                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use our services for your internal business purposes.
                            </p>
                            <h3 className="text-xl font-semibold text-blue-400 mb-2">Prohibited Conduct</h3>
                            <p>You agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Use the services for any illegal purpose or in violation of any local, state, national, or international law.</li>
                                <li>Violate, or encourage others to violate, any right of a third party, including by infringing or misappropriating any third-party intellectual property right.</li>
                                <li>Interfere with security-related features of the services, including by: (i) disabling or circumventing features that prevent or limit use or copying of any content; or (ii) reverse engineering or otherwise attempting to discover the source code of any portion of the services.</li>
                                <li>Interfere with the operation of the services or any user's enjoyment of the services, including by: (i) uploading or otherwise disseminating any virus, adware, spyware, worm, or other malicious code; (ii) making any unsolicited offer or advertisement to another user of the services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
                            <p>
                                The services and their original content, features, and functionality are and will remain the exclusive property of Katalyx Solutions and its licensors. The services are protected by copyright, trademark, and other laws of India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Katalyx Solutions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. User Accounts</h2>
                            <p>
                                When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                            </p>
                            <p className="mt-4">
                                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. SaaS Subscription Services</h2>
                            <p className="mb-4">
                                Certain aspects of the Services are provided on a subscription basis ("SaaS Subscriptions").
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Billing:</strong> You will be billed in advance on a recurring and periodic basis (such as monthly or annually), depending on the type of subscription plan you select when purchasing a Subscription.</li>
                                <li><strong>Cancellation:</strong> You may cancel your Subscription renewal either through your online account management page or by contacting our customer support team.</li>
                                <li><strong>Changes to Fee:</strong> Katalyx Solutions, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                            <p>
                                In no event shall Katalyx Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer</h2>
                            <p>
                                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at <a href="mailto:support@katalyxsolutions.com" className="text-blue-400 hover:text-blue-300 transition-colors">support@katalyxsolutions.com</a>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    </>
);

export default Terms;
