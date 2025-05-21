import { Schema, model } from 'mongoose';

const collection = 'favorites';

const schema = new Schema({
    manga_id: { type: Schema.Types.ObjectId, ref: 'mangas', required: true },
    author_id: { type: Schema.Types.ObjectId, ref: 'authors' },
    company_id: { type: Schema.Types.ObjectId, ref: 'companies' }
}, {
    timestamps: true
});

const Favorite = model(collection, schema);
export default Favorite;