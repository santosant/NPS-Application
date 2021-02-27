import express, { response } from 'express';

const app = express();

app.listen(3333, () => console.log("🚀🚀Server is running!"));

//http://localhost3333/users
app.get('/', (request, response) => {
    return response.json({ message: "🚀 Testing API Response"})
});

app.post('/', (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!" })
})

app.put ('/', (request, response) => {
    return response.json({ message: "Dados inseridos com sucesso!" })
})
