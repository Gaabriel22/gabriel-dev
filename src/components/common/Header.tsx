export default function Header() {
  return (
    <>
      <header>
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold neon-text-blue">
              GABRIEL <span className="neon-text-coral">AMARAL</span>
            </a>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white neon-text-blue-hover transition">
                Home
              </a>
              <a href="#about" className="text-white neon-text-blue-hover transition">
                Sobre
              </a>
              <a href="#projects" className="text-white neon-text-blue-hover transition">
                Projetos
              </a>
              <a href="#services" className="text-white neon-text-blue-hover transition">
                Serviços
              </a>
              <a href="#contact" className="text-white neon-text-blue-hover transition">
                Contato
              </a>
            </div>

            <div className="md:hidden">
              <button id="menu-btn" className="hamburger focus:outline-none">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden bg-black bg-opacity-90 w-full px-6 py-4">
            <div>
              <a href="#home" className="text-white neon-text-blue-hover transition">
                Home
              </a>
              <a href="#about" className="text-white neon-text-blue-hover transition">
                Sobre
              </a>
              <a href="#projects" className="text-white neon-text-blue-hover transition">
                Projetos
              </a>
              <a href="#services" className="text-white neon-text-blue-hover transition">
                Serviços
              </a>
              <a href="#contact" className="text-white neon-text-blue-hover transition">
                Contato
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
