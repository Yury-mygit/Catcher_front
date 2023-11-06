import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter'; // Syntax highlighting for JSON
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'; 

interface Bodyblock {
  title: string;
  entries: Array<[string, any]>;
  outerclass: string;
}

const BodyBlock: React.FC<Bodyblock> = ({ title, entries, outerclass }) =>{
  /* Function to format value based on its type */
  const formatValue = (value: any) => {
    if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
      //if the value is an array or object, we'll highlight the JSON
      return (
        <SyntaxHighlighter language="json" style={solarizedLight}>
          {JSON.stringify(value, null, 2)}
        </SyntaxHighlighter>
      );
    }
    //for other types, we'll just convert it to string
    return value.toString();
  };

  return (
    <div className="inner ml-5 text-left">
    {entries.map(([key, value]) => (
        <div key={key}>
            <SyntaxHighlighter 
                language="json" 
                style={solarizedLight}
            >
                {JSON.stringify({[key]: value}, null, 2)}
            </SyntaxHighlighter>
        </div>
    ))}
</div>
  );
}

export default BodyBlock;
