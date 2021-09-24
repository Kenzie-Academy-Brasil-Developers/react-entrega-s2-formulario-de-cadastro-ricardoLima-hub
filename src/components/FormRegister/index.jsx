import { Paper, Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";

const FormRegister = ({setInput}) => {

    const myStyle = {
        width: "280px",
        height: "450px",
    }

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().email().required("E-mail obrigatório"),
        password: yup.string().min(8, "Mínimo de 8 dígitos")
                .matches(/^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!")
                .required("Campo obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Senhas não são iguais").required("Digite a senha novamente"),
    })

    const { register, handleSubmit, formState: {errors} } = useForm({resolver : yupResolver(schema)})

    const handleForm = (data) => {
        setInput(data)
        history.push(`/welcome/${data.name}`)
    }

    return (
        <Paper
            style={myStyle}
        >
            <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    <TextField 
                        label="Nome"
                        margin="normal"
                        variant="standard"
                        size="small"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </div>
                <div>
                    <TextField 
                        label="E-mail"
                        margin="normal"
                        variant="standard"
                        size="small"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div>
                    <TextField 
                        label="Senha"
                        margin="normal"
                        variant="standard"
                        size="small"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div>
                    <TextField 
                        label="Confirmar Senha"
                        margin="normal"
                        variant="standard"
                        size="small"
                        {...register("confirmPassword")}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                    />
                </div>
                <div>
                    <Button type="submit" size="large" margin="large">Cadastrar</Button>
                </div>
            </form>
        </Paper>
    )
}

export default FormRegister;