/*
  Warnings:

  - You are about to drop the `Promotion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Promotion" DROP CONSTRAINT "Promotion_themeId_fkey";

-- DropForeignKey
ALTER TABLE "PromotionOnCities" DROP CONSTRAINT "PromotionOnCities_promotionId_fkey";

-- DropForeignKey
ALTER TABLE "PromotionOnTag" DROP CONSTRAINT "PromotionOnTag_promotionId_fkey";

-- DropTable
DROP TABLE "Promotion";

-- CreateTable
CREATE TABLE "PromotionModel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "themeId" INTEGER NOT NULL,
    "beginDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PromotionModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PromotionModel" ADD CONSTRAINT "PromotionModel_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionOnTag" ADD CONSTRAINT "PromotionOnTag_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "PromotionModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionOnCities" ADD CONSTRAINT "PromotionOnCities_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "PromotionModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
