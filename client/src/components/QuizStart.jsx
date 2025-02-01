import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const QuizStart = ({ onStartQuiz }) => {
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
            Welcome to the Quiz
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 6, color: "text.secondary", textAlign: "center" }}
          >
            Test your knowledge with our interactive quiz. Are you ready to
            challenge yourself?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                onClick={onStartQuiz}
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: "1.2rem",
                  borderRadius: 50,
                }}
              >
                Start Quiz
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default QuizStart;
    