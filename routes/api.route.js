const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  try {
    const media = await prisma.media.findMany({
      include: { type: true, genre: true, origin: true },
    });
    res.json(media);
  } catch (error) {
    next(error);
  }
}); 

router.get("/:id", async (req, res, next) => {
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

router.post("/", async (req, res, next) => {
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

router.patch("/:id", async (req, res, next) => {
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

router.delete("/:id", async (req, res, next) => {
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

module.exports = router;
