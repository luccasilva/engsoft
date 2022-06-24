import logo from "../../assets/img/logo.png";

export default (props) => {
  return (
    <div className="footer-margin">
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contato</h4>
                <p>
                  <strong>Endereço:</strong> <br />
                  <i className="ion-ios-location"></i> XXX XXXXXXX, XX <br />{" "}
                  XXXXXXXXXXXXX
                  <br /> XXXXXX
                  <br />
                  <br />
                  <strong>Telefone e WhatsApp:</strong> <br />
                  <i className="fab fa-whatsapp"></i> 99 99999-9999
                  <br />
                  <br />
                  <strong>Email:</strong>
                  <br />
                  <i></i> XXXXXXXXXX@mail.com
                  <br />
                  <i></i> XXXXXXXXXX@mail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Nossos Links</h4>
                <ul>
                  <div className="social-links"></div>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>

                <br />

                <div className="social-links"></div>
              </div>

              <div className="col-lg-3 col-md-6 footer-newsletter"></div>

              <div className="col-lg-3 col-md-6 footer-newsletter">
                <div>
                  <img src={logo} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
