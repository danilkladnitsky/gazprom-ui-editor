import React from "react";

import { ComponentElement } from "entities/component";
import { ParameterType } from "entities/parameter";
import { NumberInput } from "shared/ui/Configuration/Parameters/NumberInput";
import { DateInput } from "shared/ui/Configuration/Parameters/DateInput";
import { StringInput } from "shared/ui/Configuration/Parameters/StringInput";
import { Checkbox } from "shared/ui/Configuration/Parameters/Checkbox";

export const ElementComponent = (element: ComponentElement) => {
  switch (element.type) {
    case ParameterType.NUMBER:
      return <NumberInput element={element} />;
    case ParameterType.DATE:
      return <DateInput element={element} />;
    case ParameterType.CHECKBOX:
      return <Checkbox element={element} />;
    default:
      return <StringInput element={element} />;
  }
};
