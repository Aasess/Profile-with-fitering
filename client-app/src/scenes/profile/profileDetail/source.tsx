import React, { useEffect } from "react";

//HELPER
import { checkImage } from "helpers/imageValid";

const Source = (props: any) => {
  const { data } = props;
  const [validSrc, setValidSrc] = React.useState<any>(
    "./assets/defaultImage.png"
  );

  useEffect(() => {
    setValidSrc("./assets/defaultImage.png");
    data.forEach((source: any) => {
      checkImage(source.url).then((isValidUrl: any) => {
        console.log(isValidUrl, source);
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
