import { useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
    
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [personagens, setPersonagens] = useState<any>([])

    async function obterPersonagens() {
        try {
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/people')
            const data = await resp.json()
            setPersonagens(data.results)
        } finally {
            finalizarProcessamento()
        }
    }
    
    return {
        personagens,
        obterPersonagens,
        processando,
    }
}