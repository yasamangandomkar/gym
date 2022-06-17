import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            backgroundColor: "#ffa9a9",
            color: "#fff",
            borderRadius: "25px",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            backgroundColor: "#fcc757",
            color: "#fff",
            borderRadius: "25px",
            fontSize: "14px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        mb={3}
        textTransform="capitalize"
        fontSize="22px"
        mt={3}
        ml="21px"
        fontWeight="bold"
        color="#000"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
