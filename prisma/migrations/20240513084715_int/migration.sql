/*
  Warnings:

  - Changed the type of `watchDuration` on the `WatchingHistory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "WatchingHistory" DROP COLUMN "watchDuration",
ADD COLUMN     "watchDuration" INTEGER NOT NULL;
