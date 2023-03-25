import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const useActionCreators = (actions) => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};
