const express = require("express");
require("dotenv").config();
const { OpenAI } = require("openai");

const app = express();

app.use(express.json());

// const configuration = new Configuration({
//   apiKey: "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",
// });

const openai = new OpenAI({
    apiKey: `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`,
})

// module.exports = async (req, res) => {
//   try {
//   } catch (error) {}
// };

const axios = require("axios");

// Replace 'YOUR_API_KEY' with your OpenAI API key.
const apiKey = `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`;
const endpoint = "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions";

// Function to send a message to ChatGPT and identify named entities.
async function chatWithGPT(message) {
  try {
    const response = await axios.post(
      endpoint,
      {
        prompt: message,
        max_tokens: 5, // Adjust the max_tokens as needed for the desired response length.
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const generatedText = response.data.choices[0].text;

    // Extract named entities (e.g., persons, organizations, etc.) from the generated text.
    const namedEntities = extractNamedEntities(generatedText);

    // Convert named entities to JSON format.
    const jsonOutput = {
      input_message: message,
      generated_text: generatedText,
      named_entities: namedEntities,
    };

    return jsonOutput;
  } catch (error) {
    console.error("Error sending message to ChatGPT:", error);
    throw error;
  }
}

module.exports.Complexity = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      prompt: `
                ${prompt}
        
                analyze it
                ###
              `,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });

    return res.status(200).json({
      success: true,
      data: response.data.choices[0].text,
    });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

// Function to extract named entities from the generated text.
function extractNamedEntities(text) {
  // Implement your named entity extraction logic here.
  // You can use libraries like NER (Named Entity Recognition) or regular expressions.
  // This example demonstrates a simple regular expression-based approach.
  const namedEntityRegex = /(\b[A-Z][a-z]+(\s[A-Z][a-z]+)?\b)/g;
  const matches = text.match(namedEntityRegex);

  if (matches) {
    return matches;
  } else {
    return [];
  }
}

// Controller function to handle POST requests
module.exports.processMessage = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await chatWithGPT(message);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
