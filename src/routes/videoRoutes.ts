import express from "express";
import {
  addVideo,
  addWatchHistory,
  bulkVideos,
  deleteVideo,
  deleteWatchHistory,
  getUserWatchHistory,
  getVideo,
  getVideos,
  getWatchHistory,
  updateVideo,
} from "../controllers/videoController";
import { authCheck } from "../middlewares/auth";
import { adminCheck } from "../middlewares/isAdmin";

const videoRouter = express.Router();

videoRouter.post("/add", authCheck, addVideo);
videoRouter.get("/all-videos", authCheck, getVideos);
videoRouter.get("/video/:videoId", authCheck, getVideo);
videoRouter.delete("/video/:videoId", authCheck, deleteVideo);
videoRouter.get("/get-watch-history", authCheck, getWatchHistory);
videoRouter.post("/watch-history/:videoId", authCheck, addWatchHistory);

// admin routes
videoRouter.post("/bulk-videos", bulkVideos);
videoRouter.delete(
  "/watch-history-delete",
  adminCheck,
  authCheck,
  deleteWatchHistory
);
videoRouter.patch("/update/:videoId", authCheck, updateVideo);
videoRouter.get("/get-user-videos/:userId", adminCheck, getUserWatchHistory);

export default videoRouter;
