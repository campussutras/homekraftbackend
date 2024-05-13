import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const bulkVideos = async (req: Request, res: Response) => {
  try {
    const createMany = await prisma.video.createMany({
      data: [
        {
          videoName:
            "Strategies During the Performance Review | Chapter Three | Hindi",
          videoUrl:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_hindi/chapter%203%20video%20ATS%20HINDI.mp4",
          videoDuration: "5:54 Min",
          description: "Performance Appraisal",
          language: "Hindi",
          category: "Performance Appraisal",
          thumbnail:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%203%20poster%20hindi.png",
          cover:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%203%20thumbnail%20hindi.png",
          chapter: 3,
          assessment: false,
          assessmentUrl: "strategies-during-the-performance-review-hindi",
        },
        {
          videoName:
            "Strategies During the Performance Review | Chapter Three | English",
          videoUrl:
            "https://d9s5vnsqywfnx.cloudfront.net/Performance%20Appraisal%20Chapter%203.mp4",
          videoDuration: "5:22 Min",
          description:
            "Moving beyond initiation, Chapter Three tackles effective strategies for conducting performance reviews, ensuring a productive dialogue and positive outcomes.",
          language: "English",
          category: "Performance Appraisal",
          thumbnail:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%203%20poster%20english.png",
          cover:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%203%20thumbnail.png",
          chapter: 3,
          assessment: false,
          assessmentUrl: "strategies-during-the-performance-review",
        },
        {
          videoName:
            "Understanding the Importance of Performance Appraisal | Chapter One | English",
          videoUrl:
            "https://d9s5vnsqywfnx.cloudfront.net/Performance%20Appraisal%20Chapter%201.mp4",
          videoDuration: "5:09 Min",
          description:
            "This chapter delves into the significance of performance appraisals, exploring their role in employee development and organizational success.",
          language: "English",
          category: "Performance Appraisal",
          thumbnail:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%201%20poster%20english.png",
          cover:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%201%20thumbnail.png",
          chapter: 1,
          assessment: false,
          assessmentUrl: "importance-of-performance-appraisal",
        },
        {
          videoName: "Initiating a Performance Review | Chapter Two | English",
          videoUrl:
            "https://d9s5vnsqywfnx.cloudfront.net/Performance%20Appraisal%20Chapter%202.mp4",
          videoDuration: "7:04 Min",
          description:
            "Chapter Two dives into initiating performance reviews, outlining best practices for effective communication and setting the stage for a productive discussion.",
          language: "English",
          category: "Performance Appraisal",
          thumbnail:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%202%20poster%20english.png",
          cover:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%202%20thumbnail.png",
          chapter: 2,
          assessment: false,
          assessmentUrl: "initiating-performance-review",
        },
        {
          videoName:
            "Excelling in Your Performance Appraisal | Chapter Four | English",
          videoUrl:
            "https://d9s5vnsqywfnx.cloudfront.net/Performance%20Appraisal%20Chapter%204.mp4",
          videoDuration: "5:59 Min",
          description:
            "Chapter Four empowers employees to excel in their performance appraisals, equipping them with techniques for self-reflection, effective communication, and maximizing their impact.",
          language: "English",
          category: "Performance Appraisal",
          thumbnail:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%204%20english%20poster.png",
          cover:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%204%20thumbnail.png",
          chapter: 4,
          assessment: false,
          assessmentUrl: "excelling-in-your-performance-appraisal",
        },
        {
          videoName:
            "Understanding the Importance of Performance Appraisal | Chapter One | Hindi",
          videoUrl:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_hindi/Understanding%20the%20Importance%20of%20Performance%20Appraisal%20Chapter%20One.mp4",
          videoDuration: "5:39 Min",
          description: "Performance Appraisal",
          language: "Hindi",
          category: "Performance Appraisal",
          thumbnail:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%201%20poster%20hindi.png",
          cover:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%201%20thumbnail%20hindi.png",
          chapter: 1,
          assessment: false,
          assessmentUrl: "importance-of-performance-appraisal-hindi",
        },
        {
          videoName: "Initiating a Performance Review | Chapter Two | Hindi",
          videoUrl:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_hindi/Initiating%20a%20Performance%20Review%20Chapter%20Two.mp4",
          videoDuration: "8:04 Min",
          description: "Performance Appraisal",
          language: "Hindi",
          category: "Performance Appraisal",
          thumbnail:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%202%20poster%20hindi.png",
          cover:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%202%20thumbnail%20hindi.png",
          chapter: 2,
          assessment: false,
          assessmentUrl: "initiating-performance-review-hindi",
        },
        {
          videoName:
            "Excelling in Your Performance Appraisal | Chapter Four | Hindi",
          videoUrl:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_hindi/chapter%204%20ATS%20VIDEO%20HINDI.mp4",
          videoDuration: "7:18 Min",
          description: "Performance Appraisal",
          language: "Hindi",
          category: "Performance Appraisal",
          thumbnail:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%204%20hindi%20poster.png",
          cover:
            "https://d9s5vnsqywfnx.cloudfront.net/ats_performance_appraisal_images/chapter%204%20thumbnail%20hindi.png",
          chapter: 4,
          assessment: false,
          assessmentUrl: "excelling-in-your-performance-appraisal-hindi",
        },
      ],
      skipDuplicates: true,
    });
    return res.status(201).json({ data: createMany, message: "Video Added" });
  } catch (error) {
    console.error("Video error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred on adding video." });
  }
};

export const addVideo = async (req: Request, res: Response) => {
  try {
    const {
      videoName,
      videoUrl,
      videoDuration,
      description,
      language,
      category,
      thumbnail,
      cover,
      chapter,
    } = req.body;

    const newVideo = await prisma.video.create({
      data: {
        videoName,
        videoUrl,
        videoDuration,
        description,
        language,
        category,
        thumbnail,
        cover,
        chapter,
      },
    });

    if (!newVideo) {
      return res.status(400).json({
        message: "Error while uploading video",
      });
    }

    return res.status(201).json({
      data: newVideo,
      message: "Video Added",
    });
  } catch (error) {
    console.error("Video error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred on adding video." });
  }
};

export const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await prisma.video.findMany();
    return res.status(200).json({ data: videos, message: "Videos Fetched" });
  } catch (error) {
    console.error("Fetching videos :", error);
    return res
      .status(500)
      .json({ message: "An error occurred on fetching videos." });
  }
};

export const getVideo = async (req: Request, res: Response) => {
  try {
    const { videoId } = req.params;

    const video = await prisma.video.findUnique({
      where: { videoId: videoId },
    });

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json({ data: video, message: "Video fetched" });
  } catch (error) {
    console.error("Fetching video :", error);
    return res
      .status(500)
      .json({ message: "An error occurred on fetching video." });
  }
};

export const updateVideo = async (req: Request, res: Response) => {
  try {
    const { videoId } = req.params;

    const {
      videoName,
      videoUrl,
      videoDuration,
      description,
      language,
      category,
      thumbnail,
      cover,
      chapter,
      assessment,
      assessmentUrl,
    } = req.body;

    const video = await prisma.video.findUnique({
      where: { videoId: videoId },
    });

    if (!video) {
      return res.status(404).json({ message: "Video Not Found" });
    }

    const updateVideo = await prisma.video.update({
      where: { videoId: videoId },
      data: {
        videoName,
        videoUrl,
        videoDuration,
        description,
        language,
        category,
        thumbnail,
        cover,
        chapter,
        assessment,
        assessmentUrl,
      },
    });

    return res
      .status(200)
      .json({ data: updateVideo, message: "video updated" });
  } catch (error) {
    console.error("Video updating error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred on updating video." });
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  try {
    const { videoId } = req.params;
    await prisma.video.delete({
      where: { videoId: videoId },
    });
    return res.status(200).json({ message: "Video Deleted!" });
  } catch (error) {
    console.error("Video deleting error:", error);
    return res
      .status(500)
      .json({ message: "An error occurred on deleting video." });
  }
};

// export const addWatchHistory = async (req: Request, res: Response) => {
//   try {
//     const decodedToken = req.userToken;
//     const { videoId } = req.params;
//     const { watchDuration, isCompleted } = req.body;

//     // Create a new watching history entry using Prisma
//     const watchingHistoryEntry = await prisma.watchingHistory.create({
//       data: {
//         userId: decodedToken.id,
//         videoId: videoId,
//         watchDuration,
//         isCompleted,
//         watchedAt: new Date(), // Set the watchedAt timestamp to current time
//       },
//     });

//     res.status(201).json({
//       message: "Watch history added successfully",
//       data: watchingHistoryEntry,
//     });
//   } catch (error) {
//     console.error("Error adding watch history:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const addWatchHistory = async (req: Request, res: Response) => {
  try {
    const decodedToken = req.userToken;
    const { videoId } = req.params;
    const { watchDuration, isCompleted } = req.body;

    // Check current number of watch history entries for the user
    // const userWatchHistoryCount = await prisma.watchingHistory.count({
    //   where: {
    //     userId: decodedToken.id,
    //   },
    // });

    // // If user has 20 or more watch history entries, remove the oldest entry
    // if (userWatchHistoryCount >= 20) {
    //   // Find the oldest watch history entry for the user
    //   const oldestWatchHistory = await prisma.watchingHistory.findFirst({
    //     where: {
    //       userId: decodedToken.id,
    //     },
    //     orderBy: {
    //       watchedAt: "asc", // Order by watchedAt in ascending order to get the oldest entry
    //     },
    //   });

    //   // Delete the oldest watch history entry
    //   if (oldestWatchHistory) {
    //     await prisma.watchingHistory.delete({
    //       where: {
    //         id: oldestWatchHistory.id,
    //       },
    //     });
    //   }
    // }

    // Create a new watching history entry using Prisma
    const watchingHistoryEntry = await prisma.watchingHistory.create({
      data: {
        userId: decodedToken.id,
        videoId: videoId,
        watchDuration,
        isCompleted,
        watchedAt: new Date(), // Set the watchedAt timestamp to current time
      },
    });

    res.status(201).json({
      message: "Watch history added successfully",
      data: watchingHistoryEntry,
    });
  } catch (error) {
    console.error("Error adding watch history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getWatchHistory = async (req: Request, res: Response) => {
  try {
    const decodedToken = req.userToken; // Assuming userId is part of the URL path

    // Fetch the watch history entries for the specified user using Prisma
    const watchHistory = await prisma.watchingHistory.findMany({
      where: {
        userId: decodedToken.id,
      },
      select: {
        watchedAt: true,
        watchDuration: true,
        isCompleted: true,
        video: {
          select: {
            videoId: true,
            videoName: true,
            videoUrl: true,
            videoDuration: true,
            language: true,
            category: true,
            thumbnail: true,
            cover: true,
            chapter: true,
          },
        },
      },
    });

    res.status(200).json({ data: watchHistory, message: "Watch History" });
  } catch (error) {
    console.error("Error retrieving watch history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserWatchHistory = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const watchHistory = await prisma.watchingHistory.findMany({
      where: { userId: userId },
    });
    return res
      .status(200)
      .json({ data: watchHistory, message: "User watch history fetched" });
  } catch (error) {
    console.error("Error retrieving watch history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteWatchHistory = async (req: Request, res: Response) => {
  try {
    const decodedToken = req.userToken;
    console.log(decodedToken);

    await prisma.watchingHistory.deleteMany({
      where: { userId: decodedToken.id },
    });

    return res.status(200).json({ message: "Watch History Deleted" });
  } catch (error) {
    console.error("Error while deleting watch history", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
