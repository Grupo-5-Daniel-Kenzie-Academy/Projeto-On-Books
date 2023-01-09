import { useState } from "react";
import { Rating, Box } from "@mui/material";
import { Star } from "@mui/icons-material";

const labels: { [index: string]: string } = {
  1: "1 Estrela",
  2: "2 Estrelas",
  3: "3 Estrelas",
  4: "4 Estrelas",
  5: "5 Estrelas",
};

/* export function Ranking() {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  return (
    <Box>
      <Rating
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => setHover(newHover)}
        emptyIcon={<Star/>}
        style={{ opacity: 0.5 }}
        fontSize="inherit"
      ></Rating>
      {value !== null && <Box>{labels[hover !== -1 ? hover : value]}</Box>}
    </Box>
  );
}
 */