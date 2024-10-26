
Sentiment Analysis with Voice Input
This project is a Sentiment Analysis Web Application enhanced with a Voice-to-Text Feature. It allows users to input text manually or use their voice to record text, which is then analyzed for sentiment (positive, neutral, or negative) using a pre-trained BERT model.

Features
Voice Input: A microphone icon next to the input box allows users to click and speak. The spoken words are transcribed to text and displayed in the text area.
Sentiment Analysis: The app sends the input text to a backend server, where a BERT-based model analyzes the sentiment of the text.
User-Friendly Interface: Clean and modern design with a gradient background, a card-based form layout, and dynamic response display.
Technologies Used
Frontend
React: The frontend is built using React for component-based UI and dynamic rendering.
Web Speech API: Used for voice recognition to capture and convert voice input into text.
Backend
Flask: A Flask server handles requests from the frontend.
Transformers Library (Hugging Face): For sentiment analysis, the app uses a pre-trained BERT-based model, specifically bertweet-base-sentiment-analysis, to analyze the text sentiment.
CORS: Used to handle cross-origin requests between the frontend and backend.
How to Run the Project
Prerequisites
Node.js and npm (for frontend)
Python and pip (for backend)
Git (for repository management)
