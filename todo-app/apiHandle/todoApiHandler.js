const express = require("express");
const router = express.Router();
const Todo = require("../Schemas/todoSchema");

// ================================================= Get all todo =========================
router.get("/", async (req, res) => {
  try {
    const result = await Todo.find({});
    res.status(200).json({ data: result });
  } catch (err) {
    res.status(500).json({
      error: `there was an error while get todo ${err}`,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await Todo.find({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: `error ${error}`,
    });
  }
});

// ================================================= Single Todo post=========================
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    await newTodo.save();
    res.status(200).json({
      message: "Todo create successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: `there was a serverside error ${err}`,
    });
  }
});

// ======================================= many todo post =============================
router.post("/all", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({
      message: "insert many todos ",
    });
  } catch (err) {
    res.status(500).json({
      error: `there was a serverside error many to posting ${err}`,
    });
  }
});

//================================changed single todo ===================================

router.put("/:id", async (req, res) => {
  try {
    const updateData = req.body;
    console.log("updated data = ", updateData);
    const updateResult = await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: updateData.title,
          description: updateData.description,
          isCompleted: updateData.isCompleted,
        },
      }
    );
    res.status(200).json({ data: updateResult });
  } catch (err) {
    res.status(500).json({ error: `there is an error ${err}` });
  }
});

// ===============================================Delete single item ===========================

router.delete("/:id", async (req, res) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: `error throwing delete item ${error}`,
    });
  }
});

module.exports = router;
