// src/components/VoiceOrder.tsx
"use client";
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';

export default function VoiceOrder() {
  const [isRecording, setIsRecording] = useState(false);
  const { items, total } = useCart();

  const startRecording = async () => {
    if (items.length === 0) {
      alert('🛒 Agrega productos al carrito primero!');
      return;
    }

    setIsRecording(true);

    // Simular procesamiento de voz
    setTimeout(async () => {
      const transcription = `Pedido por voz: ${items.map(item =>
        `${item.qty}x ${item.nombre}`
      ).join(', ')}`;

      try {
        // Enviar a Google Sheets
        await fetch('/api/sync-sheets', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            transcription,
            total,
            items: items.map(item => ({
              nombre: item.nombre,
              cantidad: item.qty,
              precio: item.precio
            }))
          })
        });

        // Enviar WhatsApp
        const message = `🎤 PEDIDO POR VOZ AUTOLY\n\n${transcription}\n\n💰 TOTAL: $${total}\n\n📍 Entregar a la dirección que indiques`;
        const whatsappUrl = `https://wa.me/59892308828?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');

        alert('✅ Pedido por voz enviado a WhatsApp y Google Sheets!');

      } catch (error) {
        alert('❌ Error enviando pedido');
      } finally {
        setIsRecording(false);
      }
    }, 2000);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <button
        onClick={startRecording}
        disabled={isRecording}
        className={`p-4 rounded-full text-white font-bold shadow-lg ${
          isRecording
            ? 'bg-red-500 animate-pulse'
            : 'bg-orange-500 hover:bg-red-500'
        }`}
      >
        {isRecording ? '🎤 Procesando...' : '🎤 Pedir por Voz'}
      </button>
    </div>
  );
}
