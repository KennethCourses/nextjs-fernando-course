import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Page",
    description: "About Page",
    keywords: ['About', 'About Page', 'Page About'],
}

export default function AboutPage() {
    return (
        <div className="text-5xl">About Page</div>
    )
}