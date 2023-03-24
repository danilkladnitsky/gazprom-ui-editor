import { create } from "zustand";
import fileDownload from "js-file-download";

import { ComponentTree } from "entities/component";
import { Parameter } from "entities/parameter";
import { createJSONStorage, persist } from "zustand/middleware";

export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
}

type ConfigurationSchema = JsonFile | null;

interface State {
  view: ConfigurationView;
  configuration: ComponentTree | null;
}

interface Functions {
  changeView: (view: ConfigurationView) => void;
  uploadConfiguration: (config: ComponentTree) => void;
  toggleView: () => void;
  downloadConfiguration: () => void;
  updateConfiguration: (data: ComponentTree) => void;
  generateConfigurationFromParameters: (parameters: Parameter[]) => void;
}

type ConfigurationModel = Model<State, Functions>;

export const useAppConfigurationModel = create(persist<ConfigurationModel>((set, get) => ({
    view: ConfigurationView.GUI_VIEW,
    configuration: null,
    changeView: (view) => set({ view }),
    downloadConfiguration: async () => {
      const data = get().configuration;

      const { name } = data as ComponentTree;
      const fileName = `${name}.json`;

      fileDownload(JSON.stringify(data), fileName);
    },
    updateConfiguration: (configuration) =>
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
      set({
        configuration: {
          code: "form",
          name: "Форма по умолчанию",
          items: parameters,
        },
      });
    },
}),   {
      name: "configuration-storage",
      storage: createJSONStorage(() => localStorage),
    }));
