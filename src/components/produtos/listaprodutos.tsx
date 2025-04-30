
import Produto from "../model/produto";
import ProdutoItem from "./produtosItem";

interface Listarprodutosprops{
    produtos: Produto[]
}
export default function Listarprodutos(props: Listarprodutosprops){
 return ( 
 <div className="flex flex-wrap justify-center gap-5">
    {props.produtos.map((produto) =>{
    return <ProdutoItem key={produto.id} produto ={ produto} />
    })}
 </div> 
)
}