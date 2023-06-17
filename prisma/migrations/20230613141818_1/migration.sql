-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `no_telp` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `foto_profile` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invitation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_pria` VARCHAR(191) NOT NULL,
    `name_wanita` VARCHAR(191) NOT NULL,
    `tgl_nikah` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guest` (
    `id_tamu` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `no_telp` INTEGER NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `qrcode` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `w_hadir` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_undangan` INTEGER NULL,
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_tamu`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Theme` (
    `id_tema` INTEGER NOT NULL AUTO_INCREMENT,
    `tema_undangan` VARCHAR(191) NOT NULL,
    `font_primary` VARCHAR(191) NOT NULL,
    `font_secondary` VARCHAR(191) NOT NULL,
    `backsound` VARCHAR(191) NOT NULL,
    `id_undangan` INTEGER NULL,

    PRIMARY KEY (`id_tema`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id_acara` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_acara` VARCHAR(191) NOT NULL,
    `tgl_acara` VARCHAR(191) NOT NULL,
    `jam_mulai` VARCHAR(191) NOT NULL,
    `jam_selesai` VARCHAR(191) NOT NULL,
    `id_undangan` INTEGER NULL,

    PRIMARY KEY (`id_acara`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Couple` (
    `id_pasangan` INTEGER NOT NULL AUTO_INCREMENT,
    `foto_cover` VARCHAR(191) NOT NULL,
    `kutipan` VARCHAR(191) NOT NULL,
    `id_undangan` INTEGER NULL,

    PRIMARY KEY (`id_pasangan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataPria` (
    `id_pria` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_lengkap` VARCHAR(191) NOT NULL,
    `nama_panggilan` VARCHAR(191) NOT NULL,
    `nama_ayah` VARCHAR(191) NOT NULL,
    `nama_ibu` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NOT NULL,
    `twitter` VARCHAR(191) NOT NULL,
    `foto_pria` VARCHAR(191) NOT NULL,
    `id_pasangan` INTEGER NULL,

    PRIMARY KEY (`id_pria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DataWanita` (
    `id_wanita` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_lengkap` VARCHAR(191) NOT NULL,
    `nama_panggilan` VARCHAR(191) NOT NULL,
    `nama_ayah` VARCHAR(191) NOT NULL,
    `nama_ibu` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NOT NULL,
    `twitter` VARCHAR(191) NOT NULL,
    `foto_wanita` VARCHAR(191) NOT NULL,
    `id_pasangan` INTEGER NULL,

    PRIMARY KEY (`id_wanita`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gallery` (
    `id_gallery` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NOT NULL,
    `id_pasangan` INTEGER NULL,

    PRIMARY KEY (`id_gallery`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Guest` ADD CONSTRAINT `Guest_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Theme` ADD CONSTRAINT `Theme_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Couple` ADD CONSTRAINT `Couple_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataPria` ADD CONSTRAINT `DataPria_id_pasangan_fkey` FOREIGN KEY (`id_pasangan`) REFERENCES `Couple`(`id_pasangan`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DataWanita` ADD CONSTRAINT `DataWanita_id_pasangan_fkey` FOREIGN KEY (`id_pasangan`) REFERENCES `Couple`(`id_pasangan`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gallery` ADD CONSTRAINT `Gallery_id_pasangan_fkey` FOREIGN KEY (`id_pasangan`) REFERENCES `Couple`(`id_pasangan`) ON DELETE SET NULL ON UPDATE CASCADE;
