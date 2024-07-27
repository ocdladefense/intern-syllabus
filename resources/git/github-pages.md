
## STEPS TO BUILD AND DEPLOY TO GITHUB PAGES
1. Create .nojekyll file.
2. Setup Webpack to include it on build (npm run build in this case).
3. Create .gitHub folder with deploy.yml file.
4. Push new repository / commits to GitHub and main branch.
5. Create new gh-pages branch.
6. State new gh-pages branch as GitHub Pages workflow destination in repository settings on GitHub.
7. Generate new authorization token (classic or fine-grained).
8. Setup GitHub secret(s) in repository settings on GitHub using our token. (edited) 