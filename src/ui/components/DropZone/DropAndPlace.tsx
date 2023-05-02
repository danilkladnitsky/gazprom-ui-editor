import React from 'react';
import { withDropping } from 'ui/hocs/withDropping';

const DropAndPlace = () => {
  return (
    <div>DropAndPlace</div>
  );
};

export default withDropping({ allowedAliases: [] })(DropAndPlace);
