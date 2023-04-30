import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/Moeda";

export default function CarrinhoItem(props: ItemCarrinho) {



    return (
        <div className={`
            flex items-center rounded-full
             bg-blue-400 px-4 py-2 gap-2
        `}>
            <span className={`
                w-7 h-7 rounded-full bg-blue-600
                flex justify-center items-center p-2
            `}>
                {props.quantidade}
            </span>
            <span>
                {props.produto.nome}
            </span>
            <span>
                {Moeda.formatar(props.produto.preco * props.quantidade)}
            </span>
        </div>
    )
}