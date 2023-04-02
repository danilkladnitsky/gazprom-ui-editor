import React from "react";
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

export default EditForm;
