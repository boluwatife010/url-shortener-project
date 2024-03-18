// Importing all the necessary modules required for servicing
import { shortUrlRequestBody } from "../interfaces/urlinterface";
import { urlModel } from "../models/urlmodel";
import shortid from 'shortid';
// Service function to shorten a url
export const shortenUrl = async (body: shortUrlRequestBody): Promise<any> => {
    const {originalUrl} = body;
    if (!originalUrl) {
        throw new Error ('Please provide a valid url.');
    }
    const shorts = shortid.generate()
    const shortened =await urlModel.create({originalUrl, shortUrl:shorts});
    if (!shortened) {
        throw new Error ('Could not generate url')
    }
    // await shortened.save();
    return shortened;
}
// Service function to get the original url
export const original = async (shortUrl:string) => {
    const aUrl = await urlModel.findOne({shortUrl});
    if (!aUrl) {
        throw new Error ('Url not found');
    }
    return aUrl.originalUrl;
}