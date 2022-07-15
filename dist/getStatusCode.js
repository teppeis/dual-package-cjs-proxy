import got from "got";
export const getStatusCode = async (url) => {
    const res = await got(url);
    return res.statusCode;
};
