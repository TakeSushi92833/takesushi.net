import React from "react";

export default function TakeSushiWebsite() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Header */}
      <header className="p-6 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wider">TAKE SUSHI</h1>
        <p className="text-sm">TOGO ONLY | Call us: (714) 123-4567</p>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-12 px-4">
        <h2 className="text-4xl font-semibold mb-4">Fresh. Fusion. Fast.</h2>
        <p className="text-lg text-gray-600 mb-6">Fusion-style sushi rolls for pickup only. Order now and enjoy the best!</p>
        <a href="https://order.takesushi.com" target="_blank" className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition">Order Online</a>
      </section>

      {/* Menu Section */}
      <section className="p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 border-b pb-2">Our Signature Rolls</h3>

        <div className="mb-8">
          <h4 className="text-xl font-semibold">PARADISE ROLL</h4>
          <p className="text-sm text-gray-600">Half Order: $6.99 | Full Order: $12.99</p>
          <p className="mt-2">Inside: Spicy California Roll</p>
          <p>Outside: Shredded Crab Stick and Pico de Gallo</p>
          <p>Sauce: Paradise Sauce</p>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold">THE BEST ROLL</h4>
          <p className="text-sm text-gray-600">Half Order: $7.99 | Full Order: $14.99</p>
          <p className="mt-2">Inside: California Roll</p>
          <p>Outside: Stir Fried Mushroom, Greenbean, Onion, Rice Cakes, Scallops, Green Onion, Masago</p>
          <p>Sauce: Baked Mayo and Eel Sauce</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-6 text-sm text-gray-700">
        <p>Location: 123 Sushi St, Buena Park, CA</p>
        <p>Open: Mon–Sat 11am–8pm | Closed Sundays</p>
        <p>Follow us on Instagram: <a href="https://instagram.com/takesushi" target="_blank" className="text-blue-600 hover:underline">@takesushi</a></p>
      </footer>
    </div>
  );
}