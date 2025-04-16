import express from 'express';
 import knex from "knex";
 const app = express()
 app.use(express.json());
 const port = 3006
 
 const mysql2 = knex({
     client: 'mysql2',
     connection: {
       host: '127.0.0.1',
       port: 3306,
       user: 'root',
       password: 'senacrs',
       database: 'mounted_style',
     }
   });
 
   app.get("/", (req, res) => {
    res.send("Project API is running");
  });


  app.get("/funcionarios", async (req, res) => {
    try {
    const funcionarios = await mysql2.select("*").from("funcionarios");
    res.json(funcionarios);
    } catch (error) {
  console.log("Erro ao buscar funcionário:", error);
  res.status(404).json({ mensagem: "Funcionário não encontrado" });
  }
  });

    app.post('/funcionarios', async (req, res) => {
    const { imagem, nome_completo, nascimento, e_mail, cargo, telefone, senha_id} = req.body;
    await mysql2("funcionarios").insert({imagem, nome_completo, nascimento, e_mail, cargo, telefone, senha_id});
    console.log('Funcionário cadastrado:', {imagem, nome_completo, nascimento, e_mail, cargo, telefone, senha_id});
    res.status(201).json({ mensagem: 'Funcionário cadastrado com sucesso' });
});


  app.get("/clientes", async (req, res) => {
    try {
    const clientes = await mysql2.select("*").from("clientes");
    res.json(clientes);
    } catch (error) {
      console.log("Erro ao buscar cliente", error);
      res.status(404).json({ mensagem: 'Cliente não encontrado'});
  }
  });


app.post('/clientes', async (req, res) => {
    const { imagem, nome, e_mail, telefone, senha_id } = req.body;
    await mysql2("clientes").insert({imagem, nome, e_mail, telefone, senha_id});
    console.log('Cliente cadastrado:', { imagem, nome, e_mail, telefone, senha_id});
    res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso' });
});

  
  app.get("/tipo", async (req, res) => {
    try {
    const tipo = await mysql2.select("*").from("tipo");
    res.json(tipo);
    } catch (error) {
      console.log("Erro ao buscar tipo", error);
      res.status(404).json({mensagem: 'Tipo não encontrado'});
  }
  });


  app.get("/bike_Montada", async (req, res) => {
    try {
    const bike_Montada = await mysql2.select("*").from("bike_Montada");
    res.json(bike_Montada);
    } catch (error) {
      console.log("Erro ao buscar Bike montada", error);
      res.status(404).json({mensagem: 'Bike montada não encontrada'});
  }
  });


app.get("/Quadro", async (req, res) => {
  try {
  const Quadro = await mysql2.select("*").from("Quadro");
  res.json(Quadro);
  } catch (error) {
    console.log("Erro ao buscar quadro", error);
    res.status(404).json({mensagem: 'Quadro não encontrado'});
}
});


app.get("/acessorios", async (req, res) => {
  try {
  const acessorios = await mysql2.select("*").from("acessorios");
  res.json(acessorios);
  } catch (error) {
    console.log("Erro ao buscar acessório", error);
    res.status(404).json({mensagem: 'Acessório não encontrado'});
}
});


app.get("/personalizada", async (req, res) => {
  try {
  const personalizada = await mysql2.select("*").from("personalizada");
  res.json(personalizada);
  } catch (error) {
    console.log("Erro ao buscar Bike personalizada", error);
    res.status(404).json({mensagem: 'Bike personalizada não encontrada'});
}
});


app.get("/pedido", async (req, res)  => {
try {
const pedido = await mysql2.select("*").from("personalizada");
res.json(pedido);
} catch (error) {
  console.log("Erro ao buscar pedido", error);
  res.status(404).json({mensagem: 'Pedido não encontrado'})
}
});


app.get("/historico_compras", async (req, res)  => {
  try {
  const historico_compras = await mysql2.select("*").from("historico_compras");
  res.json(historico_compras);
  } catch (error) {
    console.log("Erro ao buscar histórico de compras", error);
    res.status(404).json({mensagem: 'Histórico não encontrado'});
  }
  });


app.listen(port, () => {
  console.log(App de exemplo está rodando na porta ${port});
});