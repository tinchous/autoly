"use client";
import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    nickname: "", address: "", payment: "efectivo", note: ""
  });

  const sendWA = () => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]")
      .map((p: any) => `• ${p.qty} × ${p.name} → $${p.price * p.qty}`)
      .join("\n");

    const total = items.reduce((a: any, b: any) => a + parseFloat(b.split("$")[1]), 0);
    const delivery = total < 1499 ? 50 : 0;

    const msg = encodeURIComponent(
      `🛒 *AutoService Liam-Yahir*\n` +
      `Cliente: ${form.nickname}\n` +
      `Dire: ${form.address}\n` +
      `Pago: ${form.payment}\n` +
      `Nota: ${form.note}\n\n` +
      `${items}\n` +
      `Delivery: ${delivery === 0 ? "GRATIS" : "$50"}\n` +
      `*TOTAL: $${total + delivery}*`
    );

    open(`https://wa.me/${process.env.NEXT_PUBLIC_WA}?text=${msg}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-black neon rounded-2xl mt-20">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">
        Finalizá tu pedido
      </h1>
      <form onSubmit={e => { e.preventDefault(); sendWA(); }} className="space-y-6">
        <input placeholder="Apodo o Nombre" required className="w-full p-4 bg-black border-2 border-neon rounded-lg text-white" onChange={e => setForm({ ...form, nickname: e.target.value })} />
        <input placeholder="Calle · N° · Apto · Esq · Barrio" required className="w-full p-4 bg-black border-2 border-neon rounded-lg text-white" onChange={e => setForm({ ...form, address: e.target.value })} />
        <div className="flex gap-8">
          <label><input type="radio" name="pay" value="efectivo" defaultChecked onChange={e => setForm({ ...form, payment: e.target.value })} /> Efectivo</label>
          <label><input type="radio" name="pay" value="debito" onChange={e => setForm({ ...form, payment: e.target.value })} /> Débito</label>
        </div>
        <textarea placeholder="Nota (ej: timbre roto)" className="w-full p-4 bg-black border-2 border-neon rounded-lg text-white" onChange={e => setForm({ ...form, note: e.target.value })} />
        <button type="submit" className="w-full py-6 bg-fire-red text-white text-2xl font-bold rounded-full neon hover:scale-105 transition">
          ENVIAR POR WHATSAPP
        </button>
      </form>
    </div>
  );
}
