import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import FooterNew from "./FooterNew";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = "Escuela de Equitación Yolanda Morales" }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Escuela de Equitación Yolanda Morales - Donde la conexión con el caballo se convierte en armonía para el cuerpo y el espíritu." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[var(--background)] to-[#f0e9db] bg-fixed">
        <header className="bg-gradient-to-r from-[#1e553b] via-[#2d7e56] to-[#1a4332] shadow-xl relative z-10 text-white">
          <div className="absolute inset-0 bg-[url('/images/texture-bg.png')] opacity-20"></div>
          
          {/* Top bar with contact info */}
          <div className="bg-[#0f3320]/90 text-white py-2 hidden md:block border-b border-white/10">
            <div className="container mx-auto px-6 flex justify-end items-center text-xs">
              <div className="flex items-center mr-6 bg-white/10 px-3 py-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-xs mr-2 text-[#f0d878]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-white font-medium">+57 313 496 0546</span>
              </div>
              <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon-xs mr-2 text-[#f0d878]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-white font-medium">caballosyolamr1627@hotmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Main navigation */}
          <div className="container mx-auto px-6 py-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <Link href="/" className="flex items-center mb-4 md:mb-0 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg transition-all duration-300 border-2 border-[#f0d878]">
                  <span className="text-[#c8a415] text-2xl font-serif group-hover:scale-110 transition-transform duration-300">♞</span>
                </div>
                <div>
                  <h1 className="text-white text-xl font-bold font-serif tracking-wide">Escuela de Equitación</h1>
                  <p className="text-[#f0d878] text-xs tracking-wider font-semibold">YOLANDA MORALES</p>
                </div>
              </Link>
              
              <nav className="w-full md:w-auto">
                <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4">
                  <li>
                    <Link href="/" className="px-4 py-2 text-white text-sm font-medium hover:text-[#f0d878] transition-all duration-300 rounded-md hover:bg-white/10 flex items-center border-b-2 border-transparent hover:border-[#f0d878]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm mr-2 text-[#f0d878]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/planes" className="px-3 py-2 text-white text-sm font-medium hover:text-[#f0d878] transition-all duration-300 rounded-md hover:bg-white/10 flex items-center border-b-2 border-transparent hover:border-[#f0d878]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      Niveles y Planes
                    </Link>
                  </li>
                  <li>
                    <Link href="/eventos" className="px-3 py-2 text-white text-sm font-medium hover:text-[#f0d878] transition-all duration-300 rounded-md hover:bg-white/10 flex items-center border-b-2 border-transparent hover:border-[#f0d878]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                      </svg>
                      Eventos 
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" className="px-3 py-2 text-white text-sm font-medium hover:text-[#f0d878] transition-all duration-300 rounded-md hover:bg-white/10 flex items-center border-b-2 border-transparent hover:border-[#f0d878]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      Galería
                    </Link>
                  </li>
                  <li className="ml-2">
                    <Link href="/contact" className="px-4 py-2 bg-[#c8a415] hover:bg-[#d9b52a] text-white text-sm font-medium rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon-sm mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      Reservar
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        
        <FooterNew />
      </div>
    </>
  );
}
