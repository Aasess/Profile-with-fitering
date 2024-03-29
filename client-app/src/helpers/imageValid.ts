// export const checkImage = (url: string) => {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.src = url;
//     img.onload = () => resolve(url);
//     img.onerror = () => {
//       resolve(
//         "data:image/png;base64,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"
//       );
//     };
//   });
// };

export const checkImage = (url: string) => {
  return new Promise(
    (resolve: (value: unknown) => void, reject: (reason?: any) => void) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => {
        resolve(false);
      };
    }
  );
};
