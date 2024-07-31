import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();
export const addAssess = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const decodedToken = req.userToken;
    const { name, duration, score, format, videoId, chapter, language } =
      req.body;

    const findAssess = await prisma.assessment.findFirst({
      where: { videoId: videoId, userId: decodedToken.id },
    });

    if (findAssess) {
      return res.status(406).json({ message: "Assessment already done" });
    }

    // Efficient data extraction and sanitization (optional)
    const assessmentData = {
      name,
      duration,
      score,
      format,
      videoId,
      chapter,
      language,
      userId: req.userToken?.id, // Optional chaining for safer access
    };

    if (score < 3) {
      return res
        .status(406)
        .json({ message: "You need to pass the assessment." });
    }

    // Create assessment
    const assessment = await prisma.assessment.create({ data: assessmentData });

    return res
      .status(201) // Created
      .json({ data: assessment, message: "Assessment added successfully." });
  } catch (error) {
    console.error("Adding assessment:", error);

    // Generic error handling
    return res
      .status(500) // Internal server error
      .json({ message: "An error occurred while adding assessment." });
  }
};

export const getMyAssessments = async (req: Request, res: Response) => {
  try {
    // Validate user token
    const decodedToken = req.userToken;

    // Fetch assessments
    const assessments = await prisma.assessment.findMany({
      where: { userId: decodedToken.id },
    });

    return res.status(200).json({
      data: assessments,
      message: "Assessments fetched successfully.",
    });
  } catch (error) {
    console.error("Error fetching assessments:", error);

    return res
      .status(500) // Internal Server Error
      .json({ message: "An error occurred while fetching assessments." });
  }
};

export const getVideoAssess = async (req: Request, res: Response) => {
  try {
    const { videoId } = req.params;

    const vAssess = await prisma.assessment.findFirst({
      where: { videoId },
    });

    if (!vAssess) {
      return res.status(404).json({ message: "You need to give assessment" });
    }
    return res
      .status(200)
      .json({ data: vAssess, message: "Video assessment found" });
  } catch (error) {
    console.error("Fetching Assessment:", error);

    return res
      .status(500) // Internal Server Error
      .json({ message: "An error occurred while fetching assessment." });
  }
};

export const getEnglishAssess = async (req: Request, res: Response) => {
  try {
    const decodedToken = req.userToken;
    const engAssess = await prisma.assessment.findMany({
      where: { userId: decodedToken.id, language: "English" },
      select: {
        chapter: true,
      },
    });

    return res
      .status(200)
      .json({ data: engAssess, message: "English Assessment Fetched" });
  } catch (error) {
    console.error("Fetching Assessment:", error);

    return res
      .status(500) // Internal Server Error
      .json({ message: "An error occurred while fetching assessment." });
  }
};

export const getHindiAssess = async (req: Request, res: Response) => {
  try {
    const decodedToken = req.userToken;
    const hindiAssess = await prisma.assessment.findMany({
      where: { userId: decodedToken.id, language: "Hindi" },
      select: {
        chapter: true,
      },
    });

    return res
      .status(200)
      .json({ data: hindiAssess, message: "Hindi Assessment Fetched" });
  } catch (error) {
    console.error("Fetching Assessment:", error);

    return res
      .status(500) // Internal Server Error
      .json({ message: "An error occurred while fetching assessment." });
  }
};

export const deleteAssess = async (req: Request, res: Response) => {
  try {
    // Validate assessId parameter
    const { assessId } = req.params;

    if (!assessId) {
      return res
        .status(400) // Bad Request
        .json({ message: "Missing assessId parameter." });
    }

    // Attempt to delete assessment
    const deletedAssessment = await prisma.assessment.delete({
      where: { id: assessId },
    });

    // Check if deletedAssessment is null (not found)
    if (!deletedAssessment) {
      return res
        .status(404) // Not Found
        .json({ message: "Assessment with the provided ID not found." });
    }

    return res
      .status(200)
      .json({ message: "Assessment deleted successfully." });
  } catch (error) {
    console.error("Deleting assessment:", error);

    return res
      .status(500) // Internal Server Error
      .json({ message: "An error occurred while deleting assessment." });
  }
};

export const getUserAssessment = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const userAssessment = await prisma.assessment.findMany({
      where: { userId: userId },
    });

    return res
      .status(200)
      .json({ data: userAssessment, message: "assessment fetched" });
  } catch (error) {
    console.error("fetching assessment:", error);

    return res
      .status(500) // Internal Server Error
      .json({ message: "An error occurred while fetching assessment." });
  }
};
