# Hart + Vaughn Website

The website (https://hartandvaughn.com) is deployed to CloudFlare pages. Pushing a change to the repository will cause CloudFlare to automatically redeploy the site with the new changes made to the code base.

## Development

	npm run build

Runs the SASS compiler creating the stylesheet & packs the javascript using Webpack.


	npm run deploy

Compiles & packs the files in production mode optimizing the files for production.