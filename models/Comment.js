import { Schema, model } from 'mongoose';

const collection = 'comments';

const schema = new Schema({
    chapter_id: { type: Schema.Types.ObjectId, ref: 'chapters', required: true },
    author_id: { type: Schema.Types.ObjectId, ref: 'authors' },
    company_id: { type: Schema.Types.ObjectId, ref: 'companies' },
    message: { type: String, required: true }
}, {
    timestamps: true
});

const Comment = model(collection, schema);
export default Comment;
