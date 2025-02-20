import { useState } from "react";
import { TableRow, TableCell, ActionButton, ActionButtonsContainer } from "./style/style";
import { Modal } from "../Modal/Modal";

export const TableCard = ({ id, nome, email, idade, telefone, onRemove }) => {

  const [openModal, setOpenModal] = useState(false);

  //modal

  const handleOpenModal = () => {
    setOpenModal(!openModal)
    
  };

  const handleCloseModal = () => {
    setOpenModal(false)
  };

  const handleRemoveUser = () => {
    onRemove()

  }


  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{nome}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{idade}</TableCell>
        <TableCell>{telefone}</TableCell>
        <TableCell>
          <ActionButtonsContainer>
            <ActionButton>Editar</ActionButton>
            <ActionButton onClick={handleOpenModal}>Excluir</ActionButton>
          </ActionButtonsContainer>

        </TableCell>
      </TableRow> 

      {
        openModal && <Modal 
        title={'Deseja realmente excluir?'} 
        subtitle={'Ao confirmar, você irá apagar definitivamente o paciente'}
        open={openModal}
        close={() => handleCloseModal()}
        onConfirm={()=> handleRemoveUser()}  />
      }
    </>


  );
};


