import React from "react";

import { Header } from "shared/ui/Header";
import { Property } from "entities/properties";

import { NumberPropertyFields } from "./components/NumberPropertyFields";
import { StringPropertyFields } from "./components/StringPropertyFields";
import { DatePropertyFields } from "./components/DatePropertyFields";
import { Parameter, ParameterType } from "entities/parameter/domain";

type Props = {
  parameter: Parameter;
  onEdit: (dataSource: Parameter) => void;
};
export const EditParameterFields = ({ parameter, onEdit }: Props) => {
  const { name, properties, type } = parameter;

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
      case ParameterType.STRING:
        return (
          <StringPropertyFields
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
    <div>
      <Header>{name}</Header>
      {renderParameterFields()}
    </div>
  );
};
