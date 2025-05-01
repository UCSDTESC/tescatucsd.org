import { useEffect, useState } from "react";

const preloadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = img.onabort = () => reject();
    img.src = src;
  });

const useImagePreloader = (imageList: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const preloadImages = async () => {
      const imagesPromiseList: Promise<HTMLImageElement>[] = imageList.map((img) =>
        preloadImage(img)
      );

      Promise.all(imagesPromiseList)
        .then(() => setImagesPreloaded(true))
        .catch((err) => console.log("Failed to load images", err));
    };

    preloadImages();

    return () => {
      isCancelled = true;
    };
  }, [imageList]);

  return { imagesPreloaded };
};

export default useImagePreloader;
