# Remove previous package archive if exists
echo "cleanup previous package archive...";
prevPkgV=$(npm version | grep "'@my-stencil-project/my-stencil-project': " | cut -d "'" -f 4);
{ rm "./angular/my-stencil-project-my-stencil-project-$prevPkgV.tgz" || true; } >/dev/null 2>&1;
printf "done!\n"

# Backup app.component.html
if [ -e "./angular/testApp/src/app/app.component.html" ]; then
    testingIndexContent=$(cat ./angular/testApp/src/app/app.component.html);
else
    testingIndexContent='';
fi

#clean install
#rm -rf node_modules
#npm install

# Create local package
npm run build.local;

# Move local package to angular directory
pkgV=$(npm version | grep "'@my-stencil-project/my-stencil-project': " | cut -d "'" -f 4);
mv "my-stencil-project-my-stencil-project-$pkgV.tgz" angular;

# Build angular wrappers with new version numbers etc
cd angular || return;
npm version prerelease --git-tag-version false
npm pkg set dependencies."@my-stencil-project/my-stencil-project"="./my-stencil-project-my-stencil-project-$pkgV.tgz"
#clean install
rm -rf node_modules
npm install
npm run build.local;

# Move angular package to AngularProjectDemo
pkgNgV=$(npm version | grep "'@my-stencil-project/my-stencil-project-angular': " | cut -d "'" -f 4);
mv "my-stencil-project-my-stencil-project-angular-$pkgNgV.tgz" ../AngularProjectDemo;
cd ../AngularProjectDemo || return;

npm version prerelease --git-tag-version false
npm pkg set dependencies."@my-stencil-project/my-stencil-project-angular"="./my-stencil-project-my-stencil-project-angular-$pkgNgV.tgz"
rm node_modules
npm install
