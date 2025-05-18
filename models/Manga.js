import { Schema, model } from 'mongoose';

const collection = 'mangas';

const schema = new Schema({
    author_id: { type: Schema.Types.ObjectId, ref: 'authors', },
    company_id: { type: Schema.Types.ObjectId, ref: 'companies' },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'categories', required: true }
}, {
    timestamps: true
});

const Manga = model(collection, schema);
export default Manga;
