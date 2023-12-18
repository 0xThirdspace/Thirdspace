import React from "react";

const ModalHeader = ({ headerText }: { headerText: string }) => {
  return (
    <h2 className="font-semibold tracking-wider text-xl sm:text-2xl text-center mt-5">
      {headerText}
    </h2>
  );
};

export default ModalHeader;
