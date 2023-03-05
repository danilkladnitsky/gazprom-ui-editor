import { create } from "zustand";

export enum ConfigurationView {
  GUI_VIEW,
  TEXT_VIEW,
}

interface State {
  view: ConfigurationView;
  configuration: ConfigurationSchema | null;
}

interface Functions {
  changeView: (view: ConfigurationView) => void;
  loadConfiguration: (config: ConfigurationSchema) => void;
}

type ConfigurationModel = Model<State, Functions>;

export const useAppConfigurationModel = create<ConfigurationModel>((set) => ({
  view: ConfigurationView.GUI_VIEW,
  configuration: null,
  changeView: (view) => set({ view }),
  loadConfiguration: async (configuration) => {
    set({ loadConfigurationStatus: "loading" });
    // do async job
    set({ configuration, loadConfigurationStatus: "success" });
  },
}));
