import React, { FC, useState } from "react";


import { Input } from "@chakra-ui/react";

const Search: FC = () => {
    const [input, setInput] = useState('')
  return (
    <div>
      <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Basic usage" />
    </div>
  );
};

export default Search;
