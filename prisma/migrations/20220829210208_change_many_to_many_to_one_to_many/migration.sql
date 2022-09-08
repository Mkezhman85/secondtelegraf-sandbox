/*
  Warnings:

  - You are about to drop the `PromotionOnCities` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cityId` to the `PromotionModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityId` to the `ThemeModel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PromotionOnCities" DROP CONSTRAINT "PromotionOnCities_cityId_fkey";

-- DropForeignKey
ALTER TABLE "PromotionOnCities" DROP CONSTRAINT "PromotionOnCities_promotionId_fkey";

-- AlterTable
ALTER TABLE "PromotionModel" ADD COLUMN     "cityId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ThemeModel" ADD COLUMN     "cityId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "PromotionOnCities";

-- AddForeignKey
ALTER TABLE "PromotionModel" ADD CONSTRAINT "PromotionModel_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "CityModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThemeModel" ADD CONSTRAINT "ThemeModel_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "CityModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
