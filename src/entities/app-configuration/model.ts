import { create } from "zustand";
import fileDownload from "js-file-download";

import { Component } from "entities/component/domain";
import { SchemaTree, ConfigurationView, ComponentTree } from "./domain";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  view: ConfigurationView;
  configuration: SchemaTree | null;
}

interface Functions {
  changeView: (view: ConfigurationView) => void;
  uploadConfiguration: (config: SchemaTree) => void;
  toggleView: () => void;
  downloadConfiguration: () => void;
  updateConfiguration: (data: SchemaTree) => void;
  generateAppConfig: (components: Component[]) => void;
  fillConfigWithComponents: (components: Component[]) => ComponentTree | null;
}

type ConfigurationModel = Model<State, Functions>;

export const useAppConfigurationModel = create(
  persist(
    (set, get) => ({
      view: ConfigurationView.GUI_VIEW,
      configuration: null,
      changeView: (view) => set({ view }),
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
      fillConfigWithComponents: (components: Component[]) => {
        const dfs = (tree: SchemaTree): ComponentTree => {
          return {
            ...components.find((c) => c.id === tree.id),
            items: tree.items?.map((subTree) => dfs(subTree)),
          };
        };

        const { configuration } = get();
        return configuration ? dfs(configuration) : null;
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
