import axios from "axios";
import { useEffect, useState } from "react"
import { TableCard } from "../../components/TableCard/TableCard";
import { useNavigate } from "react-router-dom";
import { Search } from "../../components/Search/Search";
import { Error } from "../../components/Error/Error";


import { StyledTable, TableHeader} from "./style/style";

export const User = () => {

    const [user, setUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {

        const fetchUser = async () => {
          
            try{
                const response = await axios.get(`${API_URL}/pacientes`);
            //   const response = await axios.get('http://localhost:5000/pacientes');
                setUser(response.data)
               
            }
            catch(error) {
                console.error('Error ao buscar dados', error); 
               
            }
        };
      
        fetchUser();

    }, []);

    //search
    const handleAllSearch = (event) => {
      setSearchTerm(event.target.value)
    };

    const filterUsers = user.filter(patiente => 
      patiente.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //remove

    const handleRemoveUser = (id) => {
      axios.delete(`${API_URL}/pacientes/${id}`)

      .then(() => {
        const filtered = user.filter(users => users.id !== id);
       
        setUser(filtered);
      })

      .catch((error) => {
        console.error("Erro ao deletar paciente:", error);
      })
      
    };

    //editar

    const handleEditUser = (id) => {
     
      navigate(`/edit/${id}`);
    }

    return (
        <>
         <p>Pacientes Cadastrados</p>
         <Search
         placeholder={'Search Paciente...'}
         value={searchTerm}
         onChange={handleAllSearch}
         />

         <>
         <button onClick={() =>navigate('/register')}>Adicionar +</button> 

         </>

              {
              user.length > 0 ? (
                <StyledTable>
                  <thead>
                    <tr>
                      <TableHeader>ID</TableHeader>
                      <TableHeader>Nome</TableHeader>
                      <TableHeader>Email</TableHeader>
                      <TableHeader>Idade</TableHeader>
                      <TableHeader>Telefone</TableHeader>
                      <TableHeader>Ações</TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    {filterUsers.map((data) => (
                      <TableCard
                        key={data.id}
                        id={data.id}
                        nome={data.nome}
                        email={data.email}
                        idade={data.idade}
                        telefone={data.telefone}
                        onRemove = {()=> handleRemoveUser(data.id)}
                        onEdit = {()=> handleEditUser(data.id)} // data.id
                      />
                    ))}
                  </tbody>
                </StyledTable>
              ) : (
                <Error
                title = {' Houve um error :('}
                subtitle = {'Pacientes não encontrados...'}
                />
                 
              )}
              
        
        </>
    )
}