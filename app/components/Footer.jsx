import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-black uppercase mb-4 text-red-600">GameHub</h3>
            <p className="text-gray-400 text-sm">
              Discover top-rated games across all platforms. Built with Next.js and powered by RAWG API.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 text-gray-400">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="https://rawg.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors text-sm"
              >
                <FaExternalLinkAlt className="text-xs" />
                RAWG API
              </a>
              <a 
                href="https://github.com/iftyzubaer/gamehub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors text-sm"
              >
                <FaGithub />
                Source Code
              </a>
            </div>
          </div>
          
          {/* Developer Info */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4 text-gray-400">Developer</h3>
            <p className="text-gray-400 text-sm mb-3">Built by Ifty Zubaer</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/iftyzubaer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/iftyzubaer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://iftyzubaer.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Portfolio"
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} GameHub. Built with Next.js & Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm">
            Data provided by <a href="https://rawg.io" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-orange-500">RAWG</a>
          </p>
        </div>
      </div>
    </footer>
  )
}