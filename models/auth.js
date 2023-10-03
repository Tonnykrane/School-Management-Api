const db = require("../config/db")
async function checkUser(username) {
    const query =`
    SELECT * FROM ${role}
    WHERE username = $1`

    const {rows} = await db.query(query, [username])
    return rows[0];

}
async function register(payload){
    const [username,password,role] = payload; 
    const query=`insert into ${role}(username, password, role)
    values ($1, $2, $3)
    returning *
    `

    try {
        const user = await checkUser(username, role);
        console.log("USER",user)
        if (user){
            return false;
        }

        else if (role === "admin") {
         

            const values = [username, password, role];
            const result = await db.query(query, values)
            return result
        } else if (role === "teacher") {


            const values =[username, password, role]
            const result = await db.query(query, values)
            return result
        }else if (role === 'student'){
            const values = [username, password, role]
            const result = (await db).query(query, values)
            return result
        }
        else {
            return 'INVALID ROLE'
        } 
    } catch (error) {
        throw Error(error.message)
    }
}


const login = async (payload) => {
    const {username, password, role} = payload;
    const query = `
    select from ${role} 
    where username = $1 and password = $2`;

    try {
        if (role == "admin") {
            const values = [ username, password]
            const {rows} = await db.query(query,values);
            return rows;
        }else if ( role == "teacher"){
            const values =[ username , password]
            const {rows} =(await db).query(query, values)
            return rows;
            
        }else if  (role =="student"){
            const values = [username, password]
            const{rows}= await db.query(query, values)
            return rows;
        }else {
            throw error ("Invalid Username or Passowrd")
        }
    } catch (error) {
        console.log(error.message)
    }
}


















module.exports = {
    register
}



