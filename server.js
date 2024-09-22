const express = require('express');
const app = express();
const cors = require('cors');



// Middleware Connections
app.use(cors())
app.use(express.json())


// Routes
app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (
          !highest_alphabet ||
          item.toUpperCase() > highest_alphabet.toUpperCase()
        ) {
          highest_alphabet = item;
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "sa",
      email: "vbnm",
      roll_number: "20BEC0215",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    });
  });

// Connection
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})