import React, { useEffect } from "react";

//HELPER
import { checkImage } from "helpers/imageValid";

const Source = (props: any) => {
  const { data } = props;

  const [validSrc, setValidSrc] = React.useState<any>("");

  console.log(data);
  useEffect(() => {
    checkImage(
      "https://user-images.githubusercontent.com/19557538/160558554-75099b74-e180-4223-8fec-ae2991b7c6a.png"
    ).then((validUrl: any) => {
      setValidSrc(validUrl);
    });
  }, []);

  return (
    <div className="card-image__display">
      {/* <img
        src="https://user-images.githubusercontent.com/19557538/160559733-5e9f673e-0eb3-4990-b787-511c43f7aa91.png"
        alt="person"
      /> */}
      <img src={validSrc} alt="person" />
    </div>
  );
};

export default Source;
