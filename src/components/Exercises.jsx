import { Box, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import Pagination from "@mui/material/Pagination";

import ExersicesCard from "./ExerciseCard";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  // Pagination
  // const indexOfLastExercise = currentPage * exercisesPerPage;
  // const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // const currentExercises = exercises.slice(
  //   indexOfFirstExercise,
  //   indexOfLastExercise
  // );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const fetchExercisesData = async () => {
    let exercisesData = [];

    if (bodyPart === "all") {
      exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
    } else {
      exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOptions
      );
    }

    setExercises(exercisesData);
  };
  useEffect(() => {
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div>
      <Box className="box" p="20px" mt="50px" sx={{ mt: { lg: "110px" } }}>
        <Typography variant="h3" mb="46px">
          Showing Results
        </Typography>
        <Stack direction="row" className="exercise-card">
          {exercises?.slice(0, 4).map((exercise, index) => (
            <ExersicesCard exercise={exercise} key={index} />
          ))}
        </Stack>
        <Stack spacing={2}>
          {exercises.length > 9 && (
            <Pagination
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
            />
          )}
        </Stack>
      </Box>
    </div>
  );
};

export default Exercises;
