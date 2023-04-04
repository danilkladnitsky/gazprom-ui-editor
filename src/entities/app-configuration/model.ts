import { create } from "zustand";
import fileDownload from "js-file-download";

import { Component } from "entities/component/domain";
import {
  SchemaTree,
  ConfigurationView,
  ComponentTree,
  GuiMode,
} from "./domain";
import { createJSONStorage, persist } from "zustand/middleware";
import { swapTreeElements } from "./utils";

interface State {
  view: ConfigurationView;
  configuration: SchemaTree | null;
  guiMode: GuiMode;
}

interface Functions {
  changeView: (view: ConfigurationView) => void;
  uploadConfiguration: (config: SchemaTree) => void;
  toggleView: () => void;
  downloadConfiguration: () => void;
  updateConfiguration: (data: SchemaTree) => void;
  generateAppConfig: (components: Component[]) => void;
  changeGuiMode: (mode: GuiMode) => void;
  swapComponents: (firstId: EntityId, secondId: EntityId) => void;
}

type ConfigurationModel = Model<State, Functions>;

export const useAppConfigurationModel = create(
  persist<ConfigurationModel>(
    (set, get) => ({
      view: ConfigurationView.GUI_VIEW,
      guiMode: "drag-and-drop",
      configuration: null,
      changeView: (view) => set({ view }),
      changeGuiMode: (mode) => set({ guiMode: mode }),
      downloadConfiguration: async () => {
        const data = get().configuration;
        const fileName = `config.json`;
        fileDownload(JSON.stringify(data), fileName);
      },
      updateConfiguration: (configuration) => set({ configuration }),
      uploadConfiguration: async (configuration) => {
        set({ configuration });
      },
      toggleView: () => {
        return set((state) => {
          const view =
            state.view === ConfigurationView.GUI_VIEW
              ? ConfigurationView.TEXT_VIEW
              : ConfigurationView.GUI_VIEW;

          return { ...state, view };
        });
      },
      generateAppConfig: (items: Component[]) => {
        const root = items.find((i) => i.code === "form");

        if (!root) {
          throw new Error(
            "Нельзя сгенерировать конфигурацию без корневого элемента с кодом form"
          );
        }

        const rootComponent: SchemaTree = {
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
      swapComponents: (firstId: EntityId, secondId: EntityId) => {
        const { configuration } = get();
        if (!configuration) {
          return;
        }
        console.log(configuration);

        const updatedConfig = swapTreeElements(
          configuration,
          firstId,
          secondId
        );

        console.log(updatedConfig);

        set({ configuration: updatedConfig });
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
