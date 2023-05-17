import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:696232@alura.asyq3hs.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;