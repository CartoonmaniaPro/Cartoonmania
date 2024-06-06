import Reviews from "../reviews/reviewRating";
interface Props {
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
}

export default function TestimonialsFade({
  pageHeaderBgImg,
  pageHeaderMinVh,
}: Props) {
  const styles = {
    pageHeader: {
      backgroundImage: "url(" + pageHeaderBgImg + ")",
      minHeight: pageHeaderMinVh,
    },
  } as const;

  return (
    <>
      <section>
        <div className="page-header rounded-top" style={styles.pageHeader}>
          <div className="faded opacity-10"></div>
          <div className="container z-index-2">
            <div className="row justify-content-center">
              <div className="col-sm-9 text-center mx-auto pt-6">
                <h1 className="mb-4">
                  Beneficios exclusivos si eres artista premium{" "}
                </h1>
                <p className="lead mb-sm-5 px-md-8">
                  ¡Entendemos el esfuerzo que pones en cada creación! Por eso,
                  al convertirte en miembro premium, desbloquearás beneficios
                  exclusivos que potenciarán tus creaciones como nunca antes.
                </p>
                <button className="btn btn-dark btn-lg d-flex align-items-center mx-auto">
                  Hazte premium.
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
