// src/app/page.tsx - VERSIÓN MÍNIMA
export default function Home() {
  return (
    <div className="min-h-screen bg-green-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Autoservice Liam Yahir
        </h1>
        <p className="text-green-200 text-xl">
          Sitio en mantenimiento - Pronto estaremos online
        </p>
        <div className="mt-8">
          <a
            href="https://wa.me/59892308828"
            className="bg-yellow-500 text-green-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
