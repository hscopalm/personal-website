# Temporary readme until I can write this properly...
For now, just installation instructions for me ;)

1. Build the static page via astro
    `npm run build`
2. Remove all current files
    `aws s3 rm s3://www.harrisonpalmer.xyz/ --recursive`
3. Upload the `dist/` dir to s3
    `aws s3 cp dist/ s3://www.harrisonpalmer.xyz/ --recursive`