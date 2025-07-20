import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ Add this test route
app.get('/products', (req, res) => {
  res.json([{ id: 1, name: 'Sample Product' }]);
});

// 🧩 Connect to MongoDB
mongoose.connect("mongodb+srv://Probal2311:Probal2311@probal0.gftxuv1.mongodb.net/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
