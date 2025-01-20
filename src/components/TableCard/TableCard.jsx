

export const TableCard = ({id, nome, email, idade, telefone}) => {

    return (

        <tr key={id} style={{ textAlign: "center" }}>
                    <td >{id}</td>
                    <td>{nome}</td>
                    <td >{email}</td>
                    <td>{idade}</td>
                    <td>{telefone}</td>
                    <td><button>fdsfds</button> <button>fdsfds</button></td>
                  </tr>
    )
}