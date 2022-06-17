import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../../components/Exercises";
import HeroBanner from "../../components/HeroBanner";
import SearchExcercess from "../../components/SearchExcercess";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExcercess
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />

      <Exercises
        bodyPart={bodyPart}
        setBodyParts={setBodyPart}
        setExercises={setExercises}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
