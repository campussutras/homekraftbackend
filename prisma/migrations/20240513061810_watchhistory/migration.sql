/*
  Warnings:

  - A unique constraint covering the columns `[videoId]` on the table `WatchingHistory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "WatchingHistory_videoId_key" ON "WatchingHistory"("videoId");
