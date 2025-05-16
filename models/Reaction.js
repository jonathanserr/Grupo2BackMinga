import { Schema, model } from 'mongoose';

let collection = 'reactions';

const schema = Schema({
    manga_id: { type: Schema.Types.ObjectId, ref: 'mangas', required: true },
    chapter_id: { type: Schema.Types.ObjectId, ref: 'chapters' },
    author_id: { type: Schema.Types.ObjectId, ref: 'authors' },
    company_id: { type: Schema.Types.ObjectId, ref: 'companies' },
    reaction: { type: Number, required: true } // 1 👍, 2 👎, 3 😮, 4 😍
}, {
    timestamps: true
});

let Reaction = model(collection, schema);
export default Reaction;
