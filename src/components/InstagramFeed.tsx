import AnimatedSection from '@/components/AnimatedSection';

const InstagramFeed = () => {
  return (
    <AnimatedSection delay={200}>
      <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Síguenos en Instagram
        </h2>
        <p className="text-gray-700 mb-6">
          ¡Descubre más diseños, detrás de cámaras y clientes felices!
        </p>
        <a
          href="https://instagram.com/lulutejecrochet"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:opacity-90 transition duration-300 inline-block transform hover:scale-105"
        >
          @lulutejecrochet
        </a>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Aquí se podría integrar un widget real de Instagram en el futuro */}
          <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">Post 1</div>
          <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">Post 2</div>
          <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">Post 3</div>
          <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center text-gray-500">Post 4</div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default InstagramFeed;
