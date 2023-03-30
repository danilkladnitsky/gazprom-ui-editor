import { v4 as uuidv4 } from "uuid";

export const generateIds = <T extends UnknownPayload>(data: T[]) => {
  return data.map((item) => ({ ...item, id: uuidv4() }));
};

export const generateEntityId = () => {
  return uuidv4();
};
