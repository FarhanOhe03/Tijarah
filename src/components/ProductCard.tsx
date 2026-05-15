"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <Card className="group overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200 flex flex-col">
      <Link href={`/products/${product.id}`} className="relative block overflow-hidden bg-gray-100 aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {product.badge && (
          <div className="absolute top-2 left-2">
            <Badge
              className={
                product.badge === "Best Seller"
                  ? "bg-amber-500 hover:bg-amber-500 text-white"
                  : "bg-green-700 hover:bg-green-700 text-white"
              }
            >
              {product.badge}
            </Badge>
          </div>
        )}
      </Link>

      <CardContent className="p-4 flex flex-col flex-1">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm leading-tight hover:text-green-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-500 mt-1">{product.category}</p>

        <div className="mt-auto pt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`text-xs gap-1 transition-all ${
              added
                ? "bg-green-600 hover:bg-green-600"
                : "bg-green-700 hover:bg-green-800"
            } text-white cursor-pointer`}
          >
            <ShoppingCart size={13} />
            {added ? "Added!" : "Add to Cart"}
          </Button>
        </div>

        {product.stock < 10 && product.stock > 0 && (
          <p className="text-xs text-amber-600 mt-2">Only {product.stock} left</p>
        )}
        {product.stock === 0 && (
          <p className="text-xs text-red-500 mt-2">Out of stock</p>
        )}
      </CardContent>
    </Card>
  );
}
