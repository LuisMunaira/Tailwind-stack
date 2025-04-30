import Produtos from "@/components/constants/produtos";
import Listarprodutos from "@/components/produtos/listaprodutos";
import ProdutoItem from "@/components/produtos/produtosItem";   
import Pagina from "@/components/template/Pagina";

export default function Paginaproduct(){
   
    return (
        <Pagina>
        <div className=" ">
           
            <Listarprodutos produtos={Produtos} />
        </div>
        </Pagina>
    );
}