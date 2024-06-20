import content from "../model/contentList.js";
import connection from "../db/index.js";

export const storeCollection = async () => {
  try {
    await connection;
    const totalCollection = [];
    await content.create(totalCollection);
    console.log("Movies uploaded to db");
  } catch (err) {
    throw err;
  }
};
storeCollection();
