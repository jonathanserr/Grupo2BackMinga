import { Schema, model } from 'mongoose';

const collection = 'chapters';

const schema = new Schema({
    manga_id: { type: Schema.Types.ObjectId, ref: 'mangas', required: true },
    title: { type: String, required: true },
    pages: [{ type: String, required: true }],
    order: { type: Number, required: true }
}, {
    timestamps: true
});

const Chapter = model(collection, schema);
export default Chapter;
