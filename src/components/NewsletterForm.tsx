'use client';

import { useState } from 'react';

export function NewsletterForm() {
    const [email, setEmail] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setEmail('');
    }

    return (
        <div className="bg-black rounded-2xl mx-4 md:mx-0 my-8">
            <div className="px-4 md:px-40 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <h2 className="font-heading text-white text-2xl md:text-[40px] font-bold leading-tight uppercase max-w-xs md:max-w-sm">
                    Stay upto date about our latest offers
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 w-full md:max-w-sm"
                >
                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-gray-400 pointer-events-none">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M22 6l-10 7L2 6"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className="w-full rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 pl-12 pr-5 py-3 text-sm focus:outline-none focus:border-white/60"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-full bg-white text-black font-medium py-3 text-sm hover:bg-gray-100 transition-colors"
                    >
                        Subscribe to Newsletter
                    </button>
                </form>
            </div>
        </div>
    );
}
