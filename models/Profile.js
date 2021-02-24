const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new mongoose.Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user',
	},
	// developer/client or employee or admin
	status: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	website: {
		type: String,
	},
	location: {
		type: String,
	},
	bio: {
		type: String,
	},
	githubusername: {
		type: String,
	},
	skills: {
		type: [String],
	},
	social: {
		youtube: {
			type: String,
		},
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		linkedin: {
			type: String,
		},
		instagram: {
			type: String,
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
