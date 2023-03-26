const fs = require('fs');
function extractGitUrls(text) {
    const regex = /https:\/\/github\.com\/[\w-]+\/([\w-]+)\.git/g;
    const matches = text.matchAll(regex);
    const repositoryNames = [];
  
    for (const match of matches) {
      repositoryNames.push(match[1]);
    }
  
    return repositoryNames;
  }

const string = `git config --global user.name = "*username*"
git config --global user.email = "*useremail*"
git remote remove origin

git add .

git commit -m main

git remote add origin https://github.com/*username*/*reponame*

git filter-branch --env-filter '
NEW_NAME="*username*"
NEW_EMAIL="*useremail*"
if [ "$GIT_COMMITTER_EMAIL" != "$NEW_EMAIL" ]
then
export GIT_COMMITTER_NAME="$NEW_NAME"
    export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" != "$NEW_EMAIL" ]
then
export GIT_AUTHOR_NAME="$NEW_NAME"
    export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

git push --all

git branch -M main

git remote set-url origin https://*username*@github.com/*username*/*reponame*.git

git push --all`
fs.readFile('download.bat', 'utf8', async (err, fileContent) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  
    const gitUrls = extractGitUrls(fileContent);
    console.log(process.argv.slice(2)[0]);

    await Promise.all(await gitUrls.map(async (item) => {
        let temp = string.replaceAll('*username*', process.argv.slice(2)[0]);
        temp = temp.replaceAll('*useremail*', process.argv.slice(2)[1]);
        temp = temp.replaceAll('*reponame*', item);
        fs.writeFile(item+".txt", temp, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
              } else {
                console.log(item + 'File written successfully.');
              }
        })
    }))
  });