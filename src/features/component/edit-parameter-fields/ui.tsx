import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Header } from "shared/ui/Header";
import { Property } from "entities/properties";

import { NumberPropertyFields } from "./components/NumberPropertyFields";
import { StringPropertyFields } from "./components/StringPropertyFields";
import { DatePropertyFields } from "./components/DatePropertyFields";
import { Parameter, ParameterType } from "entities/parameter/domain";
import { TextareaPropertyFields } from "./components/TextareaPropertyFields";

type Props = {
  parameter: Parameter;
  onEdit: (dataSource: Parameter) => void;
};
export const EditParameterFields = ({ parameter, onEdit }: Props) => {
  const { name, properties, type } = parameter;
  const [parent] = useAutoAnimate();

  const handleParameterUpdate = (properties: Property) => {
    onEdit({ ...parameter, properties });
  };

  const renderParameterFields = () => {
    switch (type) {
      case ParameterType.NUMBER:
        return (
          <NumberPropertyFields
            properties={properties}
            onChange={handleParameterUpdate}
          />
        );
      case ParameterType.TEXT:
        return (
          <StringPropertyFields
            properties={properties}
            onChange={handleParameterUpdate}
          />
        );
      case ParameterType.TEXTAREA:
        return (
          <TextareaPropertyFields
            properties={properties}
            onChange={handleParameterUpdate}
          />
        );
      case ParameterType.DATE:
        return (
          <DatePropertyFields
            properties={properties}
            onChange={handleParameterUpdate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div ref={parent}>
      <Header>{name}</Header>
      {renderParameterFields()}
    </div>
  );
};
