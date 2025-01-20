import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 50px auto;
`;


export const InputField = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #1976d2;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 14px;
`;