const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");

// CREATE a new book
router.post("/", bookController.createBook);

// READ all books
router.get("/", bookController.getAllBooks);

// READ a single book by ID
router.get("/:id", bookController.getBookById);

// UPDATE a book by ID
router.put("/:id", bookController.updateBook);

// DELETE a book by ID
router.delete("/:id", bookController.deleteBook);

module.exports = router;
