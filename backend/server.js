import app from "./app.js";
import cloudinary from "cloudinary";

// Replace these values with your actual Cloudinary credentials and port number
const CLOUDINARY_CLOUD_NAME = "db0k9ycwy";
const CLOUDINARY_API_KEY = "147893728633275";
const CLOUDINARY_API_SECRET = "Ry8mLheOC4AnAY6VjgkcxEHHJEU";
const PORT = 4000; // or any port number you prefer

cloudinary.v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
