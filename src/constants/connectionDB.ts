import "reflect-metadata";
import { createConnection } from "typeorm";
import { dbOptions } from "./dbOptions";

export const connectionDB = async () => {
  try {
    const connection = await createConnection(dbOptions);
    return connection;
  } catch (error) {
    console.log("error MYSQL", error);
  }
};