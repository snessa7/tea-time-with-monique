#!/bin/bash

# Simple local server script for testing

echo "🚀 Starting Monique's Mind Blowers local server..."
echo "📍 Opening at http://localhost:8080"
echo "🛑 Press Ctrl+C to stop"
echo ""

# Open in browser automatically
open http://localhost:8080

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8080
# Check if Python 2 is available
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8080
else
    echo "❌ Python not found. Please install Python to run local server."
    echo "Alternative: Open index.html directly in your browser"
fi
