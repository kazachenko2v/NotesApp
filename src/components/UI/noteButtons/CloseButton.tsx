import React from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

const CloseButton: React.FC = React.memo(() => {
  return <AiOutlineCloseCircle title="Close" />;
});

export default CloseButton;
