// src/providers/ClientProvider.tsx
"use client";
import { useEffect, useState } from "react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Evitar renderizado diferente entre servidor/cliente
  if (!mounted) {
    return (
      <div style={{
        backgroundColor: '#111827',
        color: 'white',
        minHeight: '100vh'
      }}>
        {/* Loading simple */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
          Cargando Autoly...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
