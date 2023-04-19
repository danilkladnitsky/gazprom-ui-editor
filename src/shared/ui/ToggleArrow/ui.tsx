import React from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

type Props = {
  expanded: boolean;
  onClick: () => void;
  color?: string;
  className?: string;
};
export function ToggleArrow({ expanded, onClick, color, className }: Props) {
  return expanded ? (
    <KeyboardArrowDown
      onClick={onClick}
      style={{ color }}
      className={className}
    />
  ) : (
    <KeyboardArrowUp
      onClick={onClick}
      style={{ color }}
      className={className}
    />
  );
}
