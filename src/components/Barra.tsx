interface BarraProps{
    corFundo: string
}

export default function(props: BarraProps){
    return (
        <span className={`
            ml-2 w-3 p-1 h-8 rounded-sm border-zinc-100 border-2 
            ${props.corFundo}
        `}>

        </span>
    )
}