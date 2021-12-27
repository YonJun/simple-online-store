import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
interface ListItemProps {
  title: string;
  onClick: () => void;
}
export function ListItem({ title, onClick }: ListItemProps) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        ":hover": {
          backgroundColor: "rgba(196, 196, 196, 0.3)",
        },
      }}>
      <Typography variant="body2" sx={{ maxWidth: "80%" }}>
        {title}
      </Typography>
      <IconButton
        aria-label="delete"
        size="small"
        color="error"
        onClick={onClick}>
        <CloseIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
