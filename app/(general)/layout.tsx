import { Navbar } from "@/components";

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center">
                <h1 className="text-lg">Hola Mundo</h1>
                {children}
            </main>
        </>
    );
}