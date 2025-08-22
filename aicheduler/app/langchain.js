import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // <--- add this
import { ChatOpenAI } from "@langchain/openai";

dotenv.config();
const app = express();

// Allow requests from your frontend origin
/*
app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "http://127.0.0.1:5502",
  ]
}));
*/
app.use(cors());
app.use(express.json());

//const response = await llm.invoke("You are an AI scheduler that gives back specific inputs based on user preferences with how they want to add items into their schedule. For example, if someone inputted, '-I want to go to the gym once a week in the morning\n-I want to spend and hour a day applying to jobs', you should respond in this format: '[[Gym/Workout, Friday, 9 - 10 am], [Apply to Jobs, Everyday, 9 - 10 pm]]', so [Subject, Days of the Week, Time of day]. Remember that you need to pick what day of the week and time of day you believe is most optimal for the average human. The input you have to schedule: '-I want to spend one hour per week meditating\nI want to spend an hour a day doing my Math Homework'");

app.get("/chat", (req, res) => {
  res.send("Chat endpoint live. Use POST requests to interact.");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No message provided" });
    }

    const model = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.7
    });

    // ✅ Pass a string, not an object
    const response = await model.predict(message);

    res.json({ reply: response });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
