'use client';
import { useState } from "react";

interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

const foodItems: FoodItem[] = [
  { id: 1, name: "Pizza Margherita", price: 15.99, category: "pizza" },
  { id: 2, name: "Pizza Pepperoni", price: 17.99, category: "pizza" },
  { id: 3, name: "X-Burger", price: 12.99, category: "burger" },
  { id: 4, name: "X-Burger Duplo", price: 14.99, category: "burger" },
  { id: 5, name: "Salada Caesar", price: 9.99, category: "salad" },
  { id: 6, name: "Salada Grega", price: 10.99, category: "salad" },
  { id: 7, name: "Sorvete de Baunilha", price: 5.99, category: "dessert" },
  { id: 8, name: "Sorvete de Chocolate", price: 5.99, category: "dessert" },
];

const Deliver = () => {
  const [category, setCategory] = useState<string>("pizza");
  const [selectedFood, setSelectedFood] = useState<string>("");

  const filteredFood = foodItems.filter((item) => item.category === category);
  const selectedItem = foodItems.find((item) => item.name === selectedFood);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFood) {
      alert("Por favor, selecione um item do cardápio");
      return;
    }

    alert(`Pedido Realizado! Seu pedido de ${selectedFood} será ${
      selectedItem?.category === "pizza" || selectedItem?.category === "burger" ? "preparado para retirada" : "entregue"
    }`);
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Pedido de Fast Food</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Selecione a Categoria</h2>
          <div className="flex gap-4 flex-wrap">
            <button
              type="button"
              className={`flex items-center gap-2 px-6 py-4 rounded-md ${
                category === "pizza" ? "bg-blue-500 text-white" : "border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setCategory("pizza")}
            >
              <img src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg" alt="Pizza" className="w-20 h-20 object-cover rounded-full" />
              Pizza
            </button>

            <button
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                category === "burger" ? "bg-blue-500 text-white" : "border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setCategory("burger")}
            >
              <img src="https://images.pexels.com/photos/2430191/pexels-photo-2430191.jpeg" alt="Burger" className="w-16 h-16 object-cover rounded-full" />
              Hambúrguer
            </button>

            <button
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                category === "salad" ? "bg-blue-500 text-white" : "border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setCategory("salad")}
            >
              <img src="https://images.pexels.com/photos/1195680/pexels-photo-1195680.jpeg" alt="Salad" className="w-16 h-16 object-cover rounded-full" />
              Salada
            </button>

            <button
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                category === "dessert" ? "bg-blue-500 text-white" : "border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setCategory("dessert")}
            >
              <img src="https://images.pexels.com/photos/4300409/pexels-photo-4300409.jpeg" alt="Dessert" className="w-16 h-16 object-cover rounded-full" />
              Sobremesa
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Selecione o Item</h2>
          <select
            value={selectedFood}
            onChange={(e) => setSelectedFood(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Selecione um item do cardápio</option>
            {filteredFood.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name} - R${item.price}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Método de Entrega</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="delivery"
                checked={selectedItem ? selectedItem.category === "pizza" || selectedItem.category === "burger" : false}
                onChange={() => {}}
                className="w-4 h-4"
              />
              Entrega
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="pickup"
                checked={selectedItem ? selectedItem.category === "salad" || selectedItem.category === "dessert" : false}
                onChange={() => {}}
                className="w-4 h-4"
              />
              Retirada
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Fazer Pedido {selectedItem && `- R$${selectedItem.price}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Deliver;
