interface DisplayProps {
    valor: number
}

export default function Display (props: DisplayProps) {
    return (
        <div className={`
          bg-zinc-800 text-5xl font-black rounded-md p-5 text-white
            flex justify-center items-center flex-1
        `}>
            {props.valor}
        </div>
    )
}