-- CreateTable
CREATE TABLE `Theme` (
    `id_theme` INTEGER NOT NULL AUTO_INCREMENT,
    `font_primary` VARCHAR(191) NOT NULL,
    `font_secondary` VARCHAR(191) NOT NULL,
    `backsound` VARCHAR(191) NOT NULL,
    `id_undangan` INTEGER NULL,

    PRIMARY KEY (`id_theme`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Theme` ADD CONSTRAINT `Theme_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
