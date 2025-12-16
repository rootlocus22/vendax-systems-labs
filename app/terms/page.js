"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h1 className="text-4xl font-bold text-navy mb-4">Terms of Service</h1>
                    <p className="text-slate-500 mb-12">Last Updated: December 15, 2025</p>

                    <div className="prose prose-slate max-w-none">
                        <h3>1. Agreement to Terms</h3>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Vendax Systems LLC ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                        </p>

                        <h3>2. Intellectual Property Rights</h3>
                        <p>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>

                        <h3>3. User Representations</h3>
                        <p>
                            By using the Site, you represent and warrant that:
                        </p>
                        <ul>
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You are not a minor in the jurisdiction in which you reside.</li>
                        </ul>

                        <h3>4. Prohibited Activities</h3>
                        <p>
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>

                        <h3>5. Limitation of Liability</h3>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>

                        <h3>6. Governing Law</h3>
                        <p>
                            These Terms shall be governed by and defined following the laws of the State of California. Vendax Systems LLC and yourself irrevocably consent that the courts of California shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <p>
                            <strong>Vendax Systems LLC</strong><br />
                            28 Geary St STE 650 Suite #500<br />
                            San Francisco, California 94108<br />
                            United States<br />
                            Email: <a href="mailto:support@vendaxsystemlabs.com" className="text-electric">support@vendaxsystemlabs.com</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
