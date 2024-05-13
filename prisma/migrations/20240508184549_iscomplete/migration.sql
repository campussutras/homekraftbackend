/*
  Warnings:

  - Made the column `isCompleted` on table `WatchingHistory` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "WatchingHistory" ALTER COLUMN "isCompleted" SET NOT NULL,
ALTER COLUMN "isCompleted" SET DEFAULT false;
