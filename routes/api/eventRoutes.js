const db = require('../../models');
const app = require('express');
const router = app.Router();

// GET: /api/events
router.get("/", async (req, res) => {
  try {
    const events = await db.Event.find({})
    res.json(events);
  } catch (error) {
    res.json(error);
  }
});

// POST: /api/events
router.post("/", async (req, res) => {
  try {
    const event = await db.Event.create(req.body);
    res.json(event);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// POST to register user for event
// POST: /api/events/:id/register
router.post("/:id/register", async ({ params: { id }, session: { user_email: email } }, res) => {
  try {
    const user = await db.User.findOne({ email });
    if (!user) {
      res.status(400).send();
      return;
    }

    const event = await db.Event.findOneAndUpdate({ _id: id }, { $addToSet: { users: user.id } }, { new: true })
    if (!event) {
      res.status(400).send();
      return;
    }

    user.events.push(event.id);
    await user.save();

    console.log('event', event);
    res.json(event);
  } catch(err) {
      console.log('err', err);
      res.json(err);
  };
});

module.exports = router;
