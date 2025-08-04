import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function Planes() {
  return (
    <Layout title="Niveles y Planes - Escuela de Equitación Yolanda Morales">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('/images/gallery/horse1.jpeg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e553b]/90 to-[#1e553b]/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl">
            <div className="inline-block bg-[#c8a415] px-4 py-1 rounded-full mb-4 border border-[#c8a415]">
              <p className="text-white text-sm font-medium">Aprende con nosotros</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif text-shadow">
              🐎 Aprende a Montar: Niveles y Planes
            </h1>
            <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto text-shadow">
              Descubre nuestros niveles de enseñanza y planes adaptados a tus necesidades.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f0e9db] to-transparent"></div>
      </div>
      
      {/* Niveles de Equitación Section */}
      <div className="bg-[#f0e9db] py-16">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="w-16 h-1 bg-[#c8a415] mb-4"></div>
            <h2 className="text-3xl font-bold text-[#1e553b] font-serif">🌟 Nuestros Niveles de Equitación</h2>
            <p className="text-[#333333] mt-4 max-w-2xl text-lg">Ofrecemos diferentes niveles de enseñanza adaptados a tu experiencia.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Nivel Potrillo */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-[#1e553b]"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1e553b]/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-2xl">🐴</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e553b] tracking-wide">Nivel Potrillo (Principiante)</h3>
                </div>
                
                <p className="text-[#4a5568] mb-6">
                  Para quienes empiezan desde cero:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Conexión y confianza con el caballo.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Principios de seguridad.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Monta básica al paso.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Cuidado y manejo esencial.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Nivel Corcel */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-[#2d7e56]"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#2d7e56]/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-2xl">🐎</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e553b] tracking-wide">Nivel Corcel (Intermedio)</h3>
                </div>
                
                <p className="text-[#4a5568] mb-6">
                  Para jinetes que ya dominan lo básico y quieren ir más allá:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trote y galope controlado.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mejora de postura y equilibrio.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Monta con mayor independencia.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Nivel Pura Sangre */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-[#c8a415]"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#c8a415]/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-2xl">🏇</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e553b] tracking-wide">Nivel Pura Sangre (Avanzado)</h3>
                </div>
                
                <p className="text-[#4a5568] mb-6">
                  Para jinetes que buscan retos mayores:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Saltos y doma avanzada.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Técnicas de entrenamiento para exhibición o competencia.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c8a415] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mayor control y confianza.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Planes y Tarifas Section */}
      <div className="bg-white py-16">
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="w-16 h-1 bg-[#c8a415] mb-4"></div>
            <h2 className="text-3xl font-bold text-[#1e553b] font-serif">📋 Nuestros Planes y Tarifas</h2>
            <p className="text-[#333333] mt-4 max-w-2xl text-lg">Encuentra el plan perfecto para ti y comienza tu aventura ecuestre.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Plan Pequeño Jinete */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-[#1e553b]"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-[#1e553b]/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🎉</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#1e553b] mb-2">Plan Pequeño Jinete</h3>
                <p className="text-sm text-center text-gray-500 mb-6">&#34;Clase Individual&#34;</p>
                <p className="text-center text-gray-600 mb-6">Perfecto para quienes quieren probar la experiencia o regalar una monta.</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-center font-medium">Incluye:</p>
                  <p className="text-center text-gray-600">1 clase de 1 hora</p>
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#1e553b]">$77,000</span>
                  <span className="text-gray-500 ml-1">COP</span>
                </div>
                
                <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/573134960546?text=Hola %20 Yolanda; quiero%20adquirir%20el%20plan%20Peque%C3%B1o%20Jinete" className="block w-full py-3 px-4 bg-[#1e553b] hover:bg-[#2d7e56] text-white text-center font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
                  Reservar Ahora
                </Link>
              </div>
            </div>
            
            {/* Plan A Paso Firme */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-[#2d7e56]"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-[#2d7e56]/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💪</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#1e553b] mb-2">Plan A Paso Firme</h3>
                <p className="text-sm text-center text-gray-500 mb-6">&#34;Membresía Básica&#34;</p>
                <p className="text-center text-gray-600 mb-6">Ideal para quienes quieren progreso constante.</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-center font-medium">Incluye:</p>
                  <p className="text-center text-gray-600">4 clases al mes</p>
                  <p className="text-center text-gray-600">de 1 hora</p>
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#1e553b]">$288,000</span>
                  <span className="text-gray-500 ml-1">COP</span>
                </div>
                
                <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/573134960546?text=Hola %20 Yolanda; quiero%20adquirir%20el%20plan%20a%20paso%20firme" className="block w-full py-3 px-4 bg-[#2d7e56] hover:bg-[#1e553b] text-white text-center font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
                  Reservar Ahora
                </Link>
              </div>
            </div>
            
            {/* Plan Galope Total */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-[#c8a415]"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-[#c8a415]/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🏇</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#1e553b] mb-2">Plan Galope Total</h3>
                <p className="text-sm text-center text-gray-500 mb-6">&#34;Membresía Plus&#34;</p>
                <p className="text-center text-gray-600 mb-6">Para los que quieren montar más seguido y avanzar más rápido.</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-center font-medium">Incluye:</p>
                  <p className="text-center text-gray-600">6 clases al mes</p>
                  <p className="text-center text-gray-600">de 1 hora</p>
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#1e553b]">$420,000</span>
                  <span className="text-gray-500 ml-1">COP</span>
                </div>
                
                <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/573134960546?text=Hola %20 Yolanda; quiero%20adquirir%20el%20plan%20Galope%20Total" className="block w-full py-3 px-4 bg-[#c8a415] hover:bg-[#d9b52a] text-white text-center font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
                  Reservar Ahora
                </Link>
              </div>
            </div>
            
            {/* Plan Cabalgata Entre Amigos */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-2 bg-[#4a5568]"></div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-[#4a5568]/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🐎</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-[#1e553b] mb-2">Plan Cabalgata Entre Amigos</h3>
                <p className="text-sm text-center text-gray-500 mb-6">&#34;Rutas del Pueblo&#34;</p>
                <p className="text-center text-gray-600 mb-6">Vive una cabalgata inolvidable con amigos.</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-center font-medium">Incluye:</p>
                  <p className="text-center text-gray-600">Recorrido grupal de aprox. 2.5 horas por senderos y veredas del pueblo.</p>
                </div>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#1e553b]">$140,000</span>
                  <span className="text-gray-500 ml-1">COP</span>
                  <p className="text-sm text-gray-500">por persona</p>
                </div>
                
                <Link target="_blank" rel="noopener noreferrer" href="https://wa.me/573134960546?text=Hola %20 Yolanda; quiero%20adquirir%20el%20plan%20Cabalgata%20Entre%20Amigos" className="block w-full py-3 px-4 bg-[#4a5568] hover:bg-[#2d3748] text-white text-center font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
                  Reservar Ahora
                </Link>
                
                <p className="text-center text-sm text-[#c8a415] font-medium mt-4">
                  Recomendado: ¡Reserva con la mitad $ y trae a tus amigos a compartir juntos la experiencia!
                </p>
              </div>
            </div>
          </div>
          
          {/* What to Bring Section */}
          <div className="bg-[#f8f9fa] border border-gray-100 rounded-lg p-8 mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#1e553b]/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🧢</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#1e553b]">¿Qué necesitas traer?</h3>
            </div>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c8a415] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Ropa cómoda (pantalón largo).</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c8a415] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Botas cerradas o calzado firme.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c8a415] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Mucha disposición para disfrutar de la naturaleza y los caballos.</span>
              </li>
            </ul>
            
            <div className="bg-white p-4 rounded-md border border-gray-100">
              <p className="text-gray-700 italic">
                <span className="font-semibold text-[#1e553b]">Nota:</span> Reserva con tiempo cualquiera de tus planes; aquí te prestamos el casco<br />
              </p>
            </div>
          </div>
          
          {/* Summary Table */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#1e553b] mb-6 text-center">✔️ Resumen rápido</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[#1e553b] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Plan</th>
                    <th className="py-3 px-4 text-left">Descripción</th>
                    <th className="py-3 px-4 text-left">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Pequeño Jinete</td>
                    <td className="py-3 px-4">1 clase individual (1 hora)</td>
                    <td className="py-3 px-4 font-semibold">$77,000 COP</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-3 px-4 font-medium">A Paso Firme</td>
                    <td className="py-3 px-4">4 clases al mes de (1 hora)</td>
                    <td className="py-3 px-4 font-semibold">$288,000 COP</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 font-medium">Galope Total</td>
                    <td className="py-3 px-4">6 clases al mes de (1 hora)</td>
                    <td className="py-3 px-4 font-semibold">$420,000 COP</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 font-medium">Cabalgata Entre Amigos — Rutas del Pueblo</td>
                    <td className="py-3 px-4">1 recorrido de (2.5 horas)</td>
                    <td className="py-3 px-4 font-semibold">$140,000 COP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <Link href="/contact" className="inline-block py-3 px-8 bg-[#c8a415] hover:bg-[#d9b52a] text-white text-lg font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              ¡Reserva tu clase ahora!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
