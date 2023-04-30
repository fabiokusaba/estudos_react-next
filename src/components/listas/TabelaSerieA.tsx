interface TabelaSerieAProps {
    times: string[]
}

export default function TabelaSerieA(props: TabelaSerieAProps) {
    
    // transformando nesse for uma string em uma <li>
    // const clubes: any[] = []
    // for (let i = 0; i < props.times.length; i++) {
    //     console.log(props.times[i])
    //     clubes.push((
    //         <li key={props.times[i]} className="text-xl list-decimal">
    //             {props.times[i]}
    //         </li>
    //     ))
    // }

    // transformando nesse map() uma string em uma <li>
    const clubes2 = props.times.map((time, i) => {
        return (
            <li 
                key={time} 
                className={`
                    text-xl list-decimal
                    ${i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500'}
                `}
                >
                {time}
            </li>
        )
    })
    return (
        <ol>
            {clubes2}
        </ol>
    )
}