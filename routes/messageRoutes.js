const express = require("express");
const {
  sendMessage,
  getAllMessages,
  getMessageById,
  deleteMessage,
} = require("../controllers/MessageController");
const router = express.Router();

// Route to send a message
router.post("/messages", sendMessage);

// Route to get all messages
router.get("/messages", getAllMessages);

// Route to get a message by ID
router.get("/messages/:id", getMessageById);

// Route to delete a message by ID
router.delete("/messages/:id", deleteMessage);

module.exports = router;
