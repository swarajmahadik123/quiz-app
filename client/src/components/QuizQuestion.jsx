import React from "react";
import { Box, Typography, Radio, FormControlLabel, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  width: "100%",
  margin: 0,
  marginBottom: theme.spacing(2),
  "& .MuiRadio-root": {
    padding: theme.spacing(1.5),
  },
  "& .MuiTypography-root": {
    width: "100%",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const QuizQuestion = ({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, sm: 4 },
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        bgcolor: "background.paper",
        width: "100%",
        minHeight: { xs: "auto", sm: 400 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 4, color: "text.primary", fontWeight: 500, flexShrink: 0 }}
      >
        {question && typeof question === "object"
          ? question.description
          : question}
      </Typography>

      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        {options && Array.isArray(options) && options.length > 0 ? (
          options.map((option) => (
            <StyledFormControlLabel
              key={option.id}
              value={option.id}
              control={
                <Radio
                  checked={selectedAnswer && selectedAnswer.id === option.id}
                  onChange={() => onAnswerSelect(option)}
                />
              }
              label={option.description}
            />
          ))
        ) : (
          <Typography color="error">No options available.</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default QuizQuestion;
