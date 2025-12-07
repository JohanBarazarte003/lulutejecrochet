import Image from "next/image";

export default function Home() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Zapatos de Bebé Tejidos a Crochet Estilo Converse | lulutejecrochet",
    "image": [
      "https://www.yourdomain.com/images/productos/placeholder-shoes.jpg" // Actualizar con URL absoluta del dominio
    ],
    "description": "Zapatos de bebé únicos y hechos a mano con amor en Venezuela. El regalo perfecto para recién nacidos, estilo Converse, suave y cómodo. ¡Envíos a toda Venezuela!",
    "sku": "LULU-ZAPATO-CROCHET-001", // SKU único para el producto
    "brand": {
      "@type": "Brand",
      "name": "lulutejecrochet"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.yourdomain.com", // Actualizar con URL del producto
      "priceCurrency": "USD",
      "price": "19.99", // Precio del producto
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock" // O "OutOfStock", "PreOrder"
    },
    "aggregateRating": { // Placeholder para futura integración de calificaciones
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    },
    "review": [{ // Placeholder para futuras reseñas
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
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Script para Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-pink-600">
            lulutejecrochet
          </a>
          {/* Add navigation links here if needed later */}
        </nav>
      </header>

      {/* Main Product Section */}
      <main className="container mx-auto p-4 md:p-8">
        <section className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
          {/* Product Image Gallery (Placeholder) */}
          <div className="md:w-1/2 p-4">
            <Image
              src="/images/productos/placeholder-shoes.jpg"
              alt="Zapatos de bebé tejidos a crochet estilo Converse, color azul claro, hechos a mano en Venezuela"
              width={600}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />
            {/* Si tienes más imágenes, agrégalas aquí o implementa un carrusel. Por ahora, solo mostraremos la imagen principal. */}
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Zapatos de Bebé Tejidos a Crochet Estilo Converse
            </h1>
            <p className="text-pink-600 text-lg md:text-xl font-semibold mb-4">
              ¡Hechos a mano con amor en Venezuela!
            </p>
            <p className="text-4xl font-bold text-gray-900 mb-6">$19.99 USD</p> {/* Placeholder Price */}

            <button className="w-full bg-pink-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
              Comprar Ahora
            </button>

            <div className="mt-6 text-gray-600 text-sm">
              <p className="flex items-center mb-2">
                <span className="mr-2 text-pink-500">✓</span> Hecho a mano, producto único
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2 text-pink-500">✓</span> Materiales suaves y seguros para bebés
              </p>
              <p className="flex items-center mb-2">
                <span className="mr-2 text-pink-500">✓</span> Envíos a toda Venezuela
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Product Description Section */}
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Descripción del Producto
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Descubre la ternura y el estilo con nuestros exclusivos zapatos de bebé tejidos a crochet, inspirados en el icónico diseño Converse. Cada par es meticulosamente elaborado a mano en Venezuela, garantizando un producto único y de la más alta calidad para los pequeños pies de tu bebé.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ideales como regalo para baby showers, bautizos o simplemente para vestir a tu recién nacido con un toque original y acogedor. Utilizamos hilos suaves e hipoalergénicos que cuidan la delicada piel del bebé, ofreciendo comodidad y calidez.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Diseño adorable estilo Converse, perfecto para fotos memorables.</li>
            <li>Confeccionados con hilos 100% hipoalergénicos y suaves.</li>
            <li>Flexibles y cómodos para el desarrollo natural del pie del bebé.</li>
            <li>Disponibles en varias tallas (0-3, 3-6 meses).</li>
            <li>Apoya el talento artesanal venezolano.</li>
          </ul>
          {/* Placeholder for size guide, care instructions etc. */}
        </section>

        {/* Testimonials Section (Placeholder) */}
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Lo que dicen nuestras clientas felices
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <p className="italic text-gray-700">"¡Absolutamente hermosos! La calidad es increíble y le quedan perfectos a mi bebé."</p>
              <p className="font-semibold text-right mt-2">- María P.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <p className="italic text-gray-700">"El regalo ideal para mi sobrina. Llegaron rápido y son aún más bonitos en persona."</p>
              <p className="font-semibold text-right mt-2">- Ana G.</p>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section (Placeholder) */}
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Síguenos en Instagram
          </h2>
          <p className="text-gray-700 mb-6">
            ¡Descubre más diseños, detrás de cámaras y clientes felices!
          </p>
          <a
            href="https://instagram.com/lulutejecrochet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 inline-block"
          >
            @lulutejecrochet
          </a>
          {/* Here you would integrate an actual Instagram feed widget */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">Post 1</div>
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">Post 2</div>
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">Post 3</div>
            <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">Post 4</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} lulutejecrochet. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-pink-600">Política de Privacidad</a>
            <a href="#" className="hover:text-pink-600">Términos y Condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  );
}