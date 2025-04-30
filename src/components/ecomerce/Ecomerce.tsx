'use client'
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Trash2 } from 'lucide-react';
import { Product, CartItem as CartItemType } from './product';

// ProductCard Component
const ProductCard = ({ product, onAddToCart }: { 
  product: Product; 
  onAddToCart: (product: Product) => void 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-purple-600">
            R$ {product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

// CartItem Component
const CartItem = ({ id, name, price, quantity, image, onRemove }: {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: (id: number) => void;
}) => {
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

// Cart Component
const Cart = ({ isOpen, items, onRemove, onClear, onCheckout, calculateTotal }: {
  isOpen: boolean;
  items: CartItemType[];
  onRemove: (id: number) => void;
  onClear: () => void;
  onCheckout: () => void;
  calculateTotal: () => number;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white shadow-xl z-40 p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Carrinho</h2>
        <button
          className="p-2 hover:bg-gray-100 rounded-full text-gray-600"
          onClick={onClear}
          disabled={items.length === 0}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      
      {items.length === 0 ? (
        <p className="text-gray-500 text-center">Seu carrinho está vazio</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onRemove={onRemove}
              />
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">R$ {calculateTotal().toFixed(2)}</span>
            </div>
            <button 
              className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              onClick={onCheckout}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Navbar Component
const Navbar = ({ searchQuery, setSearchQuery, cartItemCount, setIsCartOpen, isCartOpen }: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItemCount: number;
  setIsCartOpen: (isOpen: boolean) => void;
  isCartOpen: boolean;
}) => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-600">Munaira Shop</h1>
          </div>

          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar produtos..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 bg-purple-600 rounded-full text-white text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Main Ecommerce Component
const Ecommerce = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Smartphone XYZ",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format",
      description: "Último modelo com câmera incrível"
    },
    {
      id: 2,
      name: "Laptop Pro",
      price: 1499.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format",
      description: "Perfeito para trabalho e jogos"
    },
    {
      id: 3,
      name: "Fones de Ouvido",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
      description: "Som de alta qualidade"
    },
    {
      id: 4,
      name: "Smartwatch Sport",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
      description: "Monitore suas atividades"
    },
    {
      id: 5,
      name: "Câmera DSLR Pro",
      price: 2499.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format",
      description: "Capture momentos especiais com qualidade profissional"
    },
    {
      id: 6,
      name: "Console Gaming X",
      price: 1999.99,
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&auto=format",
      description: "A melhor experiência em jogos"
    },
    {
      id: 7,
      name: "Tablet Ultra",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format",
      description: "Perfeito para entretenimento e produtividade"
    },
    {
      id: 8,
      name: "Monitor 4K",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format",
      description: "Cores vibrantes e resolução impressionante"
    },
    {
      id: 9,
      name: "Teclado Mecânico",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format",
      description: "Switches premium para digitação precisa"
    },
    {
      id: 10,
      name: "Mouse Gamer",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format",
      description: "Precisão e ergonomia para jogadores"
    },
    {
      id: 11,
      name: "Caixa de Som Bluetooth",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format",
      description: "Som potente e conectividade sem fio"
    },
    {
      id: 12,
      name: "Webcam HD",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format",
      description: "Ideal para videoconferências"
    },
    {
      id: 13,
      name: "SSD 1TB",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format",
      description: "Armazenamento rápido e confiável"
    },
    {
      id: 14,
      name: "Roteador Wi-Fi 6",
      price: 459.99,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format",
      description: "Internet ultra-rápida para sua casa"
    },
    {
      id: 15,
      name: "Impressora Multifuncional",
      price: 599.99,
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&auto=format",
      description: "Impressão, cópia e digitalização de qualidade"
    },
    {
      id: 16,
      name: "Carregador Wireless",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&auto=format",
      description: "Carregamento rápido e sem fios"
    },
    {
      id: 17,
      name: "Dock Station USB-C",
      price: 279.99,
      image: "https://images.unsplash.com/photo-1619506147154-01717498fc26?w=500&auto=format",
      description: "Expanda as conexões do seu notebook"
    },
    {
      id: 18,
      name: "Câmera de Segurança Smart",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500&auto=format",
      description: "Monitore sua casa pelo smartphone"
    },
    {
      id: 19,
      name: "Projetor LED",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format",
      description: "Cinema em casa com qualidade HD"
    },
    {
      id: 20,
      name: "Estabilizador para Smartphone",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format",
      description: "Vídeos profissionais com seu celular"
    }
  ];
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} foi adicionado ao carrinho`);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
    showToast('Carrinho limpo com sucesso');
  };

  const checkout = () => {
    showToast(`Pedido realizado! Total: R$ ${calculateTotal().toFixed(2)}`);
    setCartItems([]);
    setIsCartOpen(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const showToast = (message: string) => {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
      />

      <Cart 
        isOpen={isCartOpen}
        items={cartItems}
        onRemove={removeFromCart}
        onClear={clearCart}
        onCheckout={checkout}
        calculateTotal={calculateTotal}
      />

      <div className="pt-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold mb-4">Ofertas Especiais</h1>
          <p className="text-xl">Encontre os melhores produtos com os melhores preços!</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold mb-6">Produtos em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
              <p className="text-gray-400">
                Sua loja online de confiança para os melhores produtos tecnológicos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-gray-400">
                Email: munaira@eshop.com<br />
                Telefone: (+258) 87 404 3412
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Munaira Shop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ecommerce;