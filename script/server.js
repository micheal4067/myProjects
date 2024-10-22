const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Send email using a library like Nodemailer
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.json({ message: 'Email sent successfully' });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


