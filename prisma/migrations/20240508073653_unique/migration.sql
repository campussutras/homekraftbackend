/*
  Warnings:

  - A unique constraint covering the columns `[videoId]` on the table `Assessment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Assessment_videoId_key" ON "Assessment"("videoId");
