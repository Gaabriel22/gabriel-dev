export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-blue">Obrigado pela mensagem!</h1>
        <p className="text-gray-400 text-lg mb-8">Recebi seu contato e vou te responder o mais rápido possível.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold glow-on-hover transition"
        >
          Voltar para o início
        </a>
      </div>
    </section>
  )
}
