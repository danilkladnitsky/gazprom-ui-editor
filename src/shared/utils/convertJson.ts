export const convertFileToJSON = (file: File): Promise<JsonFile> => {
  return new Promise((resolve, reject) => {
    try {
      const fileReader = new FileReader();

      fileReader.readAsText(file, "UTF-8");

      fileReader.onload = (e) => resolve(JSON.parse(e.target?.result));
    } catch (err) {
      reject(err);
    }
  });
};
