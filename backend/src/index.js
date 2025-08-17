import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

// Load all routes
console.log("Loading routes...");
try {
    const authRoutes = await import("./routes/auth.route.js");
    app.use("/api/auth", authRoutes.default);
    console.log("✅ Auth routes loaded");

    const productRoutes = await import("./routes/product.route.js");
    app.use("/api/products", productRoutes.default);
    console.log("✅ Product routes loaded");

    const cartRoutes = await import("./routes/cart.route.js");
    app.use("/api/cart", cartRoutes.default);
    console.log("✅ Cart routes loaded");

    const couponRoutes = await import("./routes/coupon.route.js");
    app.use("/api/coupons", couponRoutes.default);
    console.log("✅ Coupon routes loaded");

    const paymentRoutes = await import("./routes/payment.route.js");
    app.use("/api/payments", paymentRoutes.default);
    console.log("✅ Payment routes loaded");

    const analyticsRoutes = await import("./routes/analytics.route.js");
    app.use("/api/analytics", analyticsRoutes.default);
    console.log("✅ Analytics routes loaded");
    
    console.log("✅ All routes loaded successfully");
} catch (error) {
    console.error("❌ Error loading routes:", error.message);
    process.exit(1);
}

// Production setup
if(process.env.NODE_ENV === "production") {
    console.log("Setting up production static files...");
    try {
        app.use(express.static(path.join(__dirname, "../frontend/dist")));
        console.log("✅ Static files configured");
        
        // Use a more specific pattern for SPA routing
        app.get(/^(?!\/api).*/, (req, res) => {
            res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
        });
        console.log("✅ SPA routing configured");
    } catch (error) {
        console.error("❌ Error setting up production routes:", error.message);
    }
} else {
    console.log("Running in development mode");
}

app.listen(PORT, async () => {
    console.log("Server is running on port:" + PORT);
    try {
        const { connectDB } = await import("./lib/db.js");
        await connectDB();
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Error connecting to database:", error.message);
    }
});