import mongoose from "mongoose";
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, trim: true },
  category: { type: mongoose.Types.ObjectId, ref: "Categories", required: true }, // Ensure ref matches the model name
});

export const SubCategoryModal = mongoose.models.Subcategories || mongoose.model(
  "Subcategories",
  subcategorySchema
);
