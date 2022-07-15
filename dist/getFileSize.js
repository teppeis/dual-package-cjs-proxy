import { stat } from "node:fs/promises";
export const getFileSize = async (path) => {
    const { size } = await stat(path);
    return size;
};
