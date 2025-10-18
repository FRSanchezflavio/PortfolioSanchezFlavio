import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'flavio@example.com',
      href: 'mailto:flavio@example.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+54 (381) XXX-XXXX',
      href: 'tel:+54381XXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Tucumán, Argentina',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-police-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-police-light mb-4">
            Ponte en <span className="text-police-gold">Contacto</span>
          </h2>
          <p className="text-lg text-police-light opacity-70 max-w-2xl mx-auto">
            Estoy disponible para proyectos y colaboraciones. No dudes en
            contactarme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map(info => {
            const Icon = info.icon;
            return (
              <a
                key={info.label}
                href={info.href}
                className="p-6 bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg hover:border-opacity-40 hover:bg-opacity-20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-police rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all">
                  <Icon className="w-6 h-6 text-police-gold" />
                </div>
                <h3 className="text-police-gold font-bold mb-2 uppercase tracking-wider text-sm">
                  {info.label}
                </h3>
                <p className="text-police-light">{info.value}</p>
              </a>
            );
          })}
        </div>

        {/* Formulario */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-police-light text-sm font-bold mb-2 uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg text-police-light placeholder-police-light placeholder-opacity-50 focus:outline-none focus:border-opacity-50 focus:bg-opacity-20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-police-light text-sm font-bold mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg text-police-light placeholder-police-light placeholder-opacity-50 focus:outline-none focus:border-opacity-50 focus:bg-opacity-20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-police-light text-sm font-bold mb-2 uppercase tracking-wider">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg text-police-light placeholder-police-light placeholder-opacity-50 focus:outline-none focus:border-opacity-50 focus:bg-opacity-20 transition-all"
                  placeholder="Asunto"
                />
              </div>

              <div>
                <label className="block text-police-light text-sm font-bold mb-2 uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-police-blue bg-opacity-10 border border-police-gold border-opacity-20 rounded-lg text-police-light placeholder-police-light placeholder-opacity-50 focus:outline-none focus:border-opacity-50 focus:bg-opacity-20 transition-all resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-police text-police-gold font-bold rounded-lg hover:shadow-lg transition-all duration-300 uppercase tracking-wider text-sm border border-police-gold border-opacity-30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
                {!loading && (
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              {success && (
                <div className="p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-40 rounded-lg text-green-400 text-sm">
                  ✓ Mensaje enviado exitosamente
                </div>
              )}
            </form>
          </div>

          {/* Información */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-police-light mb-4">
                ¿Preguntas?
              </h3>
              <p className="text-police-light opacity-70 leading-relaxed mb-6">
                Respondo todos los mensajes dentro de 24-48 horas. Siéntete
                libre de contactarme para consultas, propuestas de proyectos o
                simplemente para saludar.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-police-gold font-bold uppercase tracking-wider text-sm">
                Respuesta Rápida
              </h4>
              <div className="space-y-3">
                {[
                  'Consultas Técnicas',
                  'Propuestas de Proyectos',
                  'Colaboraciones',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-police-gold rounded-full"></span>
                    <span className="text-police-light opacity-75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
