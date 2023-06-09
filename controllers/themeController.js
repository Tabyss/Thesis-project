import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTheme = async (req, res) => {
    try {
        const theme = await prisma.theme.findMany();
        res.status(200).json(theme);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const getThemeById = async (req, res) => {
    try {
        const theme = await prisma.theme.findUnique({
            where: {
                id_tema: Number(req.params.id),
              },
        });
        res.status(200).json(theme);
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createTheme = async (req, res) => {
    const { tema_undangan, font_primary, font_secondary, backsound, id_undangan } = req.body;
    try {
        const theme = await prisma.theme.create ({
            data : {
                tema_undangan: tema_undangan,
                font_primary: font_primary,
                font_secondary: font_secondary,
                backsound: backsound,
                id_undangan: id_undangan,
            },
        });
        res.status(201).json(theme);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateTheme = async (req, res) => {
    const { tema_undangan, font_primary, font_secondary, backsound, id_undangan } = req.body;
    try {
        const theme = await prisma.theme.update ({
            where: {
            id_tema: Number(req.params.id),
            },
            data : {
                tema_undangan: tema_undangan,
                font_primary: font_primary,
                font_secondary: font_secondary,
                backsound: backsound,
                id_undangan: id_undangan,
            },
        });
      res.status(201).json(theme);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  export const deleteTheme = async (req, res) => {
    try {
      const theme = await prisma.theme.delete({
        where: {
          id_tema: Number(req.params.id),
        },
      });
      res.status(201).json(theme);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };