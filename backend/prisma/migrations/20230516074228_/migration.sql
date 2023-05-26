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

-- AddForeignKey
ALTER TABLE `Guest` ADD CONSTRAINT `Guest_id_undangan_fkey` FOREIGN KEY (`id_undangan`) REFERENCES `Invitation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
