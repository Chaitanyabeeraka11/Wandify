import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  name: { type: String, required: true },
  album: { type: String, required: true },
  image: { type: String, required: true },
  file: { type: String, required: true }, // This should be consistent
  duration: { type: String, required: true },
});

const Song = mongoose.models.song || mongoose.model("song", songSchema);
export default Song;
