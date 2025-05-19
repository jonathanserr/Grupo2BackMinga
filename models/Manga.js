import { Schema, model } from "mongoose";

const collection = "mangas";

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
    reaction: [
      {
        name: { type: String, required: true }, // "like", "dislike", etc.
        id: { type: Number, required: true }, // 1, 2, 3, 4
        count: { type: Number, default: 0 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Manga = model(collection, schema);
export default Manga;
