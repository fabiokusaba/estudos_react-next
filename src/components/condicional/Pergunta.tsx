import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import IfElse from "./IfElse"


interface PerguntaProps {
    indice: number
    pergunta: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {

    return (
        <div className={`
            border border-zinc-600 rounded-md overflow-hidden
        `}>
            <div 
                className="bg-zinc-700 p-5 cursor-pointer select-none flex justify-between"
                onClick={() => props.alternarVisibilidade(props.indice)}>
                    
                <span>{props.pergunta}</span>
                {props.aberta ? <IconChevronDown /> : <IconChevronUp />}

                {/*<IfElse teste={aberta}>
                    <IconChevronDown />
                    <IconChevronUp />
                </IfElse>*/}

            </div>
            <If teste={props.aberta}>
                <div className="p-5">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}