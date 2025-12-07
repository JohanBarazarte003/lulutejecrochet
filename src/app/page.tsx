import Image from "next/image"; // Keep Image import for productSchema URLs and any other potential direct usage
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Zapatos de Bebé Tejidos a Crochet Estilo Converse | lulutejecrochet",
    "image": [
      "https://lulutejecrochet.vercel.app/images/productos/placeholder-shoes.jpg"
    ],
    "description": "Zapatos de bebé únicos y hechos a mano con amor en Venezuela por lulutejecrochet. Precio: $10 USD. Métodos de pago: Efectivo, Pago Móvil, USDT, Binance. Envíos a todo el país desde Caracas. Entregas personales. Entrega en 24 horas. El regalo perfecto para recién nacidos, estilo Converse, suave y cómodo.",
    "sku": "LULU-ZAPATO-CROCHET-001",
    "brand": {
      "@type": "Brand",
      "name": "lulutejecrochet"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://lulutejecrochet.vercel.app",
      "priceCurrency": "USD",
      "price": "10.00",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    },
    "review": [{
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "name": "¡Simplemente hermosos!",
      "reviewBody": "La calidad es excelente y el diseño adorable. Mi bebé luce precioso.",
      "author": { "@type": "Person", "name": "María P." }
    }]
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Script para Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <Header />

      <main className="container mx-auto p-4 md:p-8">
        <Hero />
        <Description />
        <Testimonials />
        <InstagramFeed />
      </main>

      <Footer />
    </div>
  );
}
