import mongoose from "mongoose";
const Schema = mongoose.Schema;
const urlShortenerSchema = new Schema ({
    originalUrl: {
         type: String,
         required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    }
})
export const urlModel = mongoose.model('Shorturl', urlShortenerSchema);