import React from "react";

export default function NextBtn({ shownPhotos, setShownPhotos, photosL }) {
  function nextPhotos() {
    if (shownPhotos <= photosL) {
      setShownPhotos(shownPhotos + 3);
    } else {
      setShownPhotos(photosL);
    }
  }
  return (
    <>
      {shownPhotos !== photosL ? (
        <button onClick={() => nextPhotos()}>Next</button>
      ) : (
        <h4>All photos are displayed</h4>
      )}
    </>
  );
}
