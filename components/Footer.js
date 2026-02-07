export default function Footer() {
    return (
        <footer className="bg-navy text-slate-400 py-16 border-t border-slate-800">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
                <div className="col-span-2">
                    <div className="h-10 w-10 bg-gradient-to-br from-electric to-blue-400 rounded-lg flex items-center justify-center text-white font-bold mb-6">
                        V
                    </div>
                    <p className="max-w-xs mb-6 font-medium text-slate-300">
                        Building the digital backbone of the modern economy.
                    </p>
                    <p className="max-w-xs mb-6 text-xs">
                        Vendax Systems Labs is a team of AI engineers. We engineer high-performance software infrastructure for the world.
                    </p>
                    <div className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} Vendax Systems Labs. All rights reserved.
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Corporate</h4>
                    <ul className="space-y-2">
                        <li><a href="/careers" className="hover:text-electric transition-colors">Careers</a></li>
                        <li><a href="/press" className="hover:text-electric transition-colors">Press</a></li>
                        <li><a href="/contact" className="hover:text-electric transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li><a href="/privacy-policy" className="hover:text-electric transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-electric transition-colors">Terms of Service</a></li>
                    </ul>
                    <div className="mt-8 pt-8 border-t border-slate-800">
                        <p className="mb-2 text-xs uppercase tracking-wider text-slate-600">Corporate Address</p>
                        <a href="mailto:support@vendaxsystemlabs.com" className="text-white hover:text-electric transition-colors">support@vendaxsystemlabs.com</a>
                        <p className="mt-4 text-xs text-slate-600">
                            Vendax Systems LLC<br />
                            28 Geary St STE 650 Suite #500<br />
                            San Francisco, California 94108<br />
                            United States
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
