export default function Footer() {
  return (
    <>
      <footer className="py-8 bg-black bg-opacity-80">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-2xl font-bold neon-text-blue">
                GABRIEL <span className="neon-text-coral">AMARAL</span>
              </a>
              <p className="text-gray-400 mt-2">Transformando ideias em realidade digital.</p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400">&copy; 2025 Gabriel Amaral. Todos os direitos reservados.</p>
              <div className="flex space-x-4 mt-2">
                <a href="" className="text-gray-400 hover:text-white transition">
                  Termos
                </a>
                <a href="" className="text-gray-400 hover:text-white transition">
                  Privacidade
                </a>
                <a href="" className="text-gray-400 hover:text-white transition">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
