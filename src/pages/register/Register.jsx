import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import {
    FormContainer,
    InputField,
    SaveButton,
    InputContainer,
    InputLabel
} from './style/style';

export const Register = () => {

    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    const [form, setForm] = useState({
        nome: '', email: '', idade: '', telefone: '',
    });

   

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            // Validação simples antes do envio
            if (!form.nome || !form.email || !form.idade || !form.telefone) {

                return;
            }

           const response =  await axios.post(`${API_URL}/pacientes`, form)
          
           console.log('paciente adicionado com sucesso', response);
           
            
            // setTimeout(() => {
            //     navigate('/pacientes');
            // }, 5000);

        } catch (error) {
            console.error('Error ao buscar dados', error);
        
        } finally {
               setTimeout(() => {
                navigate('/pacientes');
            }, 5000);
        }

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };



    return (
        <>
            <FormContainer as='form'>
                <InputContainer>
                    <InputLabel>Nome</InputLabel>
                    <InputField type="text" name="nome" value={form.nome} onChange={handleInputChange} />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Email</InputLabel>
                    <InputField type="email" name="email" value={form.email} onChange={handleInputChange} />
                </InputContainer>

                <InputContainer>
                    <InputLabel>Idade</InputLabel>
                    <InputField
                        type="number"
                        name="idade"
                        value={form.idade}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                <InputContainer>
                    <InputLabel>Telefone</InputLabel>
                    <InputField
                        type="text"
                        name="telefone"
                        value={form.telefone}
                        onChange={handleInputChange}
                    />
                </InputContainer>

                <SaveButton onClick={handleAdd}>Registrar</SaveButton>
            </FormContainer>

        </>
    )
}