const fs = require('node:fs');
const path = require('node:path');

function getJsonFiles(dirPath) {
    // Read all files and folders recursively
    const files = fs.readdirSync(dirPath, { recursive: true });

    // Filter out only files ending with '.json' and turn them into full paths
    return files
        .filter(file => path.extname(file) === '.json')
        .map(file => path.join(dirPath, file));
};

export default getJsonFiles;