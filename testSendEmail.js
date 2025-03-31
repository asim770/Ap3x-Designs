const sendEmail = require("./sendEmail"); // Import the sendEmail function

const orderDetails = {
    items: [
        {
            name: "Custom T-Shirt 1",
            price: 300,
            image: "img/plane.png",
            quantity: 2,
        },
    ],
    total: 600,
};

sendEmail(orderDetails)
    .then(() => console.log("Email test completed!"))
    .catch((err) => console.error("Email test failed:", err));