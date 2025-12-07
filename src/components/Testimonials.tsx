import AnimatedSection from '@/components/AnimatedSection';

const Testimonials = () => {
  return (
    <AnimatedSection delay={200}>
      <section className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 md:p-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Lo que dicen nuestras clientas felices
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <p className="italic text-gray-700">"¡Absolutamente hermosos! La calidad es increíble y le quedan perfectos a mi bebé."</p>
            <p className="font-semibold text-right mt-2 text-pastel-pink">- María P.</p>
          </div>
          <div className="bg-white/50 p-4 rounded-lg shadow-md">
            <p className="italic text-gray-700">"El regalo ideal para mi sobrina. Llegaron rápido y son aún más bonitos en persona."</p>
            <p className="font-semibold text-right mt-2 text-pastel-pink">- Ana G.</p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Testimonials;
