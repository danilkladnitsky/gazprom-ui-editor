import {
  Description,
  Menu,
  WebAsset,
  Article,
  CheckBox,
  CalendarToday,
  Numbers,
  TextFormat,
} from "@mui/icons-material";
import { Component, ComponentElement } from "entities/component/domain";
import { ParameterType } from "entities/parameter/domain";

export const getComponentIcon = (component: Component) => {
  switch (component.code) {
    case "form":
      return WebAsset;
    case "tabs":
      return Menu;
    case "group":
      return Article;
    case "page":
      return Description;
    case "element":
    default:
      return getElementIcon(component);
  }
};

const getElementIcon = (element: ComponentElement) => {
  switch (element.dataSource.type) {
    case ParameterType.CHECKBOX:
      return CheckBox;
    case ParameterType.DATE:
      return CalendarToday;
    case ParameterType.NUMBER:
      return Numbers;
    case ParameterType.STRING:
    default:
      return TextFormat;
  }
};
