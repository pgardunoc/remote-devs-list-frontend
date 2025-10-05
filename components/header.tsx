import Link from "next/link"
import { Code2 } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Code2 className="h-6 w-6" />
            <span className="text-xl font-semibold">Remote Developers List</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {/* <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Developers
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link> */}
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
