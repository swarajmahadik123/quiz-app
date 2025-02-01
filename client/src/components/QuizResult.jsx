import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";

const QuizResult = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              color: "primary.main",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Quiz Completed!
          </Typography>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <CircularProgress
              variant="determinate"
              value={percentage}
              size={120}
              thickness={4}
              sx={{ color: "secondary.main" }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" component="div" color="text.secondary">
                {`${Math.round(percentage)}%`}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h5"
            sx={{ mb: 3, color: "text.primary", textAlign: "center" }}
          >
            Your Score: {score}/{totalQuestions}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6, color: "text.secondary", textAlign: "center" }}
          >
            {percentage >= 80
              ? "Excellent job! You're a quiz master!"
              : percentage >= 60
              ? "Great effort! Keep learning and improving!"
              : "Good try! There's room for improvement. Keep practicing!"}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                onClick={() => window.location.reload()}
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: "1.2rem",
                  borderRadius: 50,
                }}
              >
                Try Again
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default QuizResult;
