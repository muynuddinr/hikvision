import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyFeatures: {
    type: [String],
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
  },
  image3: {
    type: String,
  },
  navbarCategory: {
    type: Schema.Types.ObjectId,
    ref: 'NavbarCategory',
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Drop existing model if it exists to ensure schema changes take effect
if (mongoose.models.Product) {
  delete mongoose.models.Product;
}

const Product = mongoose.model('Product', productSchema);
export default Product; 