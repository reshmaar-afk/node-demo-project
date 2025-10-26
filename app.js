// app.js
const express = require('express');
const app = express();

// Hardcoded port
const PORT = 4030;

// Dummy enterprise data
const enterpriseData = {
  company: 'TechNova Industries',
  industry: 'Information Technology',
  employees: 2500,
  locations: ['New York', 'London', 'Bangalore', 'Tokyo'],
  revenue: '$500M',
  contact: {
    email: 'info@technova.com',
    phone: '+1-800-555-0192'
  }
};

// GET API endpoint
app.get('/api/enterprise', (req, res) => {
  res.json(enterpriseData);
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});