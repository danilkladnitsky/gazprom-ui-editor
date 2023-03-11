import React from 'react'

import { StringProperty } from 'entities/properties';

type Props = {
    property: StringProperty;
}

export const StringParameter = ({ property }: Props) => {
  return (
    <div>StringParameter</div>
  )
}
