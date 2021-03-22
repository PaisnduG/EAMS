import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
      },
      item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'item',
      },
    },
  ],
  paymentMethod: {
    type: String,
    required: true,
    default: false,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model('order', orderSchema);
