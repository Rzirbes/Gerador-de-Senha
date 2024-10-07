'use client'
import { useEffect, useState } from "react"
import opcoes from "@/data/OpcoesCaracteres"
import Checkbox from "@/components/Checkbox"
import Senha from "@/model/Senha"
import ExibeSenha from "@/components/ExibeSenha"
import ForcaSenha from "@/components/ForcaSenha"

export default function Home() {

  const [tamanho, setTamanho] = useState<number>(8)
  const [tiposCaracteres, setTiposCaracteres] = useState(opcoes)
  const [senha, setSenha] = useState('')
  const [forcaSenha, setForcaSenha] = useState(1)

  useEffect(() => {
    setForcaSenha(Senha.calcularForca(tamanho, tiposCaracteres))
  }, [tamanho, tiposCaracteres])

  const lidaComMudanca = (indice: number) => {
    const aux = [...tiposCaracteres]
    aux[indice].valor = !aux[indice].valor
    setTiposCaracteres([...aux])
  }

  const gerarSenha = () => {
    const novaSenha = Senha.gerarSenha(tamanho, tiposCaracteres)
    setSenha(novaSenha)
  }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-zinc-200 mb-4 text-center font-bold">Gerador de Senhas</h1>

      <div className="w-3/12 bg-slate-700 text-zinc-200 rounded-md p-8">
        <div className="flex flex-col gap-3 text-xl ">
          <label className="flex justify-between">
            <span>Tamanho da senha: </span>
            <span className="text-blue-500">{tamanho}</span>
          </label>
          <input
            type="range"
            min={5}
            max={30}
            value={tamanho}
            onChange={(e) => setTamanho(+e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          {tiposCaracteres.map((opcao, i) => {
            return (
              <Checkbox
                key={opcao.id}
                id={opcao.id}
                texto={opcao.nome}
                selecionado={opcao.valor}
                lidaComMudanca={() => lidaComMudanca(i)}
              />
            )
          })}
        </div>
        <ForcaSenha forca={forcaSenha} />
        <button
          className={`
            text-lg font-bold p-2 mt-3 rounded-lg w-full
          text-white bg-blue-500
          `}
          onClick={gerarSenha}
        >
          Gerar Senha
        </button>
        <ExibeSenha senha={senha} />
      </div>
    </main>
  )
}
