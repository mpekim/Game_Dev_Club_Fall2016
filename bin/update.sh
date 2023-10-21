echo "Preparing to update latest commit..."
git add .
echo "Files added."
git commit -m "Auto-commit via update.sh script."
echo "Files committed."
git pull origin master
git push origin master