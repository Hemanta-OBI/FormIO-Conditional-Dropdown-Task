import dynamic from "next/dynamic";
import React from "react";
const NoSSRComponent = dynamic(() => import("./FormioFormBuilder"), {
  ssr: false,
});
const FormBuilderContainer = () => {
  return (
    <div>
      <NoSSRComponent />
    </div>
  );
};

export default FormBuilderContainer;
