import { Component } from 'entities/component';
import { ElementComponent } from 'features/render/component';
import React, { ReactNode } from 'react'
import { Form } from './Form';
import { Group } from './Group';
import Page from './Page';
import { Tabs } from './Tabs';

type Props = {
    component: Component;
    children: ReactNode;
}

export function TreeItem({ component, children }: Props) {
    const { code } = component;
    
    if (code !== "element") {
        const Wrapper = getComponentWrapper(code);
        return <Wrapper>
            {children}
        </Wrapper>;
    }

    return <ElementComponent {...component} />;
}

function getComponentWrapper(code: ComponentCode) {
  switch (code) {
    case "form":
      return Form;
    case "tabs":
      return Tabs;
    case "page":
      return Page;
    case "group":
    default:
      return Group;
  }
}
