import { create } from "zustand";
import fileDownload from "js-file-download";

import { ComponentTree } from "entities/component";
import { Parameter } from "entities/parameter";

export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
}

type ConfigurationSchema = JsonFile | null;

interface State {
  view: ConfigurationView;
  configuration: ComponentTree;
}

interface Functions {
  changeView: (view: ConfigurationView) => void;
  uploadConfiguration: (config: ConfigurationSchema) => void;
  toggleView: () => void;
  downloadConfiguration: () => void;
  updateConfiguration: (data: ConfigurationSchema) => void;
  generateConfigurationFromParameters: (parameters: Parameter[]) => void;
}

type ConfigurationModel = Model<State, Functions>;

export const useAppConfigurationModel = create<ConfigurationModel>(
  (set, get) => ({
    view: ConfigurationView.GUI_VIEW,
    configuration: null,
    changeView: (view) => set({ view }),
    downloadConfiguration: async () => {
      const data = get().configuration;

      const { name } = data as ComponentTree;
      const fileName = `${name}.json`;

      fileDownload(JSON.stringify(data), fileName);
    },
    updateConfiguration: (configuration: ConfigurationSchema) =>
      set({ configuration }),
    uploadConfiguration: async (configuration) => {
      set({ configuration });
    },
    toggleView: () =>
      set((state) => {
        const view =
          state.view === ConfigurationView.GUI_VIEW
            ? ConfigurationView.TEXT_VIEW
            : ConfigurationView.GUI_VIEW;

        return { ...state, view };
      }),
    generateConfigurationFromParameters: (parameters: Parameter[]) => {
      set({configuration: {code: "form", items: parameters}})
    }
  })
);
