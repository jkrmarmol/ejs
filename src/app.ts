import express, { NextFunction, Response, Request } from "express";
import expressLayout from "express-ejs-layouts";
import path from "path";

const app = express();
const PORT = 8923;

app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index");
});

app.get("/login", (req: Request, res: Response, next: NextFunction) => {
  res.render("login");
});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
