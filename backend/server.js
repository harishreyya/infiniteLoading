const express = require("express");
const mongoose = require("mongoose")


const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/loading",{
        // useCreateIndex:true,
        // useFindAndModify:false,
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
  };

  const app = express()
  app.use(express.json())

const contentSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      desc: { type: String, required: true },
      video: { type: String, required: true }
    }
  );

const Content = mongoose.model("content",contentSchema)

app.get('/contents', async (req,res) =>{
    const contents = await Content.find().lean().exec()
    res.send(contents)
})

app.post('/contents', async (req,res) =>{
    const contents = await Content.create(req.body)
    res.status(201).json({contents})
})

app.listen(8000, async ()=>{
    await connect()
    console.log("listing on port 8000")
})