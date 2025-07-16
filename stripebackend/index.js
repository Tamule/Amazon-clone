require('dotenv').config();
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("✅ Stripe backend is live.");
});


app.post("/create-checkout-session", async (req, res) => {
  const { basket } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: basket.map(item => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title, 
            images: [item.image], 
          },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: "http://127.0.0.1:3000/success",
      cancel_url: "http://127.0.0.1:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe session error:", error.message);
    res.status(500).json({ error: error.message });
  }
});


const PORT = 8080;
app.listen(PORT, () => console.log(`🚀 Server running at http://127.0.0.1:${PORT}`));
