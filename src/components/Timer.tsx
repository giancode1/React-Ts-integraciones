import { useEffect, useRef, useState } from 'react';

type TimerArgs = {
    milisegundos: number;
    segundos?: number;
}

export const Timer = ({ milisegundos }: TimerArgs) => {
    console.log("Componente Timer")
    
    const [segundos, setSegundos] = useState(0)

    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {
        console.log("useEffect")

        ref.current && clearInterval(ref.current)

        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos);
        
        return () => {
            console.log("Me disparo cuando el elemento es destruido");
        }
    }, [milisegundos])


    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>
        </>
    )
}
