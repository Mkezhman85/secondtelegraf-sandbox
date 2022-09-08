/*
  Warnings:

  - You are about to drop the column `cityId` on the `ThemeModel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ThemeModel" DROP CONSTRAINT "ThemeModel_cityId_fkey";

-- AlterTable
ALTER TABLE "ThemeModel" DROP COLUMN "cityId";
