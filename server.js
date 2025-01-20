import express from "express";
import cors from "cors";
import {check, validationResult} from "express-validator";


const app = express();

app.use(express.json()); 
app.use(cors());

// Lista inicial de pacientes (opcional, pode começar vazia)
let pacientes = [ 
    { id: 0, nome: "João Silva", email: "joao@gmail.com", idade: 32, telefone: "99999-9999" },
    { id: 1, nome: "Maria Santos", email: "maria@gmail.com", idade: 28, telefone: "98888-8888" }
];

// Endpoint para obter pacientes
app.get("/pacientes", (req, res) => {
  
  res.json(pacientes);
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
  const novoPaciente = { nome, email, idade, telefone };
  pacientes.push(novoPaciente);
  res.status(201).json(novoPaciente);
  }
  );
  


// Inicia o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

