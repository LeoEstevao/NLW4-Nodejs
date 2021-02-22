import express from 'express';

const app = express();


app.get("/", (req, res) => {
    return res.send("Rota Get Acessada com sucesso")
})
app.post('/', (req, res) => {
    return res.send("Rota Post Acessada com sucesso")
    
})

app.listen(3000, () => {
    console.log("Server ir running!")
});