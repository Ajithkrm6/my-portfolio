import React, { ReactNode } from "react";
import { Button, SxProps, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export interface DownloadButtonProps {
  path: string;
  children: ReactNode;
  sx?: SxProps;
  textSx?: SxProps;
}

export const DownloadButton = (props: DownloadButtonProps) => {
  const handleDownload = () => {
    const filePath = props.path;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "AjithKumarCv.pdf";
    link.click();
  };

  return (
    <Button
      sx={{ ...props.sx }}
      variant="contained"
      onClick={() => handleDownload()}
    >
      <Typography sx={{ ...props.textSx }}> {props.children}</Typography>
      <FileDownloadOutlinedIcon sx={{ color: "#000000", paddingLeft: "3px" }} />
    </Button>
  );
};
