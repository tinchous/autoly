// src/app/checkout/page.tsx - CON DYNAMIC IMPORT
import { dynamic } from 'next/dynamic';

const CheckoutClient = dynamic(() => import('./CheckoutClient'), {
  ssr: false,
  loading: () => (
    <div className="max-w-2xl mx-auto p-8 bg-black rounded-2xl mt-20">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-4"></div>
        <div className="h-4 bg-gray-700 rounded mb-2"></div>
      </div>
    </div>
  )
});

export default function Checkout() {
  return <CheckoutClient />;
}
