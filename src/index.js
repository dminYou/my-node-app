const express = require('express');
const serverless = require('serverless-http');
const app = express();

// 中间件
app.use(express.json());

// 路由
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Node.js App Deployed on Netlify!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);
});

app.post('/api/echo', (req, res) => {
  res.json({
    received: req.body,
    message: 'Data received successfully'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    uptime: process.uptime(),
    environment: process.env.NODE_ENV 
  });
});

// Netlify Functions 适配
const handler = serverless(app);

// 导出供 Netlify 使用
module.exports = app;
module.exports.handler = handler;