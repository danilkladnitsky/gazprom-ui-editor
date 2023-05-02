import { create } from 'zustand';

import { IComponent, IForm } from 'domain/component';

import { appService } from 'application';

type State = {
  form: IForm | null;
  editorMode: 'text' | 'gui';
};

type Actions = {
  setForm: (form: IForm) => void
  replaceComponent: (component: IComponent, target: EntityId) => void;
  toggleEditorMode: () => void;
  uploadAppConfig: (config: IForm) => [IComponent[], IForm] ;
};

const initialState: State = {
  form: null,
  editorMode: 'gui',
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
}));
