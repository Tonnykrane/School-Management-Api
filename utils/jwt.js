const jwt = require("jsonwebtoken");


const secretKey = "you are my bitch"

function generateToken(payload) {
    const generatedToken = jwt.sign(payload,secretKey,)
    return generatedToken;
 
}
async function verifyToken(token){
    try {
        let decoded = await jwt.verify(token,secretKey)
        return decoded
    } catch (error) {
        throw new Error ("Invalid Token")
    }
}
let token = generateToken({
     name : "Tonnykrane",
      email : "omotolamicheal99@gmail.com"
})

verifyToken(token)
.then((decoded)=>{
    console.log(token);
    console.log(decoded);
}).catch((error)=>{
    console.log(error.message);
})



