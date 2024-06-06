interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div className="form-group">
        <label>Dirección</label>
        <input type="text" className="form-control" placeholder="Tu dirección" />
      </div>
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <label>Ciudad</label>
            <input type="text" className="form-control" placeholder="Ciudad" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Estado</label>
            <input type="text" className="form-control" placeholder="Estado" />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Codigo Postal</label>
            <input type="text" className="form-control" placeholder="Codigo postal" />
          </div>
        </div>
      </div>
    </>
  );
}