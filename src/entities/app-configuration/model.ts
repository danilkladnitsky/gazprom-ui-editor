import { create } from "zustand";
import fileDownload from "js-file-download";

import { Component } from "entities/component/domain";
import { ComponentTree, ConfigurationView } from "./domain";

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
  generateAppConfig: (components: Component[]) => void;
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
    generateAppConfig: (items: Component[]) => {
      const root = items.find((i) => i.code === "form");

      if (!root) {
        throw new Error(
          "Нельзя сгенерировать конфигурацию без корневого элемента с кодом form"
        );
      }

      const rootComponent: ComponentTree = {
        id: root?.id,
      };

      const components = items
        .filter((i) => i.code !== "form")
        .map((i) => ({ id: i.id }));

      set({
        configuration: {
          ...rootComponent,
          items: components,
        },
      });
    },
  })
);
