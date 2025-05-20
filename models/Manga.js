import { Schema, model } from 'mongoose';

const collection = 'mangas';

const defaultReactions = [
  { name: "like", id: 1, count: 0 },
  { name: "dislike", id: 2, count: 0 },
  { name: "awesome", id: 3, count: 0 },
  { name: "iloveyou", id: 4, count: 0 }
];

const schema = new Schema(
  {
    author_id: { type: Schema.Types.ObjectId, ref: "authors" },
    company_id: { type: Schema.Types.ObjectId, ref: "companies" },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      required: true,
    },
   reaction: {
    type: [
      {
        name: { type: String, required: true },
        id: { type: Number, required: true },
        count: { type: Number, default: 0 }
      }
    ],
    default: defaultReactions
  }
  },
  {
    timestamps: true,
  }
);

const Manga = model(collection, schema);
export default Manga;
