import React, { useEffect } from "react";

//HELPER
import { checkImage } from "helpers/imageValid";

//INTERFACES
import { ISourceProps, IPhotos } from "ts";

const Source: React.FC<ISourceProps> = (props: ISourceProps) => {
  const { data } = props;
  const [validSrc, setValidSrc] = React.useState<string>(
    "./assets/defaultImage.png"
  );

  useEffect(() => {
    setValidSrc("./assets/defaultImage.png");
    data.forEach((source: IPhotos) => {
      checkImage(source.url).then((isValidUrl: any) => {
        isValidUrl && setValidSrc(source.url);
      });
    });
  }, [data]);

  return (
    <div className="card-image__display">
      <img src={validSrc} alt="person" />
    </div>
  );
};

export default Source;
