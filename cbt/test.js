var axios = require('axios');
async function register(){
    
    await login()
    await axios
    .post('http://192.168.43.19:5000/api/questions/add', {
        userId: "622c6277a6c52e1fb03c0e2e", 
        quest: "Who are you?", 
        opts: [
            {id: 0, opt: "password"},
            {id: 1, opt: "passord"},
            {id: 2, opt: "paword"},
            {id: 3, opt: "psword"},
        ],
        ans: 2
    })
    .then((doc)=>{
        console.log(doc)
    })
    .catch((err)=>{
        console.log(err);
    })
}
async function login(){
    await axios.post('http://192.168.43.19:5000/api/users/login', {
        email: "olasadisam@man.co", 
        password:"password"
    })
    .then((dox)=>{
        console.log(dox);
    }).catch((err)=>{
        console.log(err);
    })
}

register()