import React, { useEffect, useState } from "react";
import { Typography, Box, TextField, Button, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExcercess = ({ setBodyPart, setExercises, bodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        fontWeight="700"
        textAlign="center"
        mb="50px"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          sx={{
            input: {
              position: "relative",
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
              outline: "none",
            },
            width: {
              lg: "800px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
        ></TextField>
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0px",
          }}
        >
          search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {/* <HorizontalScrollbar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          isBodyParts
        /> */}
      </Box>
    </Stack>
  );
};

export default SearchExcercess;
