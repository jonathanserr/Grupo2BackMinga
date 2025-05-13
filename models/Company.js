import { Schema, model } from 'mongoose';

const collection = 'companies';

const schema = new Schema({
    name: { type: String, required: true },
    website: { type: String },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    active: { type: Boolean, default: true }
}, {
    timestamps: true
});

const Company = model(collection, schema);
export default Company;
