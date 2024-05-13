/*
  Warnings:

  - Made the column `name` on table `Assessment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Assessment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `score` on table `Assessment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `format` on table `Assessment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `videoId` on table `Assessment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Assessment" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "duration" SET NOT NULL,
ALTER COLUMN "score" SET NOT NULL,
ALTER COLUMN "format" SET NOT NULL,
ALTER COLUMN "videoId" SET NOT NULL;
