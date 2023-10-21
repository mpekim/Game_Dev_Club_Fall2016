# Find out better way to make status script.
run_status() {
    echo "Checking status of containers and images..."
    docker ps -a
    docker images
}

echo "Creating test file..."
touch "./bin/test.php"

run_status