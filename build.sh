#!/bin/bash

echo "Building Carlos Cortez MotivatedApp..."

# Install all dependencies
npm install

# Run 5 Jest tests
npm test

# Build the motivatedapp
npm run build

echo "Motivated app - Build complete!"

# Create a deployable package - ZIP File to upload to any storage cloud service like aws s3

# Create a directory to hold the deployable package
mkdir deployable-package

# Copy the build artifacts to the deployable package directory
cp -r build/* deployable-package/

# Zip the deployable package
zip -r MotivatedAppDeployablePackage.zip deployable-package/
ls -l
# Clean up the temporary directory
rm -rf deployable-package
