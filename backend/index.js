import express from "express";
import cors from "cors"; // Agar API dapat diakses dari luar domain
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import AuthRoute from "./routes/authRoute.js";
import UserRoute from "./routes/userRoute.js";
import GuestRoute from "./routes/GuestRoute.js";
import InvitationRoute from "./routes/invitationRoute.js";
import EventRoute from "./routes/eventRoute.js";
import CoupleRoute from "./routes/coupleRoute.js";
import DataPriaRoute from "./routes/dataPriaRoute.js";
import DataWanitaRoute from "./routes/dataWanitaRoute.js";
import GalleryRoute from "./routes/galleryRoute.js";
import ThemeRoute from "./routes/themeRoute.js";
dotenv.config();

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:5173' })); // credentials= agar client mengirim credentials, origin = domain yang diizinkkan untuk mengakses API (React+Vite)
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: 'auto'
    }
  })
)
app.use(express.json()); //-> agar menerima data dalam bentuk JSON
app.use(AuthRoute);
app.use(UserRoute);
app.use(GuestRoute);
app.use(InvitationRoute);
app.use(EventRoute);
app.use(CoupleRoute);
app.use(DataPriaRoute);
app.use(DataWanitaRoute);
app.use(GalleryRoute);
app.use(ThemeRoute);

app.use(express.static("public"));


app.listen(process.env.APP_PORT, () => {
  console.log("Server Running...", process.env.APP_PORT);
});
