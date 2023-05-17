import app from './src/app.js'

const port = 3000;
//const port = process.env.PORT || 3000;
 

app.listen(port, () =>{
    console.log(`Server is running in url http://localhost:${port}`);

    })