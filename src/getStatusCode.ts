import got from "got";

export const getStatusCode = async (url: string) => {
  const res = await got(url);
  return res.statusCode;
};
