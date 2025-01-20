import axios from "axios";
import { useEffect, useState } from "react"
import { TableCard } from "../../components/TableCard/TableCard";
import { useNavigate } from "react-router-dom";

export const User = () => {

    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchUser = async () => {
          
            try{
                const response = await axios.get('http://localhost:5000/pacientes')
                console.log(response)
                setUser(response.data)
            }
            catch(error) {
                console.error('Error ao buscar dados', error);
               
            }
        };
      
        fetchUser();

    }, [])

    return (
        <>
         <p>Pacientes Cadastrados</p>
         <>
         <button onClick={() =>navigate('/register')}>Adicionar +</button>
         </>

         {
            user.length > 0 ? (

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>ID</th>
              <th >Nome</th>
              <th>Email</th>
              <th >Idade</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
         
          {user.map((data) => (
             
             <TableCard
              key= {data.id}
              id= {data.id}
              nome= {data.nome}
              email = {data.email}
              idade= {data.idade}
              telefone= {data.telefone}
              />
            ))}
          </tbody>
        </table>
                    
            )
            : (
                <p>Error ao buscar Dados...</p>
            )
         }
        
         
        
        </>
    )
}