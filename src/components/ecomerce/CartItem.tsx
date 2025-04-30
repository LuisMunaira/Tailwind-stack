import React from 'react';
import { Trash2 } from 'lucide-react';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: (id: number) => void;
}

const CartItem = ({ id, name, price, quantity, image, onRemove }: CartItemProps) => {
  return (
    <div className="flex items-center gap-2 p-2 border rounded">
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-600">
          {quantity} x R$ {price.toFixed(2)}
        </p>
      </div>
      <button
        className="p-2 hover:bg-gray-100 rounded-full text-gray-600"
        onClick={() => onRemove(id)}
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};

export default CartItem;