#!/bin/bash

echo -e "Deploying updates to GitHub..."

npm run build
cp CNAME public/
rm -rf public/education public/projects public/work public/tags
rm public/sitemap.xml public/index.xml

git add -A
git commit -m "deploy site `date`"
git push origin master
git subtree push --prefix=public git@github.com:thearrow/jakeklingler.com.git gh-pages
