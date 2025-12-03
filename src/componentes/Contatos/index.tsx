// import { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import * as S from './style'
// import { remover, editar } from '../../store/reducers/contatos'
// import ContatoClass from '../../models/Contato'
// import { Botao, BotaoOk } from '../../styles'
// import * as enums from '../../utils/enums/Contato'
// import * as A from '../../containers/Form/style'

// type Props = ContatoClass

// const Contato = ({
//   nome: nomeCtt,
//   email: emailCtt,
//   numero: numCtt,
//   categoria,
//   id
// }: Props) => {
//   const dispatch = useDispatch()

//   const [editando, setEditando] = useState(false)
//   const [nome, setNome] = useState(nomeCtt)
//   const [email, setEmail] = useState(emailCtt)
//   const [numero, setNumero] = useState<number | ''>(numCtt)
//   const [cat, setCat] = useState(categoria)

//   useEffect(() => {
//     setNome(nomeCtt)
//     setEmail(emailCtt)
//     setNumero(numCtt)
//     setCat(categoria)
//   }, [nomeCtt, emailCtt, numCtt, categoria])

//   function cancelar() {
//     setEditando(false)
//     setNome(nomeCtt)
//     setEmail(emailCtt)
//     setNumero(numCtt)
//     setCat(categoria)
//   }

//   return (
//     <S.Card>
//       {editando ? (
//         <>
//           <A.CampoEdicao
//             type="text"
//             value={nome}
//             onChange={(e) => setNome(e.target.value)}
//           />

//           <A.CampoEdicao
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <A.CampoEdicao
//             type="number"
//             value={numero}
//             onChange={(e) =>
//               setNumero(e.target.value === '' ? '' : Number(e.target.value))
//             }
//           />

//           <A.Select
//             value={cat}
//             onChange={(e) => setCat(e.target.value as enums.Categoria)}
//           >
//             {Object.values(enums.Categoria).map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </A.Select>
//         </>
//       ) : (
//         <>
//           <S.Titulo>{nome}</S.Titulo>

//           <S.LinhaInfo>
//             <strong>Email: </strong>
//             {email}
//           </S.LinhaInfo>

//           <S.LinhaInfo>
//             <strong>Número: </strong>
//             {numero}
//           </S.LinhaInfo>

//           <S.Tag parametro="categoria" catetoria={categoria}>
//             {categoria}
//           </S.Tag>
//         </>
//       )}

//       <S.BarraAcao>
//         {editando ? (
//           <>
//             <BotaoOk
//               onClick={() => {
//                 dispatch(
//                   editar({
//                     id,
//                     nome,
//                     email,
//                     numero: Number(numero),
//                     categoria: cat
//                   })
//                 )
//                 setEditando(false)
//               }}
//             >
//               Salvar
//             </BotaoOk>

//             <S.BotaoN onClick={cancelar}>Cancelar</S.BotaoN>
//           </>
//         ) : (
//           <>
//             <Botao onClick={() => setEditando(true)}>Editar</Botao>
//             <S.BotaoN onClick={() => dispatch(remover(id))}>Remover</S.BotaoN>
//           </>
//         )}
//       </S.BarraAcao>
//     </S.Card>
//   )
// }

// export default Contato
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoOk } from '../../styles'
import * as enums from '../../utils/enums/Contato'
import * as A from '../../containers/Form/style'

type Props = ContatoClass

const Contato = ({
  nome: nomeCtt,
  email: emailCtt,
  numero: numCtt,
  categoria,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(nomeCtt)
  const [email, setEmail] = useState(emailCtt)
  const [numero, setNumero] = useState<number | ''>(numCtt)
  const [cat, setCat] = useState(categoria)

  useEffect(() => {
    setNome(nomeCtt)
    setEmail(emailCtt)
    setNumero(numCtt)
    setCat(categoria)
  }, [nomeCtt, emailCtt, numCtt, categoria])

  function cancelar() {
    setEditando(false)
    setNome(nomeCtt)
    setEmail(emailCtt)
    setNumero(numCtt)
    setCat(categoria)
  }

  return (
    <S.Card>
      {editando ? (
        <S.EditContainer>
          <A.CampoEdicao
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <A.CampoEdicao
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <A.CampoEdicao
            type="number"
            value={numero}
            onChange={(e) =>
              setNumero(e.target.value === '' ? '' : Number(e.target.value))
            }
          />

          <A.Select
            value={cat}
            onChange={(e) => setCat(e.target.value as enums.Categoria)}
          >
            {Object.values(enums.Categoria).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </A.Select>
        </S.EditContainer>
      ) : (
        <>
          <S.Titulo>{nome}</S.Titulo>

          <S.LinhaInfo>
            <strong>Email: </strong>
            {email}
          </S.LinhaInfo>

          <S.LinhaInfo>
            <strong>Número: </strong>
            {numero}
          </S.LinhaInfo>

          <S.Tag parametro="categoria" catetoria={categoria}>
            {categoria}
          </S.Tag>
        </>
      )}

      <S.BarraAcao>
        {editando ? (
          <>
            <BotaoOk
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    email,
                    numero: Number(numero),
                    categoria: cat
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </BotaoOk>

            <S.BotaoN onClick={cancelar}>Cancelar</S.BotaoN>
          </>
        ) : (
          <>
            <Botao onClick={() => setEditando(true)}>Editar</Botao>
            <S.BotaoN onClick={() => dispatch(remover(id))}>Remover</S.BotaoN>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Contato
