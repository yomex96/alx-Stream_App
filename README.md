New! Keyboard shortcuts … Drive keyboard shortcuts have been updated to give you first-letters navigation
To successfully run this code on your browser or to start the development server follow the steps below:

1.  Make sure you have node already installed if not, download node from:
    https://nodejs.org/en/download/package-manager

2.  Install node on your device

3.  make sure you are in the project folder/directory:

        cd alx-Stream_App

4.  While in the root folder, initialize a node module with
    'npm init -y'

5.  install Node Package Manager (npm):

        i. npm install

       <!-- ii. npm create vite@latest . -->

6.  Install the following additional packages

    i. npm install express jsonwebtoken mongoose cookie-parser dotenv axios bcrypt

    ii. npm install nodemon -D

    iii. npm install bcryptjs


7. To be able to use the import expess from 'express' in the server.js file open the package.json file and  underneath    
        "keywords": [],
        "author": "",
        
        since we are using ESM not the default common JS, add 

        "type": "module",

8. create a script in the package.json file.
    Uderneath the "script" 

    i. replace 
    "test": "echo \"Error: no test specified\" && exit 1"

    with 

    "dev": "node backend/server.js"

    ii. replace
    "main": "index.js" 

    with

    "main": "backend/server.js"

    since the name of the name of the server file is server.js located in the 'backend' folder

9.  Start the development Server:

        npm run dev


Contributors are
1. Benjamin Richard 
2. Elizabeth
