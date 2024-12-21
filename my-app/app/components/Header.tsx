import React from 'react';
import Image from 'next/image';
import clnLogo from '../assets/cln-logo.png'; // Asegúrate de tener el logotipo en esta ruta
import christmasTree from '../assets/christmas-tree.png'; // Asegúrate de tener la ilustración del árbol

export default function Header() {
  return (
    <header className="relative bg-blue-500 text-white py-12">
      {/* Fondo animado con nieve */}
      <div className="absolute inset-0">
        <div className="snowfall"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-10">
        {/* Ilustración del árbol de Navidad y logotipo */}
        <div className="flex items-center mb-8">
          <Image src={christmasTree} alt="Árbol de Navidad" width={50} height={50} />
          <Image src={clnLogo} alt="Logotipo de CLN" width={100} height={50} className="ml-4" />
        </div>

        {/* Mensaje principal */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Próximamente lanzaremos nuestra nueva página web.
          <br />
          ¡Deseamos a todos una <span className="text-red-600">Feliz Navidad</span> y un próspero año nuevo!
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-2xl mb-8">
          Estamos trabajando para ofrecerte una plataforma innovadora donde podrás encontrar recursos de Corporate Law Network, eventos exclusivos y nuestras publicaciones más recientes.
        </p>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/vision"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Explorar nuestra visión
          </a>
          <div className="relative group">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
              Síguenos en redes sociales
            </button>
            {/* Íconos de redes sociales */}
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <a href="https://corporatelawnetwork.substack.com/" className="block px-4 py-2 hover:bg-gray-200">
                SUBSTACK
              </a>
              <a href="https://web.facebook.com/corporatelawnetwork" className="block px-4 py-2 hover:bg-gray-200">
                FACEBOOK
              </a>
              <a href="https://www.instagram.com/CORPORATELAWNETWORK/" className="block px-4 py-2 hover:bg-gray-200">
                INSTAGRAM
              </a>
              <a href="https://www.linkedin.com/company/corporativelawnetwork/posts/" className="block px-4 py-2 hover:bg-gray-200">
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 