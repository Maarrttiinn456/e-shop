import Link from 'next/link';
import { NewsletterForm } from './NewsletterForm';

const footerLinks = {
    company: {
        title: 'Company',
        links: ['About', 'Features', 'Works', 'Career'],
    },
    help: {
        title: 'Help',
        links: [
            'Customer Support',
            'Delivery Details',
            'Terms & Conditions',
            'Privacy Policy',
        ],
    },
    faq: {
        title: 'FAQ',
        links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
    },
    resources: {
        title: 'Resources',
        links: [
            'Free eBooks',
            'Development Tutorial',
            'How to - Blog',
            'Youtube Playlist',
        ],
    },
};

export function Footer() {
    return (
        <footer className="w-full border-t border-black/10 bg-white">
            <div className="container">
                <NewsletterForm />

                {/* Main footer grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10 md:py-14">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
                        <Link href="/">
                            <span className="text-[28px] font-bold font-heading leading-none tracking-tight">
                                SHOP.CO
                            </span>
                        </Link>
                        <p className="text-sm text-black/60 leading-relaxed">
                            We have clothes that suits your style and which
                            you're proud to wear. From women to men.
                        </p>
                    </div>

                    {/* Navigation columns */}
                    {Object.values(footerLinks).map((section) => (
                        <div
                            key={section.title}
                            className="flex flex-col gap-4"
                        >
                            <h3 className="font-heading font-bold text-sm tracking-widest uppercase">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-black/60 hover:text-black transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
