import express from 'express';
import path from 'path'
const __dirname = path.resolve()
const app = express()
app.get('/', (req, res) => {
    console.log("Hello World!")
    res.send('Hello World!')
})

app.get('/weather', (req, res) => {
    console.log("Weather Update!")
    res.send({
        city: 'Beijing',
    tempInC: '34',
    humidity: '56',
  });
})
app.get('/weather1', (req, res) => {
    console.log("Weather Update!")
  res.send({
    city: 'Beijing',
    tempInC: '34',
    humidity: '56',
});
let city = req.params.city;
console.log(city)
})

app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})