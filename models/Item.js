const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
	name: { type: String, required: true },
	rating: { type: Number, required: true },
	comment: { type: String, required: true },
});

const ItemSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	itemName: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
	brand: {
		type: String,
	},
	category: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	manufatureDate: {
		type: Date,
	},
	description: {
		type: String,
	},
	reviews: [reviewSchema],
	rating: {
		type: Number,
		required: true,
		default: 0,
	},
	numReviews: {
		type: Number,
		required: true,
		default: 0,
	},
	countInStock: {
		type: Number,
		required: true,
		default: 1,
	},
	// Admin's user name & avatar
	userName: {
		type: String,
	},
	avatar: {
		type: String,
	},
	wishlists: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'user',
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Item = mongoose.model('item', ItemSchema);
