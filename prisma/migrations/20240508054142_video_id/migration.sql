-- AlterTable
ALTER TABLE "Assessment" ADD COLUMN     "videoId" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "score" DROP NOT NULL,
ALTER COLUMN "format" DROP NOT NULL;
