export const convertFileToJSON = <T>(file: File): Promise<T> => {
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
