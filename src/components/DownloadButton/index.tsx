import React, { ReactNode } from "react";
import { Button } from "@mui/material";

export interface DownloadButtonProps {
  path: string;
  children: ReactNode;
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
      sx={{
        background: "linear-gradient(45deg,#1D5B79, #468B97)",
      }}
      variant="contained"
      onClick={() => handleDownload()}
    >
      {props.children}
    </Button>
  );
};
