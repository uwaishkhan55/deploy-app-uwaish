const app=require('express')()
const PORT =  process.env.port || 4444
app.get('/',(req,res)=>
{
    res.send('hello World')
})
app.listen(PORT,()=>
{
    console.log('ruuning on====',PORT)
})