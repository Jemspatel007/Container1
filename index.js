const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');


const app = express();
app.use(express.json());
app.use('/', routes);
dotenv.config();

console.log("CICD Testing...")
console.log("Testing");
console.log("k8s Testing");
console.log("Pods Updating testing");
app.listen(6000, () => {
    console.log(`Listening on port ${6000}...!`);
});