// src/app/delivery/page.tsx
export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">🚚 DELIVERY</h1>
          <p className="text-xl text-green-200">Entregamos felicidad a tu puerta</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6">
            <h2 className="text-2xl font-black text-green-900 mb-4">📦 ZONAS DE ENTREGA</h2>
            <ul className="text-green-700 space-y-2">
              <li>• Centro y alrededores</li>
              <li>• Barrios residenciales</li>
              <li>• Zona comercial</li>
              <li>• Consultá por tu zona</li>
            </ul>
          </div>

          <div className="bg-yellow-500 rounded-2xl p-6">
            <h2 className="text-2xl font-black text-green-900 mb-4">⏰ HORARIOS</h2>
            <ul className="text-green-900 space-y-2">
              <li>• Lunes a Domingo</li>
              <li>• 08:00 - 23:30 hs</li>
              <li>• Servicio express 30'</li>
              <li>• Pedidos programados</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-700 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">📱 PEDÍ POR WHATSAPP</h2>
          <p className="text-green-100 mb-6">Más fácil y rápido. Escribinos directamente:</p>
          <a
            href="https://wa.me/59892308828?text=Hola!%20Quiero%20hacer%20un%20pedido%20🚚"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition inline-block"
          >
            💬 Abrir WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
