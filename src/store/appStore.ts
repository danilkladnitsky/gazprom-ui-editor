import { create } from 'zustand';

import { IComponent, IForm } from 'domain/component';
import { TREE_ACTIONS,TreeActionPayload } from 'domain/tree';

import { appService } from 'application';

type State = {
  form: IForm | null;
  editorMode: 'text' | 'gui';
  fullScreen: boolean;
  previewIsActive: boolean;
};

type Actions = {
  setForm: (form: IForm | null) => void
  replaceComponent: (component: IComponent, target: EntityId) => void;
  toggleEditorMode: () => void;
  uploadAppConfig: (config: IForm) => [IComponent[], IForm];
  setFullScreen: (value: boolean) => void;
  modifyTree: <T extends TREE_ACTIONS>(type: T, payload: TreeActionPayload<T>) => void;
  togglePreview: () => void;
};

const initialState: State = {
  form: null,
  editorMode: 'gui',
  fullScreen: false,
  previewIsActive: false,
};

export const useAppStore = create<State & Actions>()((set, state) => ({
  ...initialState,
  setForm: (form) => {
    set({ form });
  },
  replaceComponent: (component: IComponent, target: EntityId) => {
    const updatedTree = appService.insertComponent(component, target);
    set({ form: updatedTree });
  },
  toggleEditorMode: () => {
    set({ editorMode: state().editorMode === 'gui' ? 'text': 'gui' });
  },
  uploadAppConfig: (form) => {
    const [components, newForm] = appService.uploadConfig(form);
    set({ form: newForm });
    return [components, newForm];
  },
  setFullScreen: (value) => {
    set({ fullScreen:value });
  },
  modifyTree: <T extends TREE_ACTIONS>(type: T, payload: TreeActionPayload<T>) => {
    switch (type) {
    case TREE_ACTIONS.ADD_CHILDREN:
      set({ form: appService.addChildren(payload) });
      return;
    case TREE_ACTIONS.REMOVE_NODE:
      set({ form: appService.removeComponent(payload) });
      return;
    case TREE_ACTIONS.PLACE_NODE:
      set({ form: appService.placeComponent(payload) });
      return;
    case TREE_ACTIONS.COPY_TO_PARENT:
      set({ form: appService.copyToParentComponent(payload) });
      return;
    case TREE_ACTIONS.REPLACE_NODES:
    default:
      set({ form: appService.replaceComponents(payload) });
    }
  },
  togglePreview: () => {
    set({ previewIsActive: !state().previewIsActive });
  },
}));
