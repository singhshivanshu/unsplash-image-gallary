import React, { FunctionComponent, useState, useEffect } from "react";

import { createApi } from "unsplash-js";
import { CollectionType } from "../../components/photo/types";
import Search from "../../components/search";
import { Div } from "./style";

const unsplash = createApi({
  accessKey: "2PjoUBe87d7v0YB553LZY499yGQqy0-g6GPwpho2jus",
});

const App: FunctionComponent = () => {
  const [collections, setCollection] = useState<CollectionType[]>();

  useEffect(() => {
    unsplash.collections
      .getPhotos({ collectionId: "298137", perPage: 30 })
      .then((result) => {
        if (result && result.response) setCollection(result.response.results);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(collections);
  return (
    <div>
      <Div>
        <Search />
      </Div>
    </div>
  );
};

export default App;
