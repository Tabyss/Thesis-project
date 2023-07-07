import React from "react";
import Theme1 from "./Theme1";
import Theme2 from "./Theme2";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <style type="text/css" media="print">
        {
          "\
   @page { size: A4 landscape; margin: 0 !important; padding: 0 !important; overflow: hidden; }\
"
        }
      </style>
      <Theme1 />
    </div>
  );
});

export const ComponentToPrint2 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <style type="text/css" media="print">
        {
          "\
   @page { size: A4 landscape; margin: 0 !important; padding: 0 !important; overflow: hidden; }\
"
        }
      </style>
      <Theme2 />
    </div>
  );
});
