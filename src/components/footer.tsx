export default function Footer() {
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;Cartoonmania
           
              .
            </div>
          </div>
       
        </div>
      </footer>
    </>
  );
}


