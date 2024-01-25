import { Typography } from "@mui/material";
import React, {
  useState,
  ReactNode,
  FC,
  useEffect,
  useRef,
  createRef,
} from "react";
import { Grid } from "@mui/material";

export interface TypeWritterProps {
  speed: number;
  text: ReactNode;
  color?: string;
  backgroundGradient?: () => void;
  fontSize?: number;
}

export const TypeWritter: FC<TypeWritterProps> = ({
  speed,
  text,
  color,
  backgroundGradient,
  ...props
}) => {
  const [writtingText, setWrittingText] = useState("");
  const [index, setIndex] = useState(0);
  // const audioRef = createRef<HTMLAudioElement>();
  useEffect(() => {
    if (typeof text === "string" && index < text.length) {
      const timeout = setTimeout(() => {
        setWrittingText((prev: string) => prev + text[index]);
        setIndex((prev: number) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [text, speed, index]);

  return (
    <Grid>
      <Typography
        sx={{
          background: "linear-gradient(45deg,#1D5B79, #84D2C5)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
        }}
        fontSize={props.fontSize}
        color={color}
      >
        {writtingText}
      </Typography>
    </Grid>
  );
};
