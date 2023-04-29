interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props: CirculoProps) {
    return (
        <div className={`
            flex justify-center items-center
            h-64 w-64 bg-cyan-500 
            text-black text-3xl font-black
            ${props.quasePerfeito ? 'rounded-2xl' : 'rounded-full'}
        `}>
            {props.texto}
        </div>
    )
}