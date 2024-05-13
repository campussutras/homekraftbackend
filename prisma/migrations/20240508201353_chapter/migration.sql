-- AlterTable
ALTER TABLE "Assessment" ADD COLUMN     "chapter" INTEGER;

-- AlterTable
ALTER TABLE "WatchingHistory" ADD COLUMN     "chapterAssessmentCompleted" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[];
