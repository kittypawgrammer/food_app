const express = require('express');
const healthRoutes = require('./health.routes');

const router = express.Router();

router.use('/health', healthRoutes);
// Next lessons: router.use('/auth', authRoutes); router.use('/restaurants', ...);

module.exports = router;
