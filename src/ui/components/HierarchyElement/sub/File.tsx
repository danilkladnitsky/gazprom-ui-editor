import React from 'react';

export const File = () => {
  const preventBubbling = (e: React.MouseEventHandler) => {
    e.preventDefault();
  };

  return (
    <input type="file" onClick={preventBubbling} />
  );
};
