const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} lulutejecrochet. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-pastel-pink transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-pastel-pink transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
