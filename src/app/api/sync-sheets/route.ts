// src/app/api/sync-sheets/route.ts
export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { transcription, total, items } = await request.json();

    // Enviar a Google Apps Script
    const sheetResponse = await fetch(
      'https://script.google.com/macros/s/AKfycbz8d4vcCnq3OMlomRa0VPTq9pY-tlA9zJcP1keXUB1cNNw9YVel06EYTPYZ-h-ODEWO/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcription,
          total,
          items,
          timestamp: new Date().toISOString(),
          phone: '+59892308828'
        })
      }
    );

    return Response.json({
      success: true,
      message: 'Datos enviados a Google Sheets'
    });

  } catch (error) {
    return Response.json({ error: 'Error sync sheets' }, { status: 500 });
  }
}
