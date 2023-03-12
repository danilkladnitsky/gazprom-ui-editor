import { create } from "zustand";

import { convertFileToJSON } from "shared/utils/convertJson";

export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
}

type ConfigurationSchema = JsonFile | null;

interface State {
  view: ConfigurationView;
  configuration: ConfigurationSchema;
}

interface Functions {
  changeView: (view: ConfigurationView) => void;
  loadConfiguration: (file: File) => void;
  toggleView: () => void;
}

type ConfigurationModel = Model<State, Functions>;

export const useAppConfigurationModel = create<ConfigurationModel>((set) => ({
  view: ConfigurationView.GUI_VIEW,
  configuration: null,
  changeView: (view) => set({ view }),
  loadConfiguration: async (file) => {
    set({ loadConfigurationStatus: "loading" });
    
    convertFileToJSON(file)
      .then((configuration) => {
        set({
          configuration,
          loadConfigurationStatus: "success",
        });
      })
      .catch(() => {
        set({ loadConfigurationStatus: "error" });
      });
  },
  toggleView: () => set((state) => {
    const view = state.view === ConfigurationView.GUI_VIEW
      ? ConfigurationView.TEXT_VIEW
      : ConfigurationView.GUI_VIEW;
    
    return { ...state, view };
  })
}));
