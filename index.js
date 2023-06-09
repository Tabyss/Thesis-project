import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import GuestRoute from "./routes/GuestRoute.js";
import InvitationRoute from "./routes/InvitationRoute.js";
import EventRoute from "./routes/eventRoute.js";
import CoupleRoute from "./routes/coupleRoute.js";
import DataPriaRoute from "./routes/dataPriaRoute.js";
import DataWanitaRoute from "./routes/dataWanitaRoute.js";
import GalleryRoute from "./routes/galleryRoute.js";
import ThemeRoute from "./routes/themeRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); //-> agar menerima data dalam bentuk JSON
app.use(GuestRoute);
app.use(InvitationRoute);
app.use(EventRoute);
app.use(CoupleRoute);
app.use(DataPriaRoute);
app.use(DataWanitaRoute);
app.use(GalleryRoute);
app.use(ThemeRoute);
app.use('/images', express.static('public/images'));

app.listen(process.env.APP_PORT, () => {
  console.log("Server Running...", process.env.APP_PORT);
});
