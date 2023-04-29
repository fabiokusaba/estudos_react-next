import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {
    const [pesquisa, setPesquisa] = useState<string>('abstract')
    const [tamanho, setTamanho] = useState<number>(300)

    const url = 'https://source.unsplash.com/featured/'

    function renderizarBotao(valor: string) {
        return (
            <button className={`
                bg-blue-500 px-4 py-2 rounded-md
            `} onClick={() => {
                setPesquisa(valor)
                console.log(valor)
            }}>
                {valor}
            </button>
        )
    }
    return (
        <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">

            <div className="flex justify-center gap-7 mb-5">
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>

            <Image 
                src={`${url}${tamanho}x${tamanho}?${pesquisa}`} 
                height={300} width={300} 
                alt="Imagem aleatoria"
                className="rounded-md"  
            />

            <div className="flex justify-between gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>

            <div>
                <input 
                    type="number" 
                    value={tamanho} 
                    className="bg-zinc-800 p-2 rounded-md text-white outline-none w-full"
                    onChange={e => {
                        setTamanho(+e.target.value)
                    }}
                />
            </div>
        </div>
    )
}