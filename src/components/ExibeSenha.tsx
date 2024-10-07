import { IconCopy } from "@tabler/icons-react"
import { useState } from "react"

interface ExibeSenhaProps {
    senha: string
}

export default function (props: ExibeSenhaProps) {
    const [mostrartAviso, setMostrarAviso] = useState(false)

    const copiar = () => {
        navigator.clipboard.writeText(props.senha)
        setMostrarAviso(true)
        setTimeout(() => {
            setMostrarAviso(false)
        }, 2000)
    }

    return (
        <div className="mt-3 ">
            {props.senha?.trim() && (
                <>
                    <span className="font-bold text-md">Senha Gerada: </span>
                    <div className=" 
                        flex justify-between
                        p-2 border rounded-lg bg-zinc-100
                        text-slate-800 
                    ">
                        {props.senha}

                        <IconCopy
                            className="hover:text-blue-500 cursor-pointer"
                            onClick={copiar}
                        />
                    </div>
                </>
            )}
            {mostrartAviso && (
                <p className="mt-2 text-blue-500 text-center">
                    Senha copiada
                </p>
            )}
        </div>
    )
}

