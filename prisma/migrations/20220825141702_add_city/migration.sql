/*
  Warnings:

  - Added the required column `cityId` to the `UserModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserModel" ADD COLUMN     "cityId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "UserModel" ADD CONSTRAINT "UserModel_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "CityModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
