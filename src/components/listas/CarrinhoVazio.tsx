import { IconCircleX } from "@tabler/icons-react"

export default function CarrinhoVazio() {
    return (
        <div className="flex justify-center items-center gap-2 text-zinc-400">
            <IconCircleX className="text-red-600"/>
            <span>Nenhum item no carrinho</span>
        </div>
    )
}