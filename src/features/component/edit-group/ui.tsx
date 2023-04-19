import { useComponentModel } from "entities/component";
import { GroupDirection } from "entities/component/domain";
import React from "react";
import { DropdownInput } from "shared/ui/DropdownInput";

const LIST = [
  { label: "HORIZONTAL", value: "column" },
  { label: "VERTICAL", value: "row" },
];

export const EditGroup = () => {
  const { updateSelectedComponent, selectedComponent } = useComponentModel();

  console.log(selectedComponent);

  const handleGroupUpdate = (direction: GroupDirection) => {
    updateSelectedComponent({ ...selectedComponent, direction });
  };

  return (
    <DropdownInput
      list={LIST}
      name="Ориентация группы"
      value={selectedComponent.direction}
      onChange={handleGroupUpdate}
    />
  );
};
