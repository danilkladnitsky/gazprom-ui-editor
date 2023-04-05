import React from "react";

import { useAppConfigurationModel } from "entities/app-configuration";
import { RecursiveTree } from "features/configuration/render/render-component-tree";

import FormElement from "shared/ui/FormElement/FormElement";

function EditForm() {
  const { configuration } = useAppConfigurationModel();

  if (!configuration) {
    return "Нечего отображать";
  }

  return <RecursiveTree tree={configuration} template={FormElement} />;
}

export default EditForm;
