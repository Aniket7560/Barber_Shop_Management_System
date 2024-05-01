const express = require('express');
const app = express();

// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:5173',
// }));


app.get('/test', (req, res) => {
    res.send("Hello world!");
});


const server = app.listen(4040);


// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });