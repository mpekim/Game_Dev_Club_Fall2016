# Bash script to perform all commit steps in one go.

branch_name = "master"
echo "Preparing to update latest commit..."

git add .
echo "Files added."

git commit -m "Auto-commit via update.sh script."
echo "Files committed."

git pull origin $branch_name
git push origin $branch_name
echo "Auto-update successful."