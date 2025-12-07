import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white/70 backdrop-blur-md shadow-sm p-4 sticky top-0 z-50 animate-fade-in-down">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="block">
          <Image
            src="/images/logo-lulutejecrochet.png"
            alt="Logo-lulutejecrochet-Zapatos-de-bebé-tejidos-a-crochet"
            width={160}
            height={90}
            priority
          />
        </a>
        {/* Aquí se podrían añadir enlaces de navegación en el futuro, como "Galería" o "Contacto" */}
      </nav>
    </header>
  );
};

export default Header;
