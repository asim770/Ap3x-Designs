const express = require("express");
const cors = require("cors"); // Import CORS middleware
const sendEmail = require("./sendEmail"); // Import the sendEmail function

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Define the /place-order endpoint
app.post("/place-order", async (req, res) => {
    const orderDetails = req.body; // Get order details from the request body

    // Log the order details (for testing)
    console.log("Order Details:", orderDetails);

    try {
        // Send email with order details
        await sendEmail(orderDetails);

        // Respond to the client
        res.status(200).json({ message: "Order placed successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);

        // Respond with an error message
        res.status(500).json({ message: "Failed to place the order. Please try again." });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});