const path = require('path');
const fs = require('fs');
const axios = require('axios');

const container2_endpoint = process.env.container2_endpoint || "http://container2-service:6000/parser";
const FILE_DIRECTORY = process.env.FILE_DIRECTORY || "../";

console.log({container2_endpoint})

const fileExists = (pathOfFile) => fs.existsSync(pathOfFile);

const parseFile = async (file, product) => {
    try {
        const response = await axios.post(container2_endpoint, { file, product });
        return response.data;
    } catch (err) {
        console.log("Error:", err);
        throw err;
    }
};

const calculate = async (req, res) => {
    const { file, product } = req.body;

    console.log({file})
    
    if (!file) {
        return res.status(400).send({
            file: null,
            error: "Invalid JSON input."
        });
    }
    const pathOfFile = path.join(FILE_DIRECTORY, file);

    if (!fileExists(pathOfFile)) {
        return res.status(404).send({
            file,
            error: "File not found."
        });
    }
    try {
        const data = await parseFile(file, product);
        res.send(data);
    } catch (err) {
        res.status(500).send({ error: 'Error parsing file.' });
    }
};

module.exports = { calculate };