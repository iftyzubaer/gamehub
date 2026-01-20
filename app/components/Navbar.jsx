import Link from 'next/link'
import { FaGamepad, FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <FaGamepad className="text-3xl text-red-600" />
            <span className="text-2xl font-black uppercase tracking-tight">
              <span className="text-white">Game</span>
              <span className="text-red-600">Hub</span>
            </span>
          </Link>
          
          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a 
              href="https://iftyzubaer.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors hidden md:block"
            >
              Portfolio
            </a>
            <a 
              href="https://github.com/iftyzubaer/gamehub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
              aria-label="View source on GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}