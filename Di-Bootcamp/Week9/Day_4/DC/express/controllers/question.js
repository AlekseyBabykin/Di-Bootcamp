const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let countQuestions = 0;
let score = 0;

const getQuestion = (req, res) => {
  if (countQuestions < triviaQuestions.length) {
    const nowQestion = triviaQuestions[countQuestions].question;
    res.json(nowQestion);
  } else {
    res.json({ msg: "Quiz copmlete gettttt" });
  }
};

const sentAnswer = (req, res) => {
  if (countQuestions < triviaQuestions.length) {
    const userAnswer = req.body.answer;
    if (
      userAnswer.toLowerCase() ===
      triviaQuestions[countQuestions].answer.toLowerCase()
    ) {
      score++;
    }
    countQuestions++;
    res.json({ msg: "Answer sumbitted" });
  } else {
    res.json({ msg: "Quiz copmlete posssrtt" });
  }
};

const getScore = (req, res) => {
  res.json({ score: score });
};

module.exports = {
  getQuestion,
  sentAnswer,
  getScore,
};
