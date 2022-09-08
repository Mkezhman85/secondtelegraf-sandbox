/*
  Warnings:

  - You are about to drop the `Theme` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PromotionModel" DROP CONSTRAINT "PromotionModel_themeId_fkey";

-- DropTable
DROP TABLE "Theme";

-- CreateTable
CREATE TABLE "ThemeModel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ThemeModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PromotionModel" ADD CONSTRAINT "PromotionModel_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "ThemeModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
