'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatedSection>
        <section className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          {/* Galería de Imágenes del Producto */}
          <div className="md:w-1/2 p-4">
            <div onClick={() => setOpen(true)} className="cursor-pointer">
              <Image
                src="/images/productos/placeholder-shoes.png"
                alt="Zapatos de bebé tejidos a crochet estilo Converse, color azul claro, hechos a mano en Venezuela"
                width={600}
                height={600}
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Detalles del Producto */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
              Zapatos de Bebé Tejidos a Crochet Estilo Converse
            </h1>
            <p className="text-pastel-pink text-lg md:text-xl font-semibold mb-4">
              ¡Hechos a mano en Caracas con amor! Envío a todo el país.
            </p>
            <p className="text-4xl font-bold text-gray-800 mb-6">$10 USD</p>

            <button className="w-full bg-pastel-pink text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300 transform hover:scale-105">
              Comprar Ahora
            </button>

            <div className="mt-6 text-gray-600 text-sm space-y-2">
              <p className="flex items-center">
                <span className="text-pastel-pink mr-2">✓</span> <strong>Métodos de Pago:</strong> Efectivo, Pago Móvil, USDT, Binance
              </p>
              <p className="flex items-center">
                <span className="text-pastel-pink mr-2">✓</span> <strong>Entrega:</strong> En 24h, personal en Caracas
              </p>
              <p className="flex items-center">
                <span className="text-pastel-pink mr-2">✓</span> <strong>Envíos:</strong> A todo el país
              </p>
              <p className="flex items-center">
                <span className="text-pastel-pink mr-2">✓</span> <strong>Calidad:</strong> Producto artesanal con materiales seguros
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "/images/productos/placeholder-shoes.png" },
          // Si tuvieras más imágenes, las añadirías aquí
          // { src: "/images/productos/otra-imagen.png" },
        ]}
      />
    </>
  );
};

export default Hero;