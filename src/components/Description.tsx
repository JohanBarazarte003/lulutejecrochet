import AnimatedSection from '@/components/AnimatedSection';

const Description = () => {
  return (
    <AnimatedSection delay={100}>
      <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Descripción del Producto
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
          Descubre la ternura y el estilo con nuestros exclusivos zapatos de bebé tejidos a crochet, inspirados en el icónico diseño Converse. Cada par es meticulosamente elaborado a mano en Venezuela, garantizando un producto único y de la más alta calidad para los pequeños pies de tu bebé.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
          Ideales como regalo para baby showers, bautizos o simplemente para vestir a tu recién nacido con un toque original y acogedor. Utilizamos hilos suaves e hipoalergénicos que cuidan la delicada piel del bebé, ofreciendo comodidad y calidez. Estamos ubicados en Caracas y realizamos entregas personales y envíos a todo el país.
        </p>
        <ul className="list-disc list-inside text-gray-700 max-w-md mx-auto mt-6">
          <li>Diseño adorable estilo Converse, perfecto para fotos memorables.</li>
          <li>Confeccionados con hilos 100% hipoalergénicos y suaves.</li>
          <li>Flexibles y cómodos para el desarrollo natural del pie del bebé.</li>
          <li>Disponibles en varias tallas (0-3, 3-6 meses).</li>
          <li>Apoya el talento artesanal venezolano.</li>
        </ul>
      </section>
    </AnimatedSection>
  );
};

export default Description;
