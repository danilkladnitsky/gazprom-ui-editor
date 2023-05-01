import React, { ComponentType, ReactNode } from 'react';

type TreeProps<P> = P & {
  items?: TreeProps<P>[]
}

export type TreeTemplateProps<P > = {
  children: ReactNode;
  item: P;
}

type Props<TreeData> = {
    data: TreeProps<TreeData>;
    template: ComponentType<TreeTemplateProps<TreeData>>;
}

export const TreeStructure = <P,>(
  { data, template }: Props<P>): JSX.Element => {

  const TreeComponent = template;

  const renderSubTree = (subTree: TreeProps<P>) => {
    if (!subTree?.items) {
      return <></>;
    }
    return (
      <>{
        subTree.items.map((item) => {
          return <TreeComponent item={item} key={item.code}>
            {renderSubTree(item)}
          </TreeComponent>;
        })
      }</>
    );
  };

  return renderSubTree(data);
};
