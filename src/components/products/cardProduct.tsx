import ProductBadge from "./productBadge";

interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description: string;
  price: number;
  color: string;
  colors: string[];
  position: string;
}

export default function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,
  color,
  colors,
  position,
}: Props) {
  const classList = "card-body " + "text-" + position;
  const url = import.meta.env.BASE_URL + `products/${title}`;

  return (
    <>
      <div className="card card-product producto border border-dark mb-5 shadow-xs border-radius-lg ">
        <a href={url}>
          <div className="container-img">
            <img
              className="img-product p-4 "
              src={`${import.meta.env.BASE_URL}` + thumb_src}
              alt={thumb_src}
            />
          </div>
          <div className={classList}>
            {title && <h4 className="font-weight-bold">{title}</h4>}

            {description && (
              <div className=" w-100 my-3" style={{ height: "100px" }}>
                <p className="text-body ">{description.slice(0, 100)} ...</p>
              </div>
            )}

            {price && (
              <h4 className="mb-0 text-lg mt-1 mb-3">
                ${price.toLocaleString()} mxn
              </h4>
            )}
            <button className="btn btn-dark  ">Agregar al carrito</button>
          </div>
        </a>
      </div>
    </>
  );
}
