const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
	itemName: {
		type: String,
		required: true,
	},
	type: {
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
	// Admin's user name & avatar
	userName: {
		type: String,
	},
	avatar: {
		type: String,
	},
	whishlist: [
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
