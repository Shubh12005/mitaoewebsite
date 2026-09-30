const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok'
  });
});

// Admission enquiry API endpoint
app.post('/api/enquiry', (req, res) => {
  const {
    fullName,
    mobileNumber,
    email,
    percentage,
    entranceExam,
    preferredProgram,
    city,
    message
  } = req.body;

  // Basic validation
  if (!fullName || !mobileNumber || !email || !preferredProgram) {
    return res.status(400).json({
      status: 'error',
      message: 'Please fill in all required fields.'
    });
  }

  // Mobile number validation (10 digits)
  const phoneRegex = /^[6-9]\d{9}$/;
  const sanitizedPhone = String(mobileNumber).replace(/\D/g, '');
  if (!phoneRegex.test(sanitizedPhone)) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide a valid 10-digit Indian mobile number.'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide a valid email address.'
    });
  }

  console.log(`[Admission Enquiry Received] ${new Date().toISOString()} - ${fullName} (${email}, ${mobileNumber}) for ${preferredProgram}`);

  return res.status(200).json({
    status: 'success',
    message: 'Thank you! Our admission team will contact you soon.'
  });
});

// 404 fallback handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`MITAOE Admission Cell Portal running at:`);
  console.log(`http://localhost:${PORT}`);
  console.log(`Health Check: http://localhost:${PORT}/api/health`);
  console.log(`====================================================`);
});
