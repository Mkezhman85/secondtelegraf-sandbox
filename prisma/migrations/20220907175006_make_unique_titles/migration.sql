/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `CityModel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `PromotionModel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `ThemeModel` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `UserModel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CityModel_name_key" ON "CityModel"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PromotionModel_title_key" ON "PromotionModel"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ThemeModel_title_key" ON "ThemeModel"("title");

-- CreateIndex
CREATE UNIQUE INDEX "UserModel_email_key" ON "UserModel"("email");
