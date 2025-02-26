import express from "express";
import cors from "cors";
import {check, validationResult} from "express-validator";
import {v4 as uuidv4} from 'uuid';


const app = express();

app.use(express.json()); 
app.use(cors()); 

// Lista inicial de pacientes (opcional, pode começar vazia)
let pacientes = [ 
    { id: uuidv4(), nome: "João Silva", email: "joao@gmail.com", idade: 32, telefone: "99999-9999" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Mario Santos", email: "mario@gmail.com", idade: 48, telefone: "98888-8866" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
    { id: uuidv4(), nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" },
];

// Endpoint para obter pacientes
app.get("/pacientes", (req, res) => {
  
  res.json(pacientes);
});

// Endpoint para obter um paciente pelo ID
app.get("/pacientes/:id", (req, res) => {
  const { id } = req.params;
  const paciente = pacientes.find(paciente => paciente.id === id);

  if (!paciente) {
    return res.status(404).json({ message: "Paciente não encontrado" });
  }

  res.json(paciente);
});

//Endpoint para adicionar um paciente com biblioteca validador (express-validator)

app.post(
  "/pacientes",
  [
  check("nome").notEmpty().withMessage("Nome é obrigatório"),
  check("email").isEmail().withMessage("Email inválido"),
  check("idade").isInt({ min: 0 }).withMessage("Idade deve ser um número válido"),
  check("telefone").notEmpty().withMessage("Telefone é obrigatório"),
  ],
  (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
  }
  const { nome, email, idade, telefone } = req.body;
  const novoPaciente = { id: uuidv4(), nome, email, idade, telefone };
  console.log("Novo paciente cadastrado:", novoPaciente);
  pacientes.push(novoPaciente);
  res.status(201).json(novoPaciente);  
  }
  ); 

  // Endpoint para deletar um paciente pelo ID
app.delete("/pacientes/:id", (req, res) => {
  const { id } = req.params;

  // Filtra os pacientes para remover o paciente com o ID correspondente
  const pacienteIndex = pacientes.findIndex(paciente => paciente.id === id);

  if (pacienteIndex === -1) {
      return res.status(404).json({ message: "Paciente não encontrado" });
  }

  pacientes.splice(pacienteIndex, 1);
  res.status(200).json({ message: "Paciente removido com sucesso!" });
});


// Endpoint para editar um paciente pelo ID
app.put("/pacientes/:id", [
  check("nome").notEmpty().withMessage("Nome é obrigatório"),
  check("email").isEmail().withMessage("Email inválido"),
  check("idade").isInt({ min: 0 }).withMessage("Idade deve ser um número válido"),
  check("telefone").notEmpty().withMessage("Telefone é obrigatório"),
], (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });  
  }

  const { nome, email, idade, telefone } = req.body;
  const pacienteIndex = pacientes.findIndex(paciente => paciente.id === id);

  if (pacienteIndex === -1) {
    return res.status(404).json({ message: "Paciente não encontrado" });
  }

  // Atualiza os dados do paciente
  pacientes[pacienteIndex] = { ...pacientes[pacienteIndex], nome, email, idade, telefone };

  res.status(200).json({ message: "Paciente atualizado com sucesso!", paciente: pacientes[pacienteIndex] });
});




  


// Inicia o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

