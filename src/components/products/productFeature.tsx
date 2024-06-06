import ProductFeatureImg from './productFeatureImg';
import ProductFeatureDetails from './productFeatureDetails';

interface Props {
  title: string;
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  featuresDetails: Map<string,string>;
}

export default function ProductOverview({
  title,
  images,
  full_description,
  featuresDetails,
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        <div className="col-12 col-lg-7 mx-auto text-center">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5">{full_description}</p>
          }
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-lg-6 pe-5">
          <div className="row">
            <h4 className="mb-3">Sostenibilidad en cada artículo</h4>
            <p className="mb-5">Más que un simple mercado, nuestra plataforma integra un sistema de recolección de cartón, garantizando un flujo constante de materiales reciclables. Este enfoque promueve activamente la economía circular y refuerza nuestro compromiso con la sostenibilidad.</p>
            <ProductFeatureDetails featuresDetails={featuresDetails} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <ProductFeatureImg images={images}/>
        </div>
      </div>
    </div>
    </>
  );
};
