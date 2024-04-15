import React, { memo } from "react";

const Word = ({ word, active, correct }) => {
  if (correct === true) return <span className={"correct"}>{word} </span>;
  else if (correct === false)
    return <span className={"incorrect"}>{word} </span>;
  else
    return (
      <span style={{ fontWeight: active ? "bold" : "normal" }}>{word} </span>
    );
};

export default memo(Word);
