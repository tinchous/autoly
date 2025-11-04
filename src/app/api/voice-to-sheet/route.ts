// src/app/api/voice-to-sheet/route.ts
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audio = formData.get('audio') as File;

    // 1. Transcribir audio con Whisper (simulado)
    const transcription = "Pedido de prueba: 2x Coca Cola, 1x Pan";

    // 2. Guardar en Google Sheets
    const sheetResponse = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}/values/A:A:append?valueInputOption=RAW`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [[new Date().toISOString(), transcription]]
      })
    });

    // 3. Enviar email con Resend
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'voice@autoly.com',
        to: 'pedidos@autoly.com',
        subject: 'Nuevo pedido por voz 🎤',
        html: `<p>Se recibió un pedido por voz: <strong>${transcription}</strong></p>`
      })
    });

    return NextResponse.json({ success: true, transcription });
  } catch (error) {
    return NextResponse.json({ error: 'Error processing voice' }, { status: 500 });
  }
}
