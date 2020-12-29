const express = require('express');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./document/home')


const app = express()

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/create-pdf',(req,res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('cv.pdf', (err) => {
        if(err){
            res.send(Promise.reject())
        }
        res.send(Promise.resolve())
    })
})

app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/cv.pdf`)
})


PORT =process.env.PORT || 4000

app.listen(PORT , console.log(`server started at ${PORT}`))