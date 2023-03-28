const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
    try {
      const users = await prisma.users.findMany({
        include: { Media: true },
      });
      res.json(users);
    } catch (error) {
      next(error);
    }
  });
  
  router.get("/:id", async (req, res, next) => {
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
  
  router.post("/", async (req, res, next) => {
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
  
  router.patch("/:id", async (req, res, next) => {
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
  
  router.delete("/:id", async (req, res, next) => {
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