/*
  Warnings:

  - You are about to drop the column `mediaMediaid` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `usersUserid` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the column `mediaMediaid` on the `MediaType` table. All the data in the column will be lost.
  - You are about to drop the column `mediaMediaid` on the `Origin` table. All the data in the column will be lost.
  - Added the required column `Userid` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genreGenreid` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mediaTypeTypeid` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originOriginid` to the `Media` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Genre" DROP CONSTRAINT "Genre_mediaMediaid_fkey";

-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_usersUserid_fkey";

-- DropForeignKey
ALTER TABLE "MediaType" DROP CONSTRAINT "MediaType_mediaMediaid_fkey";

-- DropForeignKey
ALTER TABLE "Origin" DROP CONSTRAINT "Origin_mediaMediaid_fkey";

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "mediaMediaid";

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "usersUserid",
ADD COLUMN     "Userid" TEXT NOT NULL,
ADD COLUMN     "genreGenreid" TEXT NOT NULL,
ADD COLUMN     "mediaTypeTypeid" TEXT NOT NULL,
ADD COLUMN     "originOriginid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MediaType" DROP COLUMN "mediaMediaid";

-- AlterTable
ALTER TABLE "Origin" DROP COLUMN "mediaMediaid";

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_Userid_fkey" FOREIGN KEY ("Userid") REFERENCES "Users"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_mediaTypeTypeid_fkey" FOREIGN KEY ("mediaTypeTypeid") REFERENCES "MediaType"("typeid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_genreGenreid_fkey" FOREIGN KEY ("genreGenreid") REFERENCES "Genre"("genreid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_originOriginid_fkey" FOREIGN KEY ("originOriginid") REFERENCES "Origin"("originid") ON DELETE RESTRICT ON UPDATE CASCADE;
