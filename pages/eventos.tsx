import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/layout/Layout";
import Link from "next/link";

type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  };
  excerpt: string;
};

export default function Eventos({ posts }: { posts: Post[] }) {
  return (
    <Layout title="Noticias y Eventos - Escuela de Equitación Yolanda Morales">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">Noticias y Eventos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post: Post) => (
            <div key={post.slug} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300">
              <div className="p-6">
                <h2 className="text-xl font-bold text-green-800 mb-2">{post.frontmatter.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.frontmatter.date}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link 
                  href={`/news/${post.slug}`}
                  className="inline-block px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md transition-colors"
                >
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay noticias disponibles en este momento.</p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-green-600 hover:text-green-800 transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // Obtener archivos del directorio de noticias
  const files = fs.readdirSync(path.join("content/news"));
  
  // Obtener slug y contenido de cada archivo
  const posts = files.map(filename => {
    // Crear slug
    const slug = filename.replace(".md", "");
    
    // Obtener contenido
    const markdownWithMeta = fs.readFileSync(
      path.join("content/news", filename),
      "utf-8"
    );
    
    // Parsear contenido
    const { data: frontmatter, content } = matter(markdownWithMeta);
    
    // Crear un extracto del contenido
    const excerpt = content.substring(0, 150) + "...";
    
    return {
      slug,
      frontmatter,
      excerpt
    };
  });
  
  // Ordenar posts por fecha (más reciente primero)
  return {
    props: {
      posts: posts.sort((a, b) => {
        return new Date(b.frontmatter.date).getTime() - 
               new Date(a.frontmatter.date).getTime();
      })
    }
  };
}
