const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/api/questions",(req,res)=>{

res.json([

{
question:"Which language runs in browser?",
options:["Python","Java","C","JavaScript"],
answer:"JavaScript"
},

{
question:"What does CSS stand for?",
options:[
"Central Style Sheets",
"Cascading Style Sheets",
"Computer Style Sheets",
"Creative Style System"
],
answer:"Cascading Style Sheets"
},

{
question:"Which is backend runtime?",
options:["Node.js","HTML","CSS","Bootstrap"],
answer:"Node.js"
}

])

})

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000")
})