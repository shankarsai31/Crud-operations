const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password'
  }
});

router.post('/sendEmail', async (req, res) => {
  try {
    const { data } = req.body;
    const mailOptions = {
      from: 'shankarsai31@gmail.com',
      to: 'info@redpositive.in',
      subject: 'Data from CRUDS Application',
      text: JSON.stringify(data)
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});