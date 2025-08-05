import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Script de GoatCounter para contar visitas */}
        <script
          data-goatcounter="https://equitacionsubachoque.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
        
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --primary: #1e553b;
            --secondary: #c8a415;
            --accent: #2d7e56;
            --background: #ffffff;
            --foreground: #333333;
            --header-bg: #1e553b;
            --footer-bg: #1a4332;
            --light-accent: #e0e8d0;
          }
          
          body {
            color: var(--foreground);
            background: var(--background);
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            letter-spacing: 0.01em;
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin: 0;
            padding: 0;
          }
          
          h1, h2, h3, h4, h5, h6 {
            line-height: 1.3;
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: var(--primary);
          }
          
          header {
            color: white !important;
            z-index: 50 !important;
            position: relative !important;
          }
          
          footer {
            color: white !important;
            z-index: 50 !important;
            position: relative !important;
          }
        ` }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
