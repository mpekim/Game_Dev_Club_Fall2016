# Bash Script for building Docker container.
echo "Building Docker container..."
docker build -t game_dev .
docker run --name game_dev game_dev