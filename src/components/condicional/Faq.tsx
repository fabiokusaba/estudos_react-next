import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {

    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice: number) {
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta aberta={ativo === 0} alternarVisibilidade={alternarVisibilidade} indice={0} pergunta="Pergunta 1" resposta="Respota 1" />
            <Pergunta aberta={ativo === 1} alternarVisibilidade={alternarVisibilidade} indice={1} pergunta="Pergunta 2" resposta="Resposta 2" />
            <Pergunta aberta={ativo === 2} alternarVisibilidade={alternarVisibilidade} indice={2} pergunta="Pergunta 3" resposta="Resposta 3" />
            <Pergunta aberta={ativo === 3} alternarVisibilidade={alternarVisibilidade} indice={3} pergunta="Pergunta 4" resposta="Resposta 4" />
        </div>
    )
}