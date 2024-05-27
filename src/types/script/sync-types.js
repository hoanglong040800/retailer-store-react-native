const fs = require('fs').promises; // Use promises for asynchronous operations
const path = require('path');

const backendPath = `${__dirname}/../../../../backend/src/db`;
const desPath = `${__dirname}/../`;

const dtoPath = {
  src: path.resolve(backendPath, 'dto'),
  des: path.resolve(desPath, 'dto'),
};

const inputPath = {
  src: path.resolve(backendPath, 'input'),
  des: path.resolve(desPath, 'input'),
};

const interfacePath = {
  src: path.resolve(backendPath, 'interface'),
  des: path.resolve(desPath, 'interface'),
};

async function copyFolder(source, destination) {
  try {
    await fs.mkdir(destination, { recursive: true }); // Create destination folder if it doesn't exist

    const entries = await fs.readdir(source);

    for (const entry of entries) {
      const sourceItemPath = path.join(source, entry);
      const destinationItemPath = path.join(destination, entry);

      const stats = await fs.stat(sourceItemPath);

      if (stats.isDirectory()) {
        await copyFolder(sourceItemPath, destinationItemPath); // Recursively copy subdirectories
      } else {
        await fs.copyFile(sourceItemPath, destinationItemPath);
      }
    }

    console.log(`Copied folder ${source} to ${destination}`);
  } catch (error) {
    console.error('Error copying folder:', error);
  }
}

copyFolder(dtoPath.src, dtoPath.des);
copyFolder(inputPath.src, inputPath.des);
copyFolder(interfacePath.src, interfacePath.des);
