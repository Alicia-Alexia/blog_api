    const express = require('express');
    const mongoose = require('mongoose');
    const postsRoutes = require('./routes/posts');
    const URL = process.env.URL

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Middleware para processar JSON
    app.use(express.json());

    // Conexão com o banco de dados
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Conectado ao MongoDB'))
      .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

    // Rotas
    app.use('/api/posts', postsRoutes);

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });