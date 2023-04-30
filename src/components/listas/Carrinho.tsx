import ItemCarrinho from "@/model/ItemCarrinho"
import CarrinhoItem from "./CarrinhoItem"
import CarrinhoVazio from "./CarrinhoVazio"
import Moeda from "@/utils/Moeda"

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {
    const total = props.itens.reduce((soma, item) => soma + item.quantidade * item.produto.preco, 0)

    return (
        <div className="flex flex-col w-4/5 border border-white rounded-md overflow-hidden">
            <div className="flex justify-between items-center bg-zinc-800 text-3xl p-3">
                <span>Carrinho</span>
                <span>{Moeda.formatar(total)}</span>
            </div>
            <div className="flex flex-wrap gap-5 p-5">
                {props.itens.length === 0 ? (
                    <CarrinhoVazio />
                ) : (
                    props.itens.map((item, i) => {
                        return <CarrinhoItem key={i} {...item} />
                    })
                )}
            </div>
        </div>
    )
}