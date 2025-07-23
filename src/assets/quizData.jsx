const questions = [
  {
    id: 1,
    question: "What is 5 + 3?",
    options: [6, 8, 9],
    answer: 8,
    explanation: "5 + 3 = 8"
  },
  {
    id: 2,
    question: "What is 9 - 4?",
    options: [5, 6, 7],
    answer: 5,
    explanation: "9 - 4 = 5"
  },
  {
    id: 3,
    question: "What is 6 × 2?",
    options: [12, 8, 10],
    answer: 12,
    explanation: "6 × 2 = 12"
  },
  {
    id: 4,
    question: "What is 15 ÷ 3?",
    options: [5, 4, 6],
    answer: 5,
    explanation: "15 ÷ 3 = 5"
  },
  {
    id: 5,
    question: "What is the square of 4?",
    options: [16, 12, 8],
    answer: 16,
    explanation: "4² = 16"
  },
  {
    id: 6,
    question: "What is 10 + 7?",
    options: [16, 18, 17],
    answer: 17,
    explanation: "10 + 7 = 17"
  },
  {
    id: 7,
    question: "What is 20 - 9?",
    options: [11, 10, 12],
    answer: 11,
    explanation: "20 - 9 = 11"
  },
  {
    id: 8,
    question: "What is 3 × 5?",
    options: [15, 10, 20],
    answer: 15,
    explanation: "3 × 5 = 15"
  },
  {
    id: 9,
    question: "What is 8 ÷ 2?",
    options: [2, 4, 5],
    answer: 4,
    explanation: "8 ÷ 2 = 4"
  },
  {
    id: 10,
    question: "What is 7 + 6?",
    options: [14, 13, 12],
    answer: 13,
    explanation: "7 + 6 = 13"
  },
  {
    id: 11,
    question: "What is 4 + 7?",
    options: [11, 10, 12],
    answer: 11,
    explanation: "4 + 7 = 11"
  },
  {
    id: 12,
    question: "What is 14 − 6?",
    options: [7, 8, 9],
    answer: 8,
    explanation: "14 − 6 = 8"
  },
  {
    id: 13,
    question: "What is 3 × 4?",
    options: [7, 12, 9],
    answer: 12,
    explanation: "3 × 4 = 12"
  },
  {
    id: 14,
    question: "What is 18 ÷ 3?",
    options: [6, 5, 7],
    answer: 6,
    explanation: "18 ÷ 3 = 6"
  },
  {
    id: 15,
    question: "What is the square of 5?",
    options: [20, 25, 30],
    answer: 25,
    explanation: "5² = 25"
  },
  {
    id: 16,
    question: "What is 9 + 8?",
    options: [16, 17, 18],
    answer: 17,
    explanation: "9 + 8 = 17"
  },
  {
    id: 17,
    question: "What is 21 − 9?",
    options: [11, 12, 13],
    answer: 12,
    explanation: "21 − 9 = 12"
  },
  {
    id: 18,
    question: "What is 7 × 3?",
    options: [20, 21, 24],
    answer: 21,
    explanation: "7 × 3 = 21"
  },
  {
    id: 19,
    question: "What is 16 ÷ 4?",
    options: [2, 3, 4],
    answer: 4,
    explanation: "16 ÷ 4 = 4"
  },
  {
    id: 20,
    question: "What is 8²?",
    options: [64, 48, 56],
    answer: 64,
    explanation: "8² = 64"
  },
  {
    id: 21,
    question: "What is 11 + 6?",
    options: [16, 17, 18],
    answer: 17,
    explanation: "11 + 6 = 17"
  },
  {
    id: 22,
    question: "What is 20 − 5?",
    options: [14, 15, 16],
    answer: 15,
    explanation: "20 − 5 = 15"
  },
  {
    id: 23,
    question: "What is 5 × 5?",
    options: [20, 25, 30],
    answer: 25,
    explanation: "5 × 5 = 25"
  },
  {
    id: 24,
    question: "What is 24 ÷ 6?",
    options: [3, 4, 5],
    answer: 4,
    explanation: "24 ÷ 6 = 4"
  },
  {
    id: 25,
    question: "What is 6³?",
    options: [36, 216, 126],
    answer: 216,
    explanation: "6³ = 216"
  },
  {
    id: 26,
    question: "What is 13 + 7?",
    options: [19, 20, 21],
    answer: 20,
    explanation: "13 + 7 = 20"
  },
  {
    id: 27,
    question: "What is 17 − 8?",
    options: [8, 9, 10],
    answer: 9,
    explanation: "17 − 8 = 9"
  },
  {
    id: 28,
    question: "What is 4 × 6?",
    options: [20, 24, 26],
    answer: 24,
    explanation: "4 × 6 = 24"
  },
  {
    id: 29,
    question: "What is 27 ÷ 3?",
    options: [8, 9, 10],
    answer: 9,
    explanation: "27 ÷ 3 = 9"
  },
  {
    id: 30,
    question: "What is 9²?",
    options: [81, 72, 99],
    answer: 81,
    explanation: "9² = 81"
  },
  {
    id: 31,
    question: "What is 15 + 4?",
    options: [18, 19, 20],
    answer: 19,
    explanation: "15 + 4 = 19"
  },
  {
    id: 32,
    question: "What is 22 − 7?",
    options: [14, 15, 16],
    answer: 15,
    explanation: "22 − 7 = 15"
  },
  {
    id: 33,
    question: "What is 8 × 7?",
    options: [54, 56, 58],
    answer: 56,
    explanation: "8 × 7 = 56"
  },
  {
    id: 34,
    question: "What is 30 ÷ 5?",
    options: [5, 6, 7],
    answer: 6,
    explanation: "30 ÷ 5 = 6"
  },
  {
    id: 35,
    question: "What is the cube root of 27?",
    options: [2, 3, 4],
    answer: 3,
    explanation: "³√27 = 3"
  },
  {
    id: 36,
    question: "What is 12 + 9?",
    options: [20, 21, 22],
    answer: 21,
    explanation: "12 + 9 = 21"
  },
  {
    id: 37,
    question: "What is 18 − 9?",
    options: [8, 9, 10],
    answer: 9,
    explanation: "18 − 9 = 9"
  },
  {
    id: 38,
    question: "What is 7 × 8?",
    options: [54, 56, 58],
    answer: 56,
    explanation: "7 × 8 = 56"
  },
  {
    id: 39,
    question: "What is 36 ÷ 6?",
    options: [5, 6, 7],
    answer: 6,
    explanation: "36 ÷ 6 = 6"
  },
  {
    id: 40,
    question: "What is 10²?",
    options: [90, 100, 110],
    answer: 100,
    explanation: "10² = 100"
  }
];
    
export default questions;