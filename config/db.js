const Client = require ('mysql2/promise');

const client =  Client.createConnection({
    host :   'localhost',
    database : 'School',
    user : 'root',
    password : 'tonnykrane'
})

client.then ((err) => {
     
        console.log(`Database Running`);
    }).catch(()=>{
        console.log(`Error occured`);
    }) 
       
module.export = client;


module.exports = client;
