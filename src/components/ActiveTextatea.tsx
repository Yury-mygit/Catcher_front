import React, { ChangeEvent, useRef, useEffect } from "react";

interface ActiveTextAreaProps {
  value: {
    isValid: boolean;
    text: string;
    body:string;
    format:string;
  };
  handleChange: (val: string) => void;
}

const ActiveTextArea: React.FC<ActiveTextAreaProps> = ({ value, handleChange }) => {

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textAreaNode = textAreaRef.current;
    if (textAreaNode) {
      textAreaNode.style.height = "auto";
      textAreaNode.style.height = textAreaNode.scrollHeight > 350 ? "350px" : `${textAreaNode.scrollHeight}px`;
    }
  }, [value.text]);

  // const options = { compact: true, ignoreComment: true, spaces: 4 };
  // const xml = js2xml(json, options);
  //
  // let a

  // if (value.format == 'JSON') a =

  return (
    <textarea
      ref={textAreaRef}
      style={{
        overflow: "auto", // Changed from 'hidden' to 'auto'
        resize: "none"
      }}
      className={`w-3/4 border-2 p-2  text-xs ${value.isValid ? 'border-green-500' : 'border-red-500 '}`}
      // value={JSON.stringify(value.text, null, 2)}
      value={value.text}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e.target.value)}
      // onChange={e=>value.s}
      placeholder="Request Body"
    />
  );
};

export default ActiveTextArea;

