import Layout from "../components/layout/Layout";

export default function Contact() {
  return (
    <Layout title="Contacto - Escuela de Equitación Yolanda Morales">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('/images/gallery/horse2.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e553b]/90 to-[#1e553b]/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <div className="inline-block bg-[#c8a415] px-4 py-1 rounded-full mb-4 border border-[#c8a415]">
              <p className="text-white text-sm font-medium">Estamos aquí para ti</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif text-shadow">
              Contáctanos
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto text-shadow">
              Estamos aquí para responder tus preguntas y ayudarte a comenzar tu aventura ecuestre.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f0e9db] to-transparent"></div>
      </div>
      
      <div className="bg-[#f0e9db] py-16">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="w-16 h-1 bg-[#c8a415] mb-4"></div>
            <h2 className="text-3xl font-bold text-[#1e553b] font-serif">Estamos para Ayudarte</h2>
            <p className="text-[#333333] mt-4 max-w-2xl text-lg">Ponte en contacto con nosotros para resolver tus dudas o programar una visita a nuestras instalaciones.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-[#1e553b]"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#1e553b]/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md text-[#1e553b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e553b] tracking-wide">Información de Contacto</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-[#4a5568]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-3 text-[#c8a415]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="font-medium">+57 313 496 0546</p>
                  </div>
                  <div className="flex items-center text-[#4a5568]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-3 text-[#c8a415]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="font-medium">caballosyolamr1627@hotmail.com</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 mb-6">
                  <h4 className="text-[#1a365d] font-semibold mb-3">Horario de Atención</h4>
                  <div className="text-[#4a5568] p-4 bg-gray-50 rounded-lg shadow-sm">
                    <div className="flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-medium">Lunes y Jueves 3:00 PM a 5:00 PM</p>
                    </div>
                    <div className="flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-medium">Resto de la semana 8:00 AM a 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Direct Contact Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-[#c8a415]"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#c8a415]/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md text-[#c8a415]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a365d] tracking-wide">Contáctanos Directamente</h3>
                </div>
                
                <div className="space-y-6">
                  {/* WhatsApp Button */}
                  <a 
                    href="https://wa.me/573134960546" 
                    target="_blank"
                    className="w-full py-4 bg-[#25D366] hover:bg-[#20BD5C] text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Contáctanos por WhatsApp
                  </a>
                  
                  {/* Instagram Button */}
                  <a 
                    href="https://instagram.com/el_real_de_lajara" 
                    target="_blank"
                    className="w-full py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:from-[#833AB4]/90 hover:via-[#FD1D1D]/90 hover:to-[#FCAF45]/90 text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Síguenos en Instagram
                  </a>
                  
                  {/* Facebook Button */}
                  <a 
                    href="https://www.facebook.com/yolanda.morales.757302" target="_blank"
                    className="w-full py-4 bg-gradient-to-r from-[#1877F2] to-[#166FE5] hover:from-[#166FE5] hover:to-[#0e5fc7] text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-3 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    Síguenos en Facebook
                  </a>

                  {/* Ticktok Button */}
                  <a
                    href="https://www.tiktok.com/@elreal_de_lajara" target="_blank"
                    className="w-full py-4 bg-[#000000] hover:bg-[#2d3748] text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Síguenos en Tiktok
                  </a>
                  
                </div>
              </div>
            </div>
            
            {/* Location Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-2 bg-[#2d7e56]"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-[#2d7e56]/10 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon-md text-[#2d7e56]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e553b] tracking-wide">Encuéntranos</h3>
                </div>
                
                <div className="mb-6 bg-gray-100 rounded-lg overflow-hidden h-48">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0627751602387!2d-74.15613062443579!3d4.929156839633506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e407fa59cecf8fd%3A0x8ec9c7b1fc5e2760!2sEscuela%20de%20Equitaci%C3%B3n%20Real%20De%20la%20Jara%20Subachoque!5e0!3m2!1ses!2sco!4v1754273957843!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                
                <div className="flex items-center text-[#4a5568] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-3 text-[#2d7e56]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Subachoque, Cundinamarca, Colombia</p>
                </div>
                
                <p className="text-[#4a5568] mb-4">
                  Estamos ubicados en una hermosa finca a las afueras de Subachoque, con amplios espacios verdes y excelentes instalaciones para la práctica de la equitación.
                </p>
                
                <div className="bg-[#f8f9fa] border border-gray-100 rounded-md p-4">
                  <p className="text-sm text-[#4a5568]">
                    <span className="font-semibold text-[#2d7e56]">Nota:</span> Para visitas, por favor agenda una cita previa a través de nuestro teléfono.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
