import React, { useState } from 'react';
import axios from 'axios';

const SentimentAnalyzer = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [listening, setListening] = useState(false);

    // Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    // Start listening for voice input
    const handleMicClick = () => {
        if (listening) {
            recognition.stop();
            setListening(false);
        } else {
            recognition.start();
            setListening(true);
        }
    };

    // Handle voice input results
    recognition.onresult = (event) => {
        const voiceText = event.results[0][0].transcript;
        setText((prevText) => prevText + ' ' + voiceText); // Append voice input to existing text
        setListening(false);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setListening(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/analyze', { text });
            setResult(response.data);
        } catch (error) {
            console.error('Error analyzing sentiment:', error);
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #4e54c8, #8f94fb)',
            color: '#fff',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '400px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Sentiment Analysis</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ position: 'relative' }}>
                        <textarea
                            rows="2"
                            cols="40"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter text to analyze sentiment..."
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: 'none',
                                outline: 'none',
                                resize: 'none',
                                fontSize: '16px',
                                maxHeight:'80px',
                            }}
                        />
                        {/* Microphone Icon */}
                        <button
                            type="button"
                            onClick={handleMicClick}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '10px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '20px',
                                color: listening ? '#ff5c5c' : '#fff',
                            }}
                            title={listening ? "Stop Listening" : "Start Listening"}
                        >
                            🎤
                        </button>
                    </div>
                    <br />
                    <button type="submit" style={{
                        marginTop: '15px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: '#6c63ff',
                        color: '#fff'
                    }}>Analyze</button>
                </form>
                {result && (
                    <div style={{ marginTop: '20px', fontSize: '18px' }}>
                        <h2>Result:</h2>
                        <p>Sentiment: {result.sentiment}</p>
                        <p>Confidence: {result.confidence.toFixed(2)}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SentimentAnalyzer;
