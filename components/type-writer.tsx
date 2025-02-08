"use client";
import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)`
  &.typewriter-effect {
    display: flex;
    justify-content: center;
    font-family: cursive;
  }

  &.typewriter-effect > .text {
    max-width: 0;
    animation: typing 3s steps(var(--characters)) 1 forwards;
    white-space: nowrap;
    overflow: hidden;
  }

  &.typewriter-effect:after {
    content: " |";
    animation: blink 1s infinite;
    animation-timing-function: step-end;
  }

  @keyframes typing {
    75%,
    100% {
      max-width: calc(var(--characters) * 1ch);
    }
  }

  @keyframes blink {
    0%,
    75%,
    100% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
  }

  @media (max-width: 1920px) {
    &.typewriter-effect {
      font-size: 4rem;
    }
  }

  @media (max-width: 750px) {
    &.typewriter-effect {
      font-size: 2rem;
    }
  }
`;

interface CustomStyles extends React.CSSProperties {
  "--characters": number | string;
}

function Typewriter() {
  const text = "José Bonança Pedreira";

  const styles: CustomStyles = {
    "--characters": text.length,
  };

  return (
    <StyledBox className="typewriter-effect">
      <Box className="text" id="typewriter-text" style={styles}>
        {text}
      </Box>
    </StyledBox>
  );
}

export default Typewriter;
