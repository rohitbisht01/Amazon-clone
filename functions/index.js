const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "pk_test_51JW08LSHUECH8zeWoEjfQyXypObqUkTwohEmJuwbWzEdQ7oPnc9Wc5vG2bXO7Mje7sgAU9tb0FpiNRm3cDazmuRT00kgdz7uka"
);

// API

//  App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async(request, response) => {
    const total = request.query.total;

    console.log("payment request received >> ", total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "inr",
    });

    // OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

//  http://localhost:5001/clone-ceacd/us-central1/api