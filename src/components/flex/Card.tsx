import { IconShoppingCart, IconStarFilled } from '@tabler/icons-react'
import imagemMinha from "../flex/desktop.jpg"
import Image from 'next/image'

 

export default function Card() {
    return (
        
        <div className="flex flex-col gap-1 bg-zinc-400 w-60 p-4 rounded-md">
            <div className="w-full h-55 relative" >
           
                <div className="absolute z-50 px-2 py-0.5 top-2 left-2 bg-green-400 rounded-full text-xs" >
                    39% off
                </div>
                <div className='rounded-md'><Image
                   src= {imagemMinha}
                   width={250}
                   height={100}
                    alt="Imagem do Produto" 
                   
                />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-lg">Nike Air MX Super 2500</div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-bold text-xl">R$ 199,00</span>
                        <span className="line-through text-sm text-zinc-400">R$ 299,00</span>
                    </div>
                    <div className="flex gap-0.5">
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <IconStarFilled size={18} className="text-yellow-400" />
                        <IconStarFilled size={18} className="text-yellow-400" />
                    </div>
                </div>
                <button className="flex justify-center items-center gap-2 botao" >
                    <IconShoppingCart size={23} />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
        
    )
}
