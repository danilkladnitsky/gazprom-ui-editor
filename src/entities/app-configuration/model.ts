import { convertFileToJSON } from "shared/utils/convertJson";
import { create } from "zustand";

export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
}

type ConfigurationSchema = JsonFile;

interface State {
  view: ConfigurationView;
  configuration: ConfigurationSchema;
}

interface Functions {
  changeView: (view: ConfigurationView) => void;
  loadConfiguration: (file: File) => void;
}

type ConfigurationModel = Model<State, Functions>;

export const useAppConfigurationModel = create<ConfigurationModel>((set) => ({
  view: ConfigurationView.GUI_VIEW,
  configuration: {},
  changeView: (view) => set({ view }),
  loadConfiguration: async (file) => {
    set({ loadConfigurationStatus: "loading" });
    // do async job

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
}));
