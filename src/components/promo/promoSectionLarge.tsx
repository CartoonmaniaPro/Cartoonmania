interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
}

export default function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}: Props) {
  const styles = {
    pageHeader: {
      backgroundImage: "url(" + pageHeaderBgImg + ")",
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius,
    },
  } as const;

  return (
    <>
      <section
        className="mb-8 box-landing "
        style={{ backgroundColor: "#e5e3e1", height: "100vh" }}
      >
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
          <p className="title ">CARTOONMANIA</p>
          <p className="subtitle">
            Nos enfocamos en ofrecer productos de cartón reciclado de alta
            calidad, priorizando la sostenibilidad y el compromiso con el medio
            ambiente.
          </p>
        </div>
        <img src={pageHeaderBgImg} className="img-background-main"></img>
      </section>
    </>
  );
}
