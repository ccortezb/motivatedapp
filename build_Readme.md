# MotivatedApp

MotivatedApp is a simple React application that provides daily motivational messages based on the user's age range.

## Build and Deployment

### 1. Build the Application

To build the application, we use a script named `build.sh`. This script automates the process of compiling the application, running tests, and creating a deployable package.

### 2. `build.sh` Explanation

The updated `build.sh` script consists of the following commands:

```bash
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

# Clean up the temporary directory
rm -rf deployable-package



Certainly! Here's the updated README.md with the modified build.sh script:

markdown
Copy code
# MotivatedApp

MotivatedApp is a simple React application that provides daily motivational messages based on the user's age range.

## Build and Deployment

### 1. Build the Application

To build the application, we use a script named `build.sh`. This script automates the process of compiling the application, running tests, and creating a deployable package.

### 2. `build.sh` Explanation

The updated `build.sh` script consists of the following commands:

```bash
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

# Clean up the temporary directory
rm -rf deployable-package
#!/bin/bash: This line specifies that the script should be interpreted and executed using the Bash shell.

# Details of every command used here:

echo "Building Carlos Cortez MotivatedApp...": 
This line prints a customized message to the console indicating that the build process is starting.

npm install: This command installs all project dependencies defined in the package.json file.

npm test: This command runs 5 Jest tests for the application to ensure the code's integrity.

npm run build: This command builds the React application, generating static files in the 'build' directory.

echo "Motivated app - Build complete!": This line prints a message to the console indicating that the build process has successfully completed.

The subsequent lines handle the creation of a deployable package in the form of a ZIP file (MotivatedAppDeployablePackage.zip). This package can be uploaded to any storage cloud service like AWS S3.