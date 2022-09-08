/*
  Warnings:

  - You are about to drop the column `cityId` on the `UserModel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserModel" DROP CONSTRAINT "UserModel_cityId_fkey";

-- AlterTable
ALTER TABLE "UserModel" DROP COLUMN "cityId";
