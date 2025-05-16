import { Schema, model } from 'mongoose';

let collection = 'comments';

const schema = Schema({
    chapter_id: { type: Schema.Types.ObjectId, ref: 'chapters', required: true },
    author_id: { type: Schema.Types.ObjectId, ref: 'authors', required: false },
    company_id: { type: Schema.Types.ObjectId, ref: 'companies', required: false },
    message: { type: String, required: true }
}, {
    timestamps: true
});

let Comment = model(collection, schema);
export default Comment;
