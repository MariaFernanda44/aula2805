const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('viewa', './views');

    app.get('/', (request, response) => {
        let resultado = [0, 1];
        for(let cont = 2; cont <= 20; cont++)
    })
app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});