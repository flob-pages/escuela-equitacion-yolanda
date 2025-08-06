import Link from 'next/link';
import React from 'react';

export default function FooterNew() {
  return (
    <footer 
      className="bg-gradient-to-r from-[#1e553b] via-[#2d7e56] to-[#1a4332] text-white pt-12 pb-6 relative overflow-hidden z-10 mt-auto"
      style={{color: 'white', position: 'relative'}}
    >
      <div className="absolute inset-0 bg-[url('/images/texture-bg.png')] opacity-20"></div>
      
      {/* Footer top section with columns */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="footer-container gap-6 mb-8 max-w-6xl mx-auto">
          {/* Column 1: About */}
          <div className="footer-column footer-card">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-[#c8a415] text-xl font-serif">♞</span>
              </div>
              <div>
                <h3 className="text-[#f0d878] font-bold font-serif text-xl">Escuela Yolanda</h3>
                <p className="text-[#f0d878] text-xs tracking-wider">EQUITACIÓN</p>
              </div>
            </div>
            <p className="footer-text mb-4">Donde la conexión con el caballo se convierte en armonía para el cuerpo y el espíritu.</p>
            <div className="flex space-x-3">
              {/* WhatsApp */}
              <a href="https://wa.me/573134960546" target="_blank" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#25D366] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-xs" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/el_real_de_lajara" target="_blank" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#833AB4] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-xs" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/yolanda.morales.757302" target="_blank" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#1877F2] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-xs" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@elreal_de_lajara" target="_blank" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#000000] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-xs" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer-column footer-card">
            <h4 className="footer-heading">
              <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon icon-sm" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="footer-link"><span className="footer-icon mr-2">→</span> Inicio</Link></li>
              <li><Link href="/planes" className="footer-link"><span className="footer-icon mr-2">→</span> Planes</Link></li>
              <li><Link href="/eventos" className="footer-link"><span className="footer-icon mr-2">→</span> Eventos</Link></li>
              <li><Link href="/gallery" className="footer-link"><span className="footer-icon mr-2">→</span> Galería</Link></li>
              <li><Link href="/contact" className="footer-link"><span className="footer-icon mr-2">→</span> Contacto</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="footer-column footer-card">
            <h4 className="footer-heading">
              <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon icon-sm" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Nuestros Servicios
            </h4>
            <ul className="space-y-3">
             <li><Link href="/planes" className="footer-link"><span className="footer-icon mr-2">•</span> Pequeño Jinete</Link></li>
             <li><Link href="/planes" className="footer-link"><span className="footer-icon mr-2">•</span> A Paso Firme</Link></li>
             <li><Link href="/planes" className="footer-link"><span className="footer-icon mr-2">•</span> Galope Total</Link></li>
             <li><Link href="/planes" className="footer-link"><span className="footer-icon mr-2">•</span> Cabalgata Entre Amigos</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="footer-column footer-card">
            <h4 className="footer-heading">
              <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon icon-sm" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
              </svg>
              Contáctanos
            </h4>
            <div className="space-y-3">
              <div className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="footer-text">Subachoque, Cundinamarca, Colombia</span>
              </div>
              <div className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="footer-text">+57 313 496 0546</span>
              </div>
              <div className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" className="footer-icon icon-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="footer-text">caballosyolamr1627@hotmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <p className="footer-text">&copy; {new Date().getFullYear()} Escuela de Equitación Yolanda Morales. Todos los derechos reservados.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="footer-link text-xs">Política de Privacidad</a>
              <a href="#" className="footer-link text-xs">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
