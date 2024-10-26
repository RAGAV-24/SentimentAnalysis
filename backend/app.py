from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
from flask_cors import CORS
app = Flask(__name__)
CORS(app) 
# Load the model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("finiteautomata/bertweet-base-sentiment-analysis")
model = AutoModelForSequenceClassification.from_pretrained("finiteautomata/bertweet-base-sentiment-analysis")

# Define the sentiment analysis function
def analyze_sentiment(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=512)
    outputs = model(**inputs)
    probabilities = torch.softmax(outputs.logits, dim=1)
    labels = ["negative", "neutral", "positive"]
    confidence, label = torch.max(probabilities, dim=1)
    sentiment = labels[label]
    return {
        "sentiment": sentiment,
        "confidence": confidence.item()
    }

# Define a route for sentiment analysis
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get("text", "")
    result = analyze_sentiment(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
