import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Page',
    keywords: ['Contact', 'Contact Page', 'Page Contact'],
};

export default function ContactPage() {
    return (
        <div className="text-5xl">Contact Page</div>
    )
}