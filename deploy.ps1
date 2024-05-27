<#
This script builds the static site with astro and uploads it to an s3 bucket (after clearing)

This script is intended to be run from the root of the project directory on the main branch 

Requirements:
    AWS cli to be installed and configured w/ credentials
    npm
    astro
#>

# 1. Build the static page via astro
npm run build

# 2. Remove all current files
aws s3 rm s3://www.harrisonpalmer.xyz/ --recursive

# 3. Upload the `dist/` dir to s3
aws s3 cp dist/ s3://www.harrisonpalmer.xyz/ --recursive
