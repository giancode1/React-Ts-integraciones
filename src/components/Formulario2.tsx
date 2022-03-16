import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario2 = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: '',
        nombre: '',
        edad: 0,
    });

    const { email, nombre,  } = formulario;

    return (
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>


            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />
            </div>


            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    )
}
