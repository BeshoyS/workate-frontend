import React, { useEffect, useState } from "react";
import NextBtn from "../NextBtn/NextBtn";

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [shownPhotos, setShownPhotos] = useState(3);

  async function getPhotos() {
    const data = await (await fetch("https://picsum.photos/v2/list")).json();
    console.log(data);
    setPhotos(data);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  function extractPhotoSlug(url) {
    const urlArr = url.split("/");
    const slug = urlArr[urlArr.length - 1];
    return slug;
  }

  return (
    <main>
      <h1>Workate</h1>
      {photos.length ? (
        <>
          <section className="imgs-section">
            {photos?.slice(0, shownPhotos)?.map((photo) => {
              return (
                <div key={photo.id}>
                  <img
                    className="img"
                    src={
                      photo?.url?.includes("https://unsplash.com/photos/")
                        ? `http://source.unsplash.com/${extractPhotoSlug(
                            photo?.url
                          )}`
                        : photo?.download_url
                    }
                    alt=""
                  />
                  <div className="overlay">
                    <h4>By {photo?.author}</h4>
                    <a
                      href={photo?.download_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
          </section>
          <section>
            <NextBtn
              shownPhotos={shownPhotos}
              setShownPhotos={setShownPhotos}
              photosL={photos.length}
            />
          </section>
        </>
      ) : (
        "Loading..."
      )}
    </main>
  );
}
