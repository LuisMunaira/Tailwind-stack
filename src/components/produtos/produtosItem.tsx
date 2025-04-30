'use client'
import Image from "next/image";
import Produto from "../model/produto";
import { IconShoppingCart } from "@tabler/icons-react";

interface produtioitemProps{
    produto : Produto
   // selecionar: (produto : Produto) => void
}
export default function ProdutoItem(props: produtioitemProps){
    const {produto} = props
    return (
        <div className="flex flex-col rounded-md p-2 bg-zinc-800
        border border-zinc-300 text-zinc-500
        ">
            <Image src={produto.imagem} 
            width={300} 
            height={200} 
            alt="Imagem do produto" 
            className="rounded-md bg-purple-400"
            />
            <div className="flex flex-col p-3 ">
               <div className="flex items-center justify-between">
               <div className="text-2xl text-zinc-200 font-black">{props.produto.nome}</div> 
                <div className="text-green-500 font-bold"> $ {produto.preco} </div>
                </div> 
                <div className="text-gray-400 text-sm">{produto.descricao }</div>
            </div>
            <div>
                <button className="flex botao w-full justify-center gap-2">
                    <IconShoppingCart /> Comprar
                </button>
            </div>
        </div>
    );
}