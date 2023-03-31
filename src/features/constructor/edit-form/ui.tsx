import React, { ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useAppConfigurationModel } from "entities/app-configuration";
import { RecursiveTree } from "features/configuration/render/render-component-tree";

import FormElement from "shared/ui/FormElement/FormElement";

function EditForm() {
  const { configuration } = useAppConfigurationModel();

  if (!configuration) {
    return "Нечего отображать";
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <RecursiveTree tree={configuration} template={FormElement} />
    </DndProvider>
  );
}

type ItemProps = {
  name: string;
};

function Item({ name }: ItemProps) {
  return <div>{name}</div>;
}

function ItemGroup({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default EditForm;
