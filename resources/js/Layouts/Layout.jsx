import { Link } from "@inertiajs/react";

export default function Layout ({children}) {
    return (
        <main>
        <header>
            <nav className="relative bg-gray-800">
                <div className="flex space-x-4">
                    <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</Link>
                    <Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</Link>
                    <Link href="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</Link>
                </div>
            </nav>
        </header>
        <article>{children}</article>
        </main>
    )
}