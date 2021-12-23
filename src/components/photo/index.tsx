import React, { FC } from "react";

export interface Photo {
    id: string;
    url: string;
    text: string | null;
}

const Photo:FC<Photo> = (props: Photo) => {
    return (
        <div></div>
    )
}
export default Photo;