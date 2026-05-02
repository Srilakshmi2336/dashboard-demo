import { Select, MenuItem, Box, Typography } from "@mui/material";

function FilterBar({ setLimit }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography variant="h6">Analytics Dashboard</Typography>

      <Select
        defaultValue={5}
        onChange={(e) => setLimit(e.target.value)}
      >
        <MenuItem value={5}>Top 5</MenuItem>
        <MenuItem value={10}>Top 10</MenuItem>
        <MenuItem value={"all"}>All</MenuItem>
      </Select>
    </Box>
  );
}

export default FilterBar;