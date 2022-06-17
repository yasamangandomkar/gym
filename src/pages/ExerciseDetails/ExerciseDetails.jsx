import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail";
// import ExerciseVideo from "../../components/ExerciseVideo";
// import SimilarExercises from "../../components/SimilarExercises";
import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/FetchData";
const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  // const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  // const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const fetchExercisesData = async () => {
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";

    const exerciseDetailData = await fetchData(
      `${exerciseDbUrl}/exercises/exercise/${id}`,
      exerciseOptions
    );
    console.log(exerciseDetailData);
    setExerciseDetail(exerciseDetailData);

    const exerciseVideosData = await fetchData(
      `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
      youtubeOptions
    );
    setExerciseVideo(exerciseVideosData.contents);

    // const targetMuscleExercisesData = await fetchData(
    //   `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
    //   exerciseOptions
    // );
    // setTargetMuscleExercises(targetMuscleExercisesData);

    // const equimentExercisesData = await fetchData(
    //   `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
    //   exerciseOptions
    // );
    // setEquipmentExercises(equimentExercisesData);
  };
  useEffect(() => {
    // window.scrollTo({ top: 0, behavior: "smooth" });

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      {/* <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
      {/* <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />  */}
    </Box>
  );
};

export default ExerciseDetails;
