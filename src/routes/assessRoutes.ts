import express from "express";
import {
  addAssess,
  deleteAssess,
  getEnglishAssess,
  getHindiAssess,
  getMyAssessments,
  getUserAssessment,
  getVideoAssess,
} from "../controllers/assessController";
import { authCheck } from "../middlewares/auth";
import { adminCheck } from "../middlewares/isAdmin";

const assessRouter = express.Router();

assessRouter.post("/add", authCheck, addAssess);
assessRouter.delete("/:assessId", authCheck, deleteAssess);
assessRouter.get("/my-assessments", authCheck, getMyAssessments);
assessRouter.get("/video-assessment/:videoId", authCheck, getVideoAssess);
assessRouter.get("/english", authCheck, getEnglishAssess);
assessRouter.get("/hindi", authCheck, getHindiAssess);

// admin route
assessRouter.get("/user-assessment/:userId", adminCheck, getUserAssessment);

export default assessRouter;
