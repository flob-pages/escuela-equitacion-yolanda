import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

export default function Post({ frontmatter, content }) {
  return (
    <Layout title={frontmatter.title + " - Escuela de Equitación Yolanda Morales"}>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-green-800 mb-3">{frontmatter.title}</h1>
        <p className="text-gray-500 mb-6 border-b pb-4">{frontmatter.date}</p>
        
        <div className="prose prose-green max-w-none">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <Link href="/" className="text-green-600 hover:text-green-800 transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("content/news");
  const paths = files.map(filename => ({
    params: { slug: filename.replace(".md", "") }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("content/news", slug + ".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { frontmatter, content } };
}
