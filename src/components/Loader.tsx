import React from "react";
import { useTheme } from "@mui/material/styles";
import { LoaderIcon } from "./../icons/LoaderIcon";
import { Box } from "@mui/material";

export function Loader() {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent="center">
      <LoaderIcon width={100} fill={theme.palette.primary.main} />
    </Box>
  );
}
