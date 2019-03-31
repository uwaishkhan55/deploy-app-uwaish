const app=require('express')()
app.get('/',(req,res)=>
{
    res.send('hello World')
})

app.get('/hi',(req,res)=>
{
    res.send('good bye')
})
app.listen(process.env.PORT)