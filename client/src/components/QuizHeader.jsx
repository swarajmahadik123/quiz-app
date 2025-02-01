// Import the Box and Typography components from the Material-UI library
import { Box, Typography } from "@mui/material";

// Define a functional component called QuizHeader that takes in score and timeRemaining as props
const QuizHeader = ({ score, timeRemaining }) => {
  // Return a Box component that contains two Typography components
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mb: 3 }}>
      {/* First Typography component displays the score */}
      <Typography
        sx={{
          backgroundColor: "rgba(25, 118, 210, 0.1)",
          color: "#1976d2",
          px: 2,
          py: 1,
          borderRadius: 1,
          fontWeight: 500,
        }}
      >
        Score: {score}
      </Typography>
      {/* Second Typography component displays the time remaining */}
      <Typography
        sx={{
          backgroundColor: "rgba(156, 39, 176, 0.1)",
          color: "#9c27b0",
          px: 2,
          py: 1,
          borderRadius: 1,
          fontWeight: 500,
        }}
      >
        Time: {timeRemaining}
      </Typography>
    </Box>
  );
};

export default QuizHeader;
