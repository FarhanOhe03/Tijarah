import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Star, RotateCcw } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";


const valueProps = [
  { icon: Truck, label: "Fast Delivery", desc: "Quick shipping to your door" },
  { icon: ShieldCheck, label: "Secure Checkout", desc: "Your payment is protected" },
  { icon: Star, label: "Quality Products", desc: "Carefully sourced essentials" },
  { icon: RotateCcw, label: "Easy Returns", desc: "Hassle-free return policy" },
];

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-600">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-12 w-96 h-96 rounded-full bg-white/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Quality Essentials,{" "}
              <span className="text-green-200">Delivered to Your Door</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed max-w-xl">
              From everyday needs as an adult to baby products and household goods —
              everything your family needs in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-800 font-semibold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors text-base"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Featured / Best Sellers */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Best Sellers</h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-medium text-green-700 hover:text-green-800 flex items-center gap-1 transition-colors"
            >
              See all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3 p-6">
              <div className="bg-green-100 p-3 rounded-full">
                <Icon size={22} className="text-green-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-green-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to stock up?
          </h2>
          <p className="text-green-100 mb-8 text-base max-w-md mx-auto">
            Browse our full range of products and get everything you need delivered fast.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors text-base"
          >
            Shop All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
