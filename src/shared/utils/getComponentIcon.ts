import {
  Description,
  Edit,
  FormatListBulleted,
  List,
  Menu,
} from "@mui/icons-material";

export const getComponentIcon = (type: ComponentCode) => {
  switch (type) {
    case "form":
      return List;
    case "tabs":
      return Menu;
    case "group":
      return FormatListBulleted;
    case "page":
      return Description;
    case "element":
    default:
      return Edit;
  }
};
