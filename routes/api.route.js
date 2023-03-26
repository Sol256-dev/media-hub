const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/media", async (req, res, next) => {
  try {
    const media = await prisma.media.findMany({
      include: { type: true, genre: true, origin: true },
    });
    res.json(media);
  } catch (error) {
    next(error);
  }
});

router.get("/media/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const media = await prisma.media.findUnique({
      where: { mediaid: id },
      include: { type: true, genre: true, origin: true },
    });
    res.json(media);
  } catch (error) {
    next(error);
  }
});

router.post("/media", async (req, res, next) => {
  try {
    const data = req.body;
    const media = await prisma.media.create({
      data: data,
    });
    res.json(media);
  } catch (error) {
    next(error);
  }
});

router.patch("/media/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const media = await prisma.media.update({
      where: { mediaid: id },
      data: req.body,
    });
    res.json(media);
  } catch (error) {
    next(error);
  }
});

router.delete("/media/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const media = await prisma.media.delete({
      where: { mediaid: id },
    });
    res.json(media);
  } catch (error) {
    next(error);
  }
});

// #################################################################

router.get("/users", async (req, res, next) => {
  try {
    const users = await prisma.users.findMany({
      include: { Media: true },
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await prisma.users.findUnique({
      where: { userid: id },
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post("/users", async (req, res, next) => {
  try {
    const data = req.body;
    const user = await prisma.users.create({
      data: data,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.patch("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await prisma.users.update({
      where: { userid: id },
      data: req.body,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await prisma.users.delete({
      where: { userid: id },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
