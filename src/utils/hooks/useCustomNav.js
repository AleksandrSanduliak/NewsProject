import React from "react";

import { useNavigation } from "react-router-dom";
const useCustomNav = () => {
  const navigation = useNavigation();

  const goto = (to) => navigation.navigate(to);

  return { goto };
};
export default useCustomNav;
