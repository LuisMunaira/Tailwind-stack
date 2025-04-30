"use client";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

interface perguntaProps {
  texto: string;
  resposta: string;
}

export default function Pergunta(props: perguntaProps) {
  const [aberta, setAberta] = useState(false);
  
  return (
    <div
      className="border border-purple-600
        rounded-md"  >
      <div
        className="bg-purple-600  select-none overflow-hidden  flex justify-between
           p-5 gap-2 cursor-pointer"
        onClick={() => setAberta(!aberta)}>

        <span>{props.texto}</span>
       {aberta? <IconChevronUp/> : <IconChevronDown /> }
      </div>
      {aberta && <div className="p-5">{props.resposta}</div>}
    </div>
  );
}
