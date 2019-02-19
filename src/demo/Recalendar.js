import React, { useState } from "react";
import { RcPicker } from "recalendar";

const Recalendar = () => {
  const [selected, onSelectDate] = useState(new Date());

  return (
    <>
      <RcPicker
        selected={selected}
        onSelectDate={onSelectDate}
        styles={{ container: { wordBreak: "normal" } }}
      />
    </>
  );
};

export default Recalendar;
