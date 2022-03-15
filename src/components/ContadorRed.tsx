import { useReducer } from "react"

const initialState = {
    contador:10, //nunca se cambia el original, abajo se retorna uno nuevo
}

type ActionType = 
      {type: 'incrementar'} 
    | {type: 'decrementar'}
    | {type: 'custom', payload:number}

const contadorReducer  = ( state: typeof initialState, action: ActionType) => {
    //siempre retorna un nuevo state
    switch (action.type) {
        case 'incrementar':
            return {
                ...state, //copia el estado actual, en un nuevo espacio de memoria, no altera el original
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }
        default:
            return state
    }
}


export const ContadorRed = () => {
    // const [contadorState, dispatch] = useReducer(contadorReducer, initialState)
    const [{contador}, dispatch] = useReducer(contadorReducer, initialState)
  return (
    <>
        {/* <h4>Contador: {contadorState.contador}</h4> */}
        <h4>Contador: {contador}</h4>

        <button className="btn btn-outline-primary"
            onClick={() => dispatch({type: 'incrementar'})}>
                +1
        </button>

        <button className="btn btn-outline-primary"
            onClick={() => dispatch({type: 'decrementar'})}>
                -1
        </button>

        <button className="btn btn-outline-primary"
            onClick={() => dispatch({type: 'custom', payload:100})}>
                contador: 100
        </button>
    </>
  )
}
