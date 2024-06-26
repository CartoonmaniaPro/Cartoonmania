import data from '../../../public/data.json';
import CardProduct from '../products/cardProduct';

interface Props {
  title: string;
}

export default function ProductOverview({
  title,
}: Props) {

  return (
    <>
      <div className="card card-product card-plain">
        <div className="d-flex border-bottom border-dark  pb-3">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          <div className="d-flex ms-auto align-items-center">
            <div className="dropdown">
              <button className="btn btn-link text-dark mb-0 dropdown-toggle" type="button" id="sortButton" data-bs-toggle="dropdown" aria-expanded="false">
                Ordenar
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortButton">
                <li><a className="dropdown-item" href="javascript:;">Más Popular</a></li>
                <li><a className="dropdown-item" href="javascript:;">Mejor Rating</a></li>
                <li><a className="dropdown-item" href="javascript:;">Recientes</a></li>
                <li><a className="dropdown-item" href="javascript:;">Menor precio</a></li>
                <li><a className="dropdown-item" href="javascript:;">Mayor precio</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <ul className="list-unstyled ms-3">
              <li className="mb-2"><a href="#">Hogar</a></li>
              <li className="mb-2"><a href="#">Oficina</a></li>
              <li className="mb-2"><a href="#">Juguetes</a></li>
              <li className="mb-2"><a href="#">Utiles</a></li>
              <li className="mb-2"><a href="#">Novedades</a></li>
            </ul>
            <div className="accordion" id="accordionArrivals">
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingThree">
                  <button className="accordion-button border-bottom border-top border-dark  font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Creadores
                    <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                  </button>
                </h5>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionArrivals">
                  <div className="accordion-body text-sm opacity-8">
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck1" />
                      <label className="custom-control-label mb-0">Marc Jacobs</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck2" />
                      <label className="custom-control-label mb-0">Alexander Jimenez</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck3" checked />
                      <label className="custom-control-label mb-0">Sandra Sainz</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck4" />
                      <label className="custom-control-label mb-0">Maximilam Santos</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck5" />
                      <label className="custom-control-label mb-0">Alexander Albon</label>
                    </div>
                    <div className="form-check justify-content-start ">
                      <input className="form-check-input me-2" type="checkbox" value="" id="customCheck6" />
                      <label className="custom-control-label mb-0">Valentino</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFour">
                  <button className="accordion-button border-bottom border-dark  font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Material
                    <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                  </button>
                </h5>
              
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingFifth">
                  <button className="accordion-button border-bottom border-dark  font-weight-bold py-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                    Size
                    <i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                    <i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" aria-hidden="true"></i>
                  </button>
                </h5>
              
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="d-flex h-100">
              <div className="row">
                {data.products.slice(0, 6).map(product => 
                  <div class="col-md-6 col-lg-4">
                    <CardProduct 
                      thumb_src = { product.thumb_src}
                      thumb_alt = {product.thumb_alt}
                      title = {product.title}
                      description = {product.description}
                      price = {product.price}
                      position = "center"
                    />
                  </div>
                )}        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
