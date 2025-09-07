const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(express.json());

// 路由
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Node.js App Deployed on Vercel!',
    timestamp: new Date().toISOString(),
    status: 'running'
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

app.post('/api/echo', (req, res) => {
  res.json({
    received: req.body,
    message: 'Data received successfully'
  });
});

// 健康检查
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Visit: http://localhost:${PORT}`);
});

module.exports = app;