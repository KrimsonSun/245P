import React from 'react';
import Main from "./Main.js";
import { MAIN_DATA } from "./data.js";

// This view is for our second data object
function ServiceView() {
  return (
    <Main content={MAIN_DATA[1].content} />
  );
}

export default ServiceView;