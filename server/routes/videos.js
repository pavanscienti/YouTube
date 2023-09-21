import express from "express";
import { verifyToken } from "../verifyToken.js";
import { addVideo, addView, deleteVideo, getVideo, random, sub, trend, updateVideo,getByTag,search } from "../controllers/video.js";

const router = express.Router();

router.post("/",verifyToken,addVideo);
router.put("/:id",verifyToken,updateVideo);
router.delete("/:id",verifyToken,deleteVideo);
router.get("/find/:id",getVideo)
router.put("/view/:id",addView)
router.get("/trend/",trend)
router.get("/random/",random)
router.get("/sub",verifyToken,sub)
router.get("/tags", getByTag)
router.get("/search", search)

export default router;