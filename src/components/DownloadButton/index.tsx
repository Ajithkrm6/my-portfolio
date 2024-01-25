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

  return <Button onClick={() => handleDownload()}>{props.children}</Button>;
};
