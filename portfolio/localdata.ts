import fsPromises from 'fs/promises';
import path from 'path'

export async function getProjects() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'app/data/projects.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData.toString());

  return objectData
}

export async function getOtherProjects() {
    // Get the path of the json file
    const filePath = path.join(process.cwd(), 'app/data/otherprojects.json');
    // Read the json file
    const jsonData = await fsPromises.readFile(filePath);
    // Parse data as json
    const objectData = JSON.parse(jsonData.toString());
  
    return objectData
  }