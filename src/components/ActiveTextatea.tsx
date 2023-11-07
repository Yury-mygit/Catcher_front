import React, { ChangeEvent, useRef, useEffect } from "react";

interface ActiveTextAreaProps {
  value: {
    isValid: boolean;
    body: string;
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
  }, [value.body]);

  return (
    <textarea
      ref={textAreaRef}
      style={{
        overflow: "auto", // Changed from 'hidden' to 'auto'
        resize: "none"
      }}
      className={`border-4 p-2 shadow-xl text-xs ${value.isValid ? 'border-green-500' : 'border-red-500 '}`}
      value={value.body}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e.target.value)}
      placeholder="Request Body"
    />
  );
};

export default ActiveTextArea;
