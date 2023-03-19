import { create } from "zustand";
import fileDownload from "js-file-download";

import { convertFileToJSON } from "shared/utils/convertJson";
import { ComponentTree } from "entities/component";

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
  uploadConfiguration: (file: File) => void;
  toggleView: () => void;
  downloadConfiguration: () => void;
  updateConfiguration: (data: ConfigurationSchema) => void;
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
    uploadConfiguration: async (file) => {
      set({ uploadConfigurationStatus: "loading" });

      convertFileToJSON(file)
        .then((configuration) => {
          set({
            configuration,
            uploadConfigurationStatus: "success",
          });
        })
        .catch(() => {
          set({ uploadConfigurationStatus: "error" });
        });
    },
    toggleView: () =>
      set((state) => {
        const view =
          state.view === ConfigurationView.GUI_VIEW
            ? ConfigurationView.TEXT_VIEW
            : ConfigurationView.GUI_VIEW;

        return { ...state, view };
      }),
  })
);
