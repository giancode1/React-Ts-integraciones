import { Timer } from "./Timer"
import { useState } from 'react';

export const TimerPadre = () => {
    const [milisegundos, seMilisegundos] = useState(1000)
  return (
    <>
        <span>Milisegundos: {milisegundos}</span>
        <br />
        <button className="btn btn-outline-success"
            onClick={() => seMilisegundos(1000)}
        >
            1000
        </button>
        <button className="btn btn-outline-success"
            onClick={() => seMilisegundos(2000)}
        >
            2000
        </button>


        <Timer milisegundos={milisegundos} />
    </>
  )
}
