import { Component } from "entities/component";
import { ReactNode } from "react"

export type ComponentProps = {
    children: ReactNode;
    component: Component;
}