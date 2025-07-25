import EnvelopeIcon from "../icons/EnvelopeIcon"
import LocationIcon from "../icons/LocationIcon"
import PhoneIcon from "../icons/PhoneIcon"
import SocialIcons from "../icons/SocialIcons"

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-coral">
            <span className="neon-text-blue">// </span>
            Vamos Conversar
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato para discutirmos seu projeto.
          </p>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-glow w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Como posso te chamar?"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-glow w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    className="input-glow w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione o assunto
                    </option>
                    <option value="project">Novo Projeto</option>
                    <option value="consulting">Consultoria</option>
                    <option value="job">Oportunidade de Emprego</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input-glow w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Descreva seu projeto ou dúvida..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg font-bold text-lg glow-on-hover transition"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-black bg-opacity-50 p-8 rounded-lg neon-border-blue h-full">
                <h3 className="text-2xl font-bold mb-6 neon-text-blue">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900 bg-opacity-50 flex items-center justify-center neon-border-blue mr-4">
                      <PhoneIcon />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Telefone</h4>
                      <p className="text-gray-300">+55 (11) 98716-4669</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900 bg-opacity-50 flex items-center justify-center neon-border-blue mr-4">
                      <EnvelopeIcon />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p className="text-gray-300">gabrielvieira2205@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-900 bg-opacity-50 flex items-center justify-center neon-border-blue mr-4">
                      <LocationIcon />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Localização</h4>
                      <p className="text-gray-300">São Paulo, Brasil</p>
                      <p className="text-gray-400 text-sm">Atendimento remoto mundial</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-4 neon-text-coral">Redes Sociais</h4>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
