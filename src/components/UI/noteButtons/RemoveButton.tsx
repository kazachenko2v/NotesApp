import React from "react";

import { MdDeleteForever } from "react-icons/md";

const RemoveButton: React.FC = React.memo(() => {
  return <MdDeleteForever title="Remove note" />;
});

export default RemoveButton;
