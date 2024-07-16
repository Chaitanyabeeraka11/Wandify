import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

const addAlbum = async (req, res) => {
  try {
    const { name, bgColor } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.json({ message: "No image file provided" });
    }

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const newAlbum = new albumModel({
      name,
      bgColor,
      image: imageUpload.secure_url,
    });

    await newAlbum.save();
    res.json({ message: "Album added successfully" });
  } catch (error) {
    res.json({ message: "Error adding album", error: error.message });
  }
};

const listAlbum = async (req, res) => {
  // Implementation of listing albums
};

const removeAlbum = async (req, res) => {
  // Implementation of removing an album
};

export { addAlbum, listAlbum, removeAlbum };
