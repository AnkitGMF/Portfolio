import React from "react";

const CustomSheet = ({open,children}:{open:any,children:React.ReactNode}) => {
  return (
    <div className={open?"fixed inset-0 z-50 ease-in duration-300 font-epilogue animate-openmenu top-0 inset-x-0":'ease-in duration-300 animate-closemenu top-[-300px] fixed z-50 inset-x-0'}>
      <div className="border-b bg-background/80 backdrop-blur-lg gap-4 p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default CustomSheet;
