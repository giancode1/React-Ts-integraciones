import { useState, ChangeEvent } from 'react';

export function useForm<T>(initState:T){   //<T> es un tipo generico
//lo mismo que la linea de arriba:
//export const useForm = <T extends Object>(initState:T) => { 
// export const useForm = <T extends Object | T extends Array>(initState:T) => {   //T extends Array: puede ser un array tambien

    const [formulario, setFormulario] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        console.log(name, value);
        setFormulario({
            ...formulario,
            [name]: value,
        });
    }

    return {
        formulario,
        handleChange,
    }


}
