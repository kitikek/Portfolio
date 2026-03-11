const express = require('express');
const cors = require('cors');
const PORT = 3000;

const portfolioRoutes = require('./routes/portfolio.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', portfolioRoutes);

app.listen(PORT, () => {
    console.log('Server running on port 3000');
});
