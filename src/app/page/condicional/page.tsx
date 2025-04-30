import Faq from "@/components/condicional/faq";
import Pergunta from "@/components/condicional/pergunta";
import Pagina from "@/components/template/Pagina";


export default function paginafaq(){
    return(
        <Pagina>
        <div className="p-8 w-screen">
            <Faq />
        </div>
        </Pagina>
    );
}