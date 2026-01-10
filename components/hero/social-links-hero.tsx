'use client'

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const SocialLinksHero = ({ links }: any) => {

    const socialLinks = [
        { icon: Linkedin, href: links.linkedin_link || "#", label: "LinkedIn" },
        { icon: Github, href: links.github_link || "#", label: "GitHub" },
        { icon: Twitter, href: links.twitter_link || "#", label: "Twitter" },
        { icon: Mail, href: "#contact", label: "Email" },
    ];

    return (
        <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
            {socialLinks.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                </a>
            ))}
        </div>
    );
}