import { ChangeEvent, useState } from "react";

import { convertFileToJSON } from "shared/utils/convertJson";

type Callback<T> = (data: T) => void;

export const useUploadFile = <T,>(callback?: Callback<T>) => {
  const [file, setFile] = useState<File | null>();

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    setFile(file);
    e.target.value = null;

    if (callback) {
      const convertedToJson = await convertFileToJSON<T>(file);
      callback?.(convertedToJson);
    }
  };

  return [file, uploadFile];
};
