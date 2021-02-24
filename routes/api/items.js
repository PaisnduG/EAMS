const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Item = require('../../models/Item');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route  POST api/items
// @desc   Add a Item
// @access Private

// @to-do authentication admin only
// for now any logged in user can add a item
router.post(
	'/',
	[
		auth,
		[
			check('itemName', 'Item name is required').not().isEmpty(),
			check('type', 'Type is required').not().isEmpty(),
			check('price', 'Price is required').not().isEmpty(),
		],
	],
	async (req, res) => {
		// Error Checking
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const user = await User.findById(req.user.id).select('-password');

			const newItem = new Item({
				itemName: req.body.itemName,
				type: req.body.type,
				price: req.body.price,
				userName: user.name,
				avatar: user.avatar,
				user: req.user.id,
			});

			const item = await newItem.save();

			res.json(item);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route  GET api/items
// @desc   Get all items
// @access Public
router.get('/', async (req, res) => {
	try {
		const items = await Item.find().sort({ date: -1 }); // Most recent items first
		res.json(items);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route  GET api/items/:id
// @desc   Get Item by ID
// @access Private
router.get('/:id', auth, async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);

		if (!item) {
			return res.status(404).json({ msg: 'Item Not Found' });
		}

		res.json(item);
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Item Not Found' });
		}
		res.status(500).send('Server Error');
	}
});

// @route  DELETE api/items/:id
// @desc   Delete a post
// @access Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);

		if (!item) {
			return res.status(404).json({ msg: 'Item Not Found' });
		}

		await item.remove();

		res.json({ msg: 'Item removed' });
	} catch (err) {
		console.error(err.message);
		if (err.kind === 'ObjectId') {
			return res.status(404).json({ msg: 'Item Not Found' });
		}
		res.status(500).send('Server Error');
	}
});
module.exports = router;
