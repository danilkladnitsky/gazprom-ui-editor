import { create } from "zustand";
import fileDownload from "js-file-download";

import { Component } from "entities/component/domain";
import { SchemaTree, ConfigurationView, GuiMode } from "./domain";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  deleteNode,
  fillTreeData,
  insertNodeByNeighbor,
  removeMetadata,
  swapTreeElements,
} from "./utils";
import { useComponentModel } from "entities/component";

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
  insertComponent: (component: EntityId, neighborId: EntityId) => void;
  deleteComponent: (id: EntityId) => void;
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
        if (!data) {
          return;
        }

        const componentList = useComponentModel.getState().components;
        const fileName = `config.json`;

        fileDownload(
          JSON.stringify(fillTreeData([data], componentList), removeMetadata),
          fileName
        );
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

          return { view };
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

        const tabsId = useComponentModel
          .getState()
          .createComponent("tabs", { name: "Табы" });

        const page1Id = useComponentModel
          .getState()
          .createComponent("page", { name: "Паспортные данные" });
        const page2Id = useComponentModel
          .getState()
          .createComponent("page", { name: "О себе" });

        const group1 = useComponentModel
          .getState()
          .createComponent("group", { name: "Личные данные" });

        const group2 = useComponentModel
          .getState()
          .createComponent("group", { name: "Место жительства" });

        const group3 = useComponentModel
          .getState()
          .createComponent("group", { name: "Био" });

        const configuration = {
          ...rootComponent,
          items: [
            {
              id: tabsId,
              items: [
                {
                  id: page1Id,
                  items: [
                    {
                      id: group1,
                      items: components.filter((v, i) => i % 2 === 0),
                    },
                    {
                      id: group2,
                      items: components.filter((v, i) => i % 2 !== 0),
                    },
                  ],
                },
                {
                  id: page2Id,
                  items: [
                    {
                      id: group3,
                      items: components.filter((v, i) => i % 2 !== 0),
                    },
                  ],
                },
              ],
            },
          ],
        };

        console.log(configuration);

        set({
          configuration,
        });
      },
      swapComponents: (firstId: EntityId, secondId: EntityId) => {
        const { configuration } = get();
        if (!configuration) {
          return;
        }

        const updatedConfig = swapTreeElements(
          configuration,
          firstId,
          secondId
        );

        set({ configuration: updatedConfig });
      },
      insertComponent: (componentId: EntityId, neighborId: EntityId) => {
        const { configuration } = get();
        if (!configuration) {
          return;
        }

        set({
          configuration: insertNodeByNeighbor(
            configuration,
            componentId,
            neighborId
          ),
        });
      },
      deleteComponent: (componentId: EntityId) => {
        const { configuration } = get();
        if (!configuration) {
          return;
        }

        set({
          configuration: deleteNode(configuration, componentId),
        });
      },
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
