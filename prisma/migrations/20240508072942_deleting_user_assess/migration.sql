/*
  Warnings:

  - You are about to drop the `UserAssessment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserAssessment" DROP CONSTRAINT "UserAssessment_assessmentId_fkey";

-- DropForeignKey
ALTER TABLE "UserAssessment" DROP CONSTRAINT "UserAssessment_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserAssessment" DROP CONSTRAINT "UserAssessment_videoId_fkey";

-- DropTable
DROP TABLE "UserAssessment";
