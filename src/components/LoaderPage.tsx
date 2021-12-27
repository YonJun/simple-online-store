import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LoaderPage() {
  return (
    <Box width="100%" position="absolute" top="0" left="0">
      <LinearProgress color="secondary" />
    </Box>
  );
}
