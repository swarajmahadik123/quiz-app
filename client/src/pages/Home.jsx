import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Container, CssBaseline } from "@mui/material";
import { fetchQuizData } from "../utils/api";
import QuizStart from "../components/QuizStart";
import QuizProgress from "../components/QuizProgress";
import QuizQuestion from "../components/QuizQuestion";
import QuizNavigation from "../components/QuizNavigation";
import QuizResult from "../components/QuizResult";
import Notification from "../components/Notification";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#34a853",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

const Home = () => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
  });

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadQuizData();
  }, []);

  const handleAnswerSelect = (option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (quizData?.questions?.length || 0) - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      if (Object.keys(selectedAnswers).length === quizData.questions.length) {
        setShowResult(true);
      } else {
        setNotification({
          open: true,
          message: "Please answer all questions before submitting.",
        });
      }
    }
  };

  const calculateScore = () => {
    return Object.values(selectedAnswers).filter((answer) => answer.is_correct)
      .length;
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  if (loading || !quizData) {
    return null;
  }

  const questions = quizData.questions;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const allQuestionsAnswered =
    Object.keys(selectedAnswers).length === questions.length;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!quizStarted ? (
        <QuizStart onStartQuiz={() => setQuizStarted(true)} />
      ) : showResult ? (
        <QuizResult
          score={calculateScore()}
          totalQuestions={questions.length}
        />
      ) : (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "background.default",
          }}
        >
          <Container maxWidth="md" sx={{ py: 4 }}>
            <QuizProgress
              progress={progress}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
            />
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              options={questions[currentQuestionIndex].options}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              onAnswerSelect={handleAnswerSelect}
            />
            <QuizNavigation
              onPrevious={handlePreviousQuestion}
              onNext={handleNextQuestion}
              isLastQuestion={isLastQuestion}
              allQuestionsAnswered={allQuestionsAnswered}
            />
          </Container>
        </Box>
      )}
      <Notification
        open={notification.open}
        message={notification.message}
        onClose={handleCloseNotification}
      />
    </ThemeProvider>
  );
};

export default Home;
