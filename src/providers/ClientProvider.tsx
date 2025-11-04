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

  if (!mounted) {
    return (
      <div
        role="status"
        aria-label="Cargando Autoservice Liam Yahir"
        style={{
          backgroundColor: '#111827',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Autoservice Liam Yahir</h1>
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
