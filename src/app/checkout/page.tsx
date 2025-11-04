"use client";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";

export default function Checkout() {
  const { items, total, clear } = useCart();
  const [form, setForm] = useState({
    nickname: "",
    address: "", 
    payment: "efectivo",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    
    const message = `🛒 PEDIDO AUTOSERVICE LIAM YAHIR\n\n${items.map(item => 
      `${item.qty}x ${item.nombre} - $${item.precio * item.qty}`
    ).join('\n')}\n\n📦 TOTAL: $${total}\n👤 ${form.nickname}\n📍 ${form.address}\n📞 ${form.phone || 'No especificado'}\n💳 Pago: ${form.payment}`;
    
    const whatsappUrl = `https://wa.me/59892308828?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    clear();
  };

  return (
    <div className="min-h-screen bg-green-900 pt-20">
      <div className="max-w-2xl mx-auto p-8 bg-green-800 border border-yellow-500 rounded-2xl">
        <h1 className="text-3xl font-black text-yellow-400 mb-6">🚀 FINALIZAR PEDIDO</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-green-200 text-xl mb-4">Tu carrito está vacío</p>
            <a 
              href="/products" 
              className="bg-yellow-500 text-green-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition inline-block"
            >
              Ir a Productos
            </a>
          </div>
        ) : (
          <>
            {/* Resumen del Pedido */}
            <div className="mb-8 p-6 bg-green-700 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Resumen del Pedido</h2>
              {items.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b border-green-600">
                  <span className="text-white">{item.qty}x {item.nombre}</span>
                  <span className="text-yellow-400 font-bold">${item.precio * item.qty}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 mt-2 border-t border-green-500">
                <span className="text-white font-bold text-lg">TOTAL</span>
                <span className="text-yellow-400 font-black text-xl">${total}</span>
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                placeholder="Apodo o Nombre" 
                required 
                className="w-full p-4 bg-green-900 border border-yellow-500 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                value={form.nickname}
                onChange={e => setForm({ ...form, nickname: e.target.value })}
              />
              
              <input 
                placeholder="Calle · N° · Apto · Esq · Barrio" 
                required 
                className="w-full p-4 bg-green-900 border border-yellow-500 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                value={form.address}
                onChange={e => setForm({ ...form, address: e.target.value })}
              />
              
              <input 
                placeholder="Teléfono (opcional)" 
                className="w-full p-4 bg-green-900 border border-yellow-500 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
              />

              <div className="space-y-4">
                <label className="block text-white font-medium mb-2">Método de Pago</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="pay" 
                      value="efectivo" 
                      checked={form.payment === "efectivo"}
                      onChange={e => setForm({ ...form, payment: e.target.value })}
                      className="text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-white">Efectivo</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="pay" 
                      value="debito" 
                      checked={form.payment === "debito"}
                      onChange={e => setForm({ ...form, payment: e.target.value })}
                      className="text-yellow-500 focus:ring-yellow-500"
                    />
                    <span className="text-white">Débito</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow-500 text-green-900 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all"
              >
                📱 ENVIAR PEDIDO POR WHATSAPP
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
