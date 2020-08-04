const express = require('express');
const router = express.Router();

// @route     GET  api/contacts
// @desc      Get all user's contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route     POST  api/auth
// @desc      Add new contact
// @access    Private
router.post('/', (req, res) => {
  res.send('Add a new contact');
});

// @route     PUT   api/auth/:id
// @desc      Update contact
// @access    Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route     DELETE  api/auth/:id
// @desc      Auth user & get token
// @access    Private
router.delete('/', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;

module.exports = router;
