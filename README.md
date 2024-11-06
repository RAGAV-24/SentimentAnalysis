
## Sentiment Analysis with Voice Input

This project is a Sentiment Analysis Web Application with Voice-to-Text functionality. Users can input text manually or via voice, which is then analyzed for sentiment (positive, neutral, or negative) using a pre-trained BERT model from Hugging Face.

### Features

- **Voice Input**: Click the microphone icon to speak, and your words will be transcribed to text.
- **Sentiment Analysis**: The backend uses a BERT-based model (`bertweet-base-sentiment-analysis`) from Hugging Face to analyze text sentiment.
- **User-Friendly Interface**: A clean, modern design with gradient backgrounds and card-based layouts for a smooth user experience.

### Technologies Used

#### Frontend

- **React**: Component-based, dynamic rendering.
- **Web Speech API**: Captures and converts spoken input to text.

#### Backend

- **Flask**: Manages requests and responses.
- **Transformers Library (Hugging Face)**: Utilizes `bertweet-base-sentiment-analysis` for text sentiment analysis.
- **CORS**: Handles cross-origin requests.

### How to Run the Project

#### Prerequisites

Ensure you have the following installed:

- **Node.js** and **npm** (for frontend)
- **Python** and **pip** (for backend)
- **Git** (for repository management)

#### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Backend Setup**:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Start the Flask server:
     ```bash
     python app.py
     ```

3. **Frontend Setup**:
   - Open a new terminal and navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install Node.js dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Run the Application**:
   - Open your browser and go to `http://localhost:5173` to access the app.
