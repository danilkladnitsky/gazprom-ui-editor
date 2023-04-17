import React from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

type Props = {
  expanded: boolean;
  onClick: () => void;
};
export function ToggleArrow({ expanded, onClick }: Props) {
  return expanded ? (
    <KeyboardArrowDown onClick={onClick} />
  ) : (
    <KeyboardArrowUp onClick={onClick} />
  );
}
