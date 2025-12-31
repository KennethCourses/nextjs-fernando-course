import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricing Page',
    keywords: ['Pricing', 'Pricing Page', 'Page Pricing'],
};

export default function PricingPage() {
    return (
        <div className="text-5xl">Pricing Page</div>
    )
}