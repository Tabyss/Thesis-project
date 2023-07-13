/*
  Warnings:

  - You are about to drop the column `id_pasangan` on the `data_pria` table. All the data in the column will be lost.
  - You are about to drop the column `id_pasangan` on the `data_wanita` table. All the data in the column will be lost.
  - You are about to drop the column `id_pasangan` on the `gallery` table. All the data in the column will be lost.
  - You are about to drop the column `foto_profile` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token` on the `user` table. All the data in the column will be lost.
  - Added the required column `url_foto` to the `Couple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_foto` to the `Data_Pria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_foto` to the `Data_Wanita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url_foto` to the `Gallery` table without a default value. This is not possible if the table is not empty.
  - Made the column `qrcode` on table `guest` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `data_pria` DROP FOREIGN KEY `Data_Pria_id_pasangan_fkey`;

-- DropForeignKey
ALTER TABLE `data_wanita` DROP FOREIGN KEY `Data_Wanita_id_pasangan_fkey`;

-- DropForeignKey
ALTER TABLE `gallery` DROP FOREIGN KEY `Gallery_id_pasangan_fkey`;

-- AlterTable
ALTER TABLE `couple` ADD COLUMN `url_foto` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `data_pria` DROP COLUMN `id_pasangan`,
    ADD COLUMN `id_undangan` VARCHAR(191) NULL,
    ADD COLUMN `url_foto` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `data_wanita` DROP COLUMN `id_pasangan`,
    ADD COLUMN `id_undangan` VARCHAR(191) NULL,
    ADD COLUMN `url_foto` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `gallery` DROP COLUMN `id_pasangan`,
    ADD COLUMN `id_undangan` VARCHAR(191) NULL,
    ADD COLUMN `url_foto` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `guest` MODIFY `qrcode` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `foto_profile`,
    DROP COLUMN `refresh_token`;

-- AddForeignKey
ALTER TABLE `Data_Pria` ADD CONSTRAINT `Data_Pria_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Data_Wanita` ADD CONSTRAINT `Data_Wanita_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gallery` ADD CONSTRAINT `Gallery_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
