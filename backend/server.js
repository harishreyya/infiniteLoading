const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

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
  app.use(cors())

const contentSchema = new mongoose.Schema(
    {
      serial:{type: Number, required: true},
      title: { type: String, required: true },
      desc: { type: String, required: true },
      video: { type: String, required: true }
    }
  );

const Content = mongoose.model("content",contentSchema)

app.get('/contents', async (req,res) =>{
  const { page = 1, limit = 10 } = req.query;
    const contents = await Content.find({}).skip((page - 1) * limit)
    .limit(Number(limit)).lean().exec()
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