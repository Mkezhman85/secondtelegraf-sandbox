/*
  Warnings:

  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PromotionOnCities" DROP CONSTRAINT "PromotionOnCities_cityId_fkey";

-- DropTable
DROP TABLE "City";

-- CreateTable
CREATE TABLE "CityModel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CityModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PromotionOnCities" ADD CONSTRAINT "PromotionOnCities_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "CityModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
