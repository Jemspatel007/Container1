const path = require('path');
const fs = require('fs');

const FILE_DIRECTORY = process.env.directory || "../";

const storeFile = (req, res) => {
    console.log({FILE_DIRECTORY})
    const { file, data } = req.body;

    if (!file) {
        return res.status(400).send({
            file: null,
            error: "Invalid JSON input."
        });
    }

    const pathToCreateFile = path.join(FILE_DIRECTORY, file);

    fs.writeFile(pathToCreateFile, data, 'utf-8', (error) => {
        if (error) {
            return res.status(500).send({
                file,
                error: "Error while storing the file to the storage."
            });
        } else {
            return res.status(200).send({
                file,
                message: "Success."
            });
        }
    });
};

module.exports = { storeFile };