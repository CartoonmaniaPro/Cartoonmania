import React from "react";
import ProductRating from "../reviews/reviewRating";

interface Props {
  images: string[];
  title: string;
  full_description: string;
  price: number;
  highlights: string[];
  rating: number;
}

export default function ProductOverview({
  title,
  images,
  full_description,
  price,
  highlights,
  rating,
}: Props) {
  const handleAddToLocalStorage = () => {
    const item = {
      title: title,
      price: price,
      full_description: full_description,
      images: images,
    };
    localStorage.setItem("product", JSON.stringify(item));
    console.log(`Item added to local storage: ${JSON.stringify(item)}`);
  };

  return (
    <>
      <div className="card card-product card-plain d-flex justify-content-center">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center ">
            <img
              className="w-70 rounded-2"
              src={`${import.meta.env.BASE_URL}` + images}
              alt="producto"
            />
          </div>
          <div className="col-12 col-lg-6 ps-lg-5 d-flex flex-column justify-content-center">
            {title.length !== 0 && <h2 className="mt-4">{title}</h2>}
            {full_description.length !== 0 && (
              <p className="mb-5">{full_description}</p>
            )}

            {price !== 0 && (
              <div className="d-flex">
                <h3 className="font-weight-normal">
                  ${price.toLocaleString()} mxn
                </h3>
              </div>
            )}

            {rating !== 0 && (
              <>
                <h3 className="sr-only">Reviews</h3>
                <div className="d-flex">
                  <ProductRating rating={rating} />
                </div>
              </>
            )}

            <a
              className="btn btn-dark btn-lg mt-5"
              href={`${import.meta.env.BASE_URL}` + "shopping-cart"}
            >
              Agregar al carrito
            </a>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            {highlights?.length !== 0 && (
              <ul className="text-sm">
                {highlights.map((highlight, index) => (
                  <li className="mb-2" key={index}>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
