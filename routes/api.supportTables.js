const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/mediatype", async (req, res, next) => {
    try {
      const mediatype = await prisma.mediaType.findMany({
      //   include: { type: true, genre: true, origin: true },
      });
      res.json(mediatype);
    } catch (error) {
      next(error);
    }
  }); 
  
  router.post("/mediatype", async (req, res, next) => {
    try {
      const data = req.body;
      const media = await prisma.mediaType.create({
        data: data,
      });
      res.json(media);
    } catch (error) {
      next(error);
    }
  });
  
  router.get("/genre", async (req, res, next) => {
    try {
      const genre = await prisma.genre.findMany({
      //   include: { type: true, genre: true, origin: true },
      });
      res.json(genre);
    } catch (error) {
      next(error);
    }
  }); 
  
  router.post("/genre", async (req, res, next) => {
    try {
      const data = req.body;
      const genre = await prisma.genre.create({
        data: data,
      });
      res.json(genre);
    } catch (error) {
      next(error);
    }
  });
  
  router.get("/origin", async (req, res, next) => {
    try {
      const origin = await prisma.origin.findMany({
      //   include: { type: true, genre: true, origin: true },
      });
      res.json(origin);
    } catch (error) {
      next(error);
    }
  }); 
  
  router.post("/origin", async (req, res, next) => {
    try {
      const data = req.body;
      const origin = await prisma.origin.create({
        data: data,
      });
      res.json(origin);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;