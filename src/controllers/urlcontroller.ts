import express from 'express';
import { shortenUrl, original } from '../services/urlservices';
// A function to handle the shorteneing of url
export const createUrlHandler = async (req: express.Request, res: express.Response) => {
    const {originalUrl} = req.body
    try {
        if (!originalUrl) {
            return res.status(400).send({message: 'Please provide a url'})
        }
        const creating = await shortenUrl({
            originalUrl,
            shortUrl: ''
        })
        if (!creating) {
            return res.status(400).send({message: 'Could not generate a shorter url'})
        }
        return res.status(200).send({message: 'Successfully genedrated a short id.'})
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
        if (shortUrl) {
            return res.redirect(originalUrl);
          } else {
            return res.status(400).send({message: 'Could not get the original url.'})
          }
    }
    catch (err) {
        console.log(err, 'invalid err');
        return res.status(500).send({message: 'Internal server error.'})
    }
}