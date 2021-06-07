var Quiz = {
    Questions: [],
    UnsortedQuestions: [],
    QuestionSequence: [0,1,2,3,4,5],
    QuestionID: 0,
    QuestionNumber: 0,
};

for(let i = Quiz.QuestionSequence.length -1; i > -1; i--){
    const j = Math.floor(Math.random() * i)
    const temp = Quiz.QuestionSequence[i]
    Quiz.QuestionSequence[i] = Quiz.QuestionSequence[j]
    Quiz.QuestionSequence[j] = temp
}

//Questions before given random order
Quiz.UnsortedQuestions[0] = "What is the name for the Jewish New Year?";
Quiz.UnsortedQuestions[1] = "How many blue stripes are there on the U.S. flag?";
Quiz.UnsortedQuestions[2] = "Which one of these characters is not friends with Harry Potter?";
Quiz.UnsortedQuestions[3] = "What is the color of Donald Duck’s bowtie?";
Quiz.UnsortedQuestions[4] = "What was the name of the band Lionel Richie was a part of?";
Quiz.UnsortedQuestions[5] = "Which animal does not appear in the Chinese zodiac?";

var Seq = Quiz.QuestionSequence;

//Questions with random sequence
Quiz.Questions[Seq[0]] = "What is the name for the Jewish New Year?";
Quiz.Questions[Seq[1]] = "How many blue stripes are there on the U.S. flag?";
Quiz.Questions[Seq[2]] = "Which one of these characters is not friends with Harry Potter?";
Quiz.Questions[Seq[3]] = "What is the color of Donald Duck’s bowtie?";
Quiz.Questions[Seq[4]] = "What was the name of the band Lionel Richie was a part of?";
Quiz.Questions[Seq[5]] = "Which animal does not appear in the Chinese zodiac?";

Quiz.QuestionID = Quiz.UnsortedQuestions.indexOf(Quiz.Questions[Quiz.QuestionNumber]);
document.getElementById("QuestionText").innerHTML = Quiz.Questions[Quiz.QuestionNumber] + " Question ID: " + Quiz.QuestionID;

document.getElementById("QuestionNumber").innerHTML = " Question: " + (Quiz.QuestionNumber) + 1;