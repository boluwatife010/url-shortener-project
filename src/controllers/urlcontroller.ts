import express from 'express';
import { shortenUrl, original } from '../services/urlservices';
// A function to handle the shorteneing of url
export const createUrlHandler = async (req: express.Request, res: express.Response) => {
    const {originalUrl} = req.body
    try {
        if (!originalUrl) {
            return res.status(400).send({message: 'Please provide a url'})
        }
        const { shortUrl } = await shortenUrl({ originalUrl});
        if (!shortUrl) {
            return res.status(400).send({ message: 'Could not generate a shorter URL' });
        }
        return res.status(200).send({ shortUrl });
    }
    catch (err) {
        console.log(err, 'invalid err');
        return res.status(500).send({message: 'Internal server error.'})
    }
}
// A fiunction to get the original url
export const getOriginalUrlHandler = async (req: express.Request, res: express.Response) => {
    const {shortUrl} = req.params;
    try {
        const originalUrl = await original(shortUrl)
        if (originalUrl) {
            return res.send(originalUrl);
          } else {
            return res.status(400).send({message: 'Could not get the original url.'})
          }
      
    }
    catch (err) {
        console.log(err, 'invalid err');
        return res.status(500).send({message: 'Internal server error.'})
    }
}