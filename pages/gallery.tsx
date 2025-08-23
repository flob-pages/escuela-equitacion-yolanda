import Layout from '../components/layout/Layout';
import { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('photos');
  
  // Datos de ejemplo para fotos
  const photos = [
    {
      id: 1,
      src: '/images/gallery/Daniela.jpeg',
      alt: 'Facilitadora Daniela',
      title: 'Facilitadora Daniela',
      description: 'Jinete, Maestra de QI-GONG y creadora de espacios de transformación interior'
    },
    {
      id: 2,
      src: '/images/gallery/yolanda.jpeg',
      alt: 'Facilitadora Yolanda',
      title: 'Facilitadora Yolanda',
      description: 'Jinete, Rejoneadora y Domadora experta'
    },
    {
      id: 3,
      src: '/images/gallery/armandoCaballo.jpeg',
      alt: 'Encillando caballo',
      title: 'Encillando caballo',
      description: 'Niños aprendiendo a encillar sus caballos'
    },
    {
      id: 4,
      src: '/images/gallery/horse1.jpeg',
      alt: 'Diversión en grupo',
      title: 'Diversión en grupo',
      description: 'Niños aprendiendo juntos: confianza, juego y trabajo en equipo sobre el caballo.'
    },
    {
      id: 5,
      src: '/images/gallery/horse2.jpeg',
      alt: 'Progreso paso a paso',
      title: 'Progreso paso a paso',
      description: 'Clases uno a uno con acompañamiento personalizado para cada nivel y edad.'
    },
    {
      id: 6,
      src: '/images/gallery/horse3.jpeg',
      alt: 'Amigos a caballo',
      title: 'Amigos a caballo',
      description: 'Montar en compañía es más divertido. Vive la experiencia con hermanos o amigos.'
    },
    {
      id: 7,
      src: '/images/gallery/photo1.JPG',
      alt: 'Primera conexión',
      title: 'Primera conexión',
      description: 'Aprende a acercarte y comunicarte con tu caballo desde el respeto y la confianza.'
    }, 
    {
      id: 8,
      src: '/images/gallery/photo2.JPG',
      alt: 'Nuestros compañeros',
      title: 'Nuestros compañeros',
      description: 'Caballos tranquilos, entrenados y listos para recibir a jinetes de todas las edades.'
    }, 
    {
      id: 6,
      src: '/images/gallery/photo3.JPG',
      alt: 'Aprende jugando',
      title: 'Aprende jugando',
      description: 'Dinámicas y ejercicios divertidos para dominar paso y trote con seguridad.'
    }, 
    {
      id: 9,
      src: '/images/gallery/photo4.jpeg',
      alt: 'Listo para la aventura',
      title: 'Listo para la aventura',
      description: 'Equipos cuidados y caballos preparados para una experiencia segura y cómoda.'
    }, 
    {
      id: 8,
      src: '/images/gallery/photo5.JPG',
      alt: 'Espacios seguros',
      title: 'Espacios seguros',
      description: 'Contamos con pista cerrada y señalizada para cada nivel de aprendizaje.'
    }, 
    {
      id: 10,
      src: '/images/gallery/photo6.JPG',
      alt: 'Primeros pasos en la silla',
      title: 'Primeros pasos en la silla',
      description: 'Acompañamiento personalizado para que cada jinete avance a su ritmo.'
    }
  ];
  
  const videos = [
    {
      id: 1,
      src: '/videos/1755977863372.MOV',
      poster: '/images/gallery/thumbs/video-thumb1.png',
      title: 'Yoga y Qi-Gong con caballos',
      description: 'Relajación nivel caballo: estiramientos, respiración y mucha paz en la arena 🧘‍♀️🐴✨'
    },
    {
      id: 2,
      src: '/videos/1755982239150.MOV',
      poster: '/images/gallery/thumbs/video-thumb2.png',
      title: 'Caballos en pasarela',
      description: 'Nuestros caballos también saben posar… casi como modelos en plena pasarela de naturaleza 🐎🌿📸'
    },
    {
      id: 3,
      src: '/videos/1755982891046.MOV',
      poster: '/images/gallery/thumbs/video-thumb3.png',
      title: 'Clase grupal: equipo en acción',
      description: 'Trabajo en equipo, risas y caballos listos para aprender… ¡porque juntos todo es mejor! 🐴👫🎯'
    },
    {
      id: 4,
      src: '/videos/1755983745768.MOV',
      poster: '/images/gallery/thumbs/video-thumb4.png',
      title: 'Vista aérea de la finca',
      description: 'El ojo del dron no miente: pura belleza verde donde los caballos viven felices 🦅🌳🏡'
    },
    {
      id: 5,
      src: '/videos/caballos1.mp4',
      poster: '/images/gallery/thumbs/video-thumb5.png',
      title: 'Clase grupal extendida',
      description: 'Un día cualquiera en la arena… caballos trotando, jinetes aprendiendo y diversión asegurada 🐴😃🏇'
    },
    {
      id: 5,
      src: '/videos/caballos2.mp4',
      poster: '/images/gallery/thumbs/video-thumb6.png',
      title: 'Conectando personas con caballos',
      description: 'Cuando un caballo se convierte en tu mejor amigo, la magia sucede 💚🐴👨‍👩‍👧‍👦'
    },
  ];

  return (
    <Layout title="Galería | Escuela de Equitación Yolanda Morales">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">Nuestra Galería</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de fotos y videos que capturan la esencia de nuestra escuela de equitación.
          </p>
          
          {/* Tabs para cambiar entre fotos y videos */}
          <div className="flex justify-center mt-8 border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'photos' 
                ? 'text-[#c8a415] border-b-2 border-[#c8a415]' 
                : 'text-gray-500 hover:text-[#c8a415]'}`}
            >
              Fotografías
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 font-medium text-sm ${activeTab === 'videos' 
                ? 'text-[#c8a415] border-b-2 border-[#c8a415]' 
                : 'text-gray-500 hover:text-[#c8a415]'}`}
            >
              Videos
            </button>
          </div>
        </div>
        
        {/* Contenido de fotos */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  {/* Usamos un div con background-image como fallback mientras se cargan las imágenes reales */}
                  <div 
                    className="absolute inset-0 bg-gray-200"
                    style={{
                      backgroundImage: `url(${photo.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1a365d]">{photo.title}</h3>
                  <p className="text-gray-600 mt-2">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Contenido de videos */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <video 
                    className="w-full h-auto" 
                    controls 
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1a365d]">{video.title}</h3>
                  <p className="text-gray-600 mt-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Mensaje si no hay contenido */}
        {((activeTab === 'photos' && photos.length === 0) || 
          (activeTab === 'videos' && videos.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay contenido disponible en este momento.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
