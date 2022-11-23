const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/api/test', (req, res) => {
    res.status(200).json({"msg": "I am alive!"});
})

app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}/ !`);
})
