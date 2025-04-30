import Pergunta from "./pergunta";

export default function Faq(){
    return (
        <div className=" flex flex-col gap-4 p-16 justify-center items-center ">
          <Pergunta texto="Qual e o teu Nome?" resposta="Luis"/>
          <Pergunta texto="Apelido......................." resposta="Munaira"/>
          <Pergunta texto="Estudante?......................" resposta="Claro"/>
        </div>
    );
}