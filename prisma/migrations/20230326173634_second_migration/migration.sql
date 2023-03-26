-- CreateTable
CREATE TABLE "Media" (
    "mediaid" TEXT NOT NULL,
    "medianame" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "posterpath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL DEFAULT 5000,
    "usersUserid" TEXT NOT NULL,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("mediaid")
);

-- CreateTable
CREATE TABLE "MediaType" (
    "typeid" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mediaMediaid" TEXT NOT NULL,

    CONSTRAINT "MediaType_pkey" PRIMARY KEY ("typeid")
);

-- CreateTable
CREATE TABLE "Genre" (
    "genreid" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mediaMediaid" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("genreid")
);

-- CreateTable
CREATE TABLE "Origin" (
    "originid" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "mediaMediaid" TEXT NOT NULL,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("originid")
);

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_usersUserid_fkey" FOREIGN KEY ("usersUserid") REFERENCES "Users"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaType" ADD CONSTRAINT "MediaType_mediaMediaid_fkey" FOREIGN KEY ("mediaMediaid") REFERENCES "Media"("mediaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Genre" ADD CONSTRAINT "Genre_mediaMediaid_fkey" FOREIGN KEY ("mediaMediaid") REFERENCES "Media"("mediaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Origin" ADD CONSTRAINT "Origin_mediaMediaid_fkey" FOREIGN KEY ("mediaMediaid") REFERENCES "Media"("mediaid") ON DELETE RESTRICT ON UPDATE CASCADE;
