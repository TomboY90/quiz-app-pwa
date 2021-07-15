const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Quiz App');
})

app.post('/quiz', (req, res) => {
  const options = {
    uri: "https://opentdb.com/api.php",
    qs: {
      amount: 10
    }
  };

  if (req.body) {
    for (const [key, value] of Object.entries(req.body)) {
      options.qs[key] = value;
    }
  }

  request(options, (err, response, body) => {
    if (err) {
      res.status(500).json({
        success: false,
        data: [],
        message: 'Request to Quiz API fail'
      })
    }

    const data = JSON.parse(body);
    const quizes = data.results;

    quizes.forEach((quiz) => {
      if (quiz.type !== 'boolean') {
        quiz.incorrect_answers = [quiz.correct_answer, ...quiz.incorrect_answers].sort();
      }
    })

    res.status(200).json({
      success: true,
      data: data.results,
      message: 'Request Success'
    });
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`)
})