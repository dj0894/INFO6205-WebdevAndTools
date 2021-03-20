# Demo using babel.js

Use below commands for setup
``npm init -y``
``npm install express``
``npm install --save-dev @babel/core @babel/cli ``
``npm install --save-dev @babel/preset-env core-js@3``

Configure babel.config.js to set the preset required for babel

Note: babel.config.js file should be in root directory of the file.

# Babel is transpiler converts new js file into older js  

    -File we developed and are input to babel will be put in src/ folder
    -Babel will output the files for use. We  will use public/ folder
    -src/ folder is not visible to browser because we defined in server.js to use public directory
    -src/ folder is used by babel so we are taking demo.js as input and getting output  into public directory. We are not applying babel on demo.css file so we kept it in public

# Use below command for setting babel output to public

``npx babel src --out-dir public``




