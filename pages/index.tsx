import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('/images/gallery/horse1.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e553b]/90 to-[#1e553b]/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#c8a415] px-4 py-1 rounded-full mb-4 border border-[#c8a415]">
              <p className="text-white text-sm font-medium">Experiencia ecuestre de primer nivel</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif text-shadow">
              Escuela de Equitación<br />
              <span className="text-[#f0d878] text-shadow">Yolanda Morales</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto text-shadow">
              Donde la conexión con el caballo se convierte en armonía para el cuerpo y el espíritu. Descubre la magia de la equitación con nosotros.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-6 py-3 bg-[#c8a415] hover:bg-[#d9b52a] text-white font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Reserva una Clase
              </Link>
              <Link href="/eventos" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-md mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Ver Eventos
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f0e9db] to-transparent"></div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-[#f0e9db]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="w-16 h-1 bg-[#1a365d] mb-4"></div>
            <h2 className="text-3xl font-bold text-[#1a365d] tracking-tight">Por qué elegirnos</h2>
            <p className="text-[#333333] mt-4 max-w-2xl text-lg">Ofrecemos una experiencia ecuestre única con instructores certificados y caballos de primer nivel.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#1a365d]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-feature text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2 tracking-wide">Seguridad Garantizada</h3>
              <p className="text-[#333333]">Tu seguridad es nuestra prioridad. Contamos con equipos de protección y caballos entrenados para principiantes.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#1a365d]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-feature text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2 tracking-wide">Clases Personalizadas</h3>
              <p className="text-[#333333]">Aprende a tu ritmo con nuestras clases personalizadas para todos los niveles.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#1a365d]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-feature text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a365d] mb-2 tracking-wide">Instalaciones de Primera</h3>
              <p className="text-[#333333]">Disfruta de nuestras amplias instalaciones con pistas cubiertas, establos modernos y áreas de descanso.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="container mx-auto px-6 mb-16 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold section-title">
            Nuestra Filosofía
          </h2>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-8 border-t-4 border-[var(--accent)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 -mt-16 -mr-16 bg-[var(--accent)] opacity-10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 -mb-16 -ml-16 bg-[var(--primary)] opacity-10 rounded-full"></div>
          <div className="relative z-10">
            <p className="text-lg text-[var(--foreground)] mb-6 leading-relaxed text-center">
              En nuestra escuela, creemos en la conexión profunda entre jinete y caballo. 
              Nuestro enfoque holístico combina técnicas tradicionales de equitación con 
              prácticas modernas para crear una experiencia única y transformadora.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn btn-primary text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-xs mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Conoce más sobre nosotros
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 mb-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold section-title">
            Nuestros Servicios
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="h-3 bg-[var(--primary)]"></div>
            <div className="p-6">
              <div className="icon-container-sm bg-[var(--light-accent)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-md text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3 text-center font-serif">Clases Individuales</h3>
              <p className="text-[var(--foreground)] mb-4 text-center">Aprende a tu ritmo con nuestras clases personalizadas para todos los niveles.</p>
              <div className="flex justify-center">
                <Link href="/contact" className="text-[var(--primary)] hover:text-[var(--secondary)] font-medium flex items-center transition-colors">
                  Más Información
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="h-3 bg-[var(--accent)]"></div>
            <div className="p-6">
              <div className="icon-container-sm bg-[var(--light-accent)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-md text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3 text-center font-serif">Cabalgatas</h3>
              <p className="text-[var(--foreground)] mb-4 text-center">Disfruta de la experiencia de montar con amigos en nuestras cabalgatas.</p>
              <div className="flex justify-center">
                <Link href="/contact" className="text-[var(--primary)] hover:text-[var(--secondary)] font-medium flex items-center transition-colors">
                  Ver más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="h-3 bg-[var(--secondary)]"></div>
            <div className="p-6">
              <div className="icon-container-sm bg-[var(--light-accent)] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-md text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3 text-center font-serif">Eventos Especiales</h3>
              <p className="text-[var(--foreground)] mb-4 text-center">Descubre nuestros eventos especiales y actividades programadas para todas las edades.</p>
              <div className="flex justify-center">
                <Link href="/eventos" className="text-[var(--primary)] hover:text-[var(--secondary)] font-medium flex items-center transition-colors">
                  Ver Eventos
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[var(--primary)] text-white py-12 px-6 rounded-lg shadow-xl mb-16 relative overflow-hidden max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-[url('/images/texture-bg.png')] opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 font-serif">¿Listo para comenzar tu aventura ecuestre?</h2>
              <p className="text-lg opacity-90">Únete a nuestra escuela y descubre el maravilloso mundo de la equitación.</p>
            </div>
            <div>
              <Link href="/contact" className="inline-block bg-white text-[var(--primary)] hover:bg-[var(--accent)] hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Contáctanos Hoy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
