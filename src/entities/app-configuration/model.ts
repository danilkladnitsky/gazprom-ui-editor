import { create } from "zustand";
import fileDownload from "js-file-download";

import { createJSONStorage, persist } from "zustand/middleware";
import { ComponentTree, DatasourceComponent } from "entities/component/domain";
import { ConfigurationView } from "./domain";

interface State {
  view: ConfigurationView;
  configuration: ComponentTree | null;
}

type ConfigurationModel = Model<State, Functions>;

interface Functions {
  changeView: (view: ConfigurationView) => void;
  uploadConfiguration: (config: ComponentTree) => void;
  toggleView: () => void;
  downloadConfiguration: () => void;
  updateConfiguration: (data: ComponentTree) => void;
  generateConfigFromDatasourceComponents: (
    components: DatasourceComponent[]
  ) => void;
}

export const useAppConfigurationModel = create(
  persist<ConfigurationModel>(
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
      updateConfiguration: (configuration) => set({ configuration }),
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
      generateConfigFromDatasourceComponents: (
        items: DatasourceComponent[]
      ) => {
        set({
          configuration: {
            code: "form",
            name: "Форма по умолчанию",
            items,
          },
        });
      },
    }),
    {
      name: "configuration-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
