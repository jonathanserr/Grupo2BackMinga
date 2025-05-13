import { Schema, model } from 'mongoose';

const collection = 'reactions';

const schema = new Schema({
    manga_id: { type: Schema.Types.ObjectId, ref: 'mangas', required: true },
    chapter_id: { type: Schema.Types.ObjectId, ref: 'chapters' },
    author_id: { type: Schema.Types.ObjectId, ref: 'authors' },
    company_id: { type: Schema.Types.ObjectId, ref: 'companies' },
    reaction: { type: String, required: true }
}, {
    timestamps: true
});

const Reaction = model(collection, schema);
export default Reaction;
