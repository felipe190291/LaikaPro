import "../styles/Banner.css";
import { AccordionItem } from "../utils/utils";
function SectionInfoCorreo() {
  const data_datos = [
    {
      item: "ACERCA DE LAIKA",
      children: ["Sobre Laika", "Servicios", "Trabaja con nosotros", "Blog"],
      id: "1",
    },
    {
      item: "LINKS DE INTERÉS",
      children: [
        "Preguntas frecuentes",
        "¿Cómo comprar en Laika?",
        " Política de Privacidad",
        " Contáctanos",
      ],
      id: "2",
    },
    {
      item: "INFORMACIÓN",
      children: ["Sobre Laika", "Servicios", "Trabaja con nosotros", "Blog"],
      id: "3",
    },
  ];

  return (
    <>
      <div className="disapear-extendForm">
        {data_datos.map((e) => (
          <AccordionItem
            key={e.id}
            dataBsParent="#demo"
            item={e.id}
            title={e.item}
            children={e.children}
          />
        ))}

        <div className="col-md-12 col-lg-2 mt-5  d-lg-none d-lg-block container_subcription">
          <h2
            className="p_title_footer texto_subcri "
            style={{ fontWeight: "700" }}
          >
            SUSCRÍBETE
          </h2>{" "}
          <h3 className="texto_subcri mb-2 pt-0 mb-2 ">
            Recibe noticias y promociones al instante.
          </h3>
          <form action="form-group mt-0">
            <div className="input-group text_subscription">
              <input
                type="email"
                placeholder="Correo electrónico"
                required="required"
                className=" form-control text_input_seccion"
              />{" "}
              <button
                type="button"
                className=" btn bg-laika btn_subcription pt-0 pb-1 "
              >
                <span
                  className="bg_purple badge mt-1 "
                  style={{ width: "30px", height: "25px" }}
                >
                  <i
                    class=" fas fa-angle-right text-white align-text-bottom "
                    style={{ fontSize: "18px" }}
                  ></i>
                </span>
              </button>
            </div>{" "}
            <div className="custom-control custom-checkbox ">
              <input
                pattern="[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?"
                type="checkbox"
                name="check_notifications"
                id="check_notifications"
                className="custom-control-input check_subscription"
              />{" "}
              <label
                for="check_notifications"
                style={{
                  fontWeight: "500",
                  fontStyle: "italic",
                  fontSize: ".8rem",
                }}
                className="custom-control-label pt-1 font-11 texto_subcri"
              >
                He leído y acepto las{" "}
                <a
                  href="https://laika.com.co/privacy_policies/bog"
                  className="texto_subcri"
                >
                  políticas de privacidad.
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
      <div id="footer" className="bg_white">
        <div className="bg_white container-fluid w-100 mb-3 px-0 font_causten_round_semi_bold_oblique">
          <div className="row footer_laika m-auto justify-content-center mb-4 mt-0 mt-md-4 div_footer_principal ">
            {" "}
            <div className="col-md-4 col-lg-2 mt-5 text-center">
              <span>
                <img
                  data-src="https://laika.com.co/assets/LAIKA.png  "
                  className="ml-2 text-right img-fluid img_laika_footer lazy"
                  src="https://laika.com.co/assets/LAIKA.png  "
                />{" "}
                <p className="ml-0 ml-md-2 mt-2 p_img_laika_footer mb-0 ">
                  Síguenos en:
                </p>{" "}
                <p className="ml-0 ml-md-1">
                  <span className=" filter-contrast-1">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/channel/UC_Syn3ptKsOheb1Yz2MzGgA"
                      className="text_decoration_general"
                    >
                      <i className="fab fa-youtube fa-2x color_purple"></i>
                    </a>
                  </span>{" "}
                  <span className=" filter-contrast-1">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/laikamascotas/?hl=es-la"
                      className="text_decoration_general"
                    >
                      <i className="fab fa-instagram fa-2x color_purple"></i>
                    </a>
                  </span>{" "}
                  <span className="filter-contrast-1">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Laikamascotascolombia/"
                      className="text_decoration_general"
                    >
                      <i className="fab fa-facebook-square fa-2x color_purple"></i>
                    </a>
                  </span>
                </p>
              </span>
            </div>{" "}
            <div className="col-md-2 col-lg-2 mt-2 mt-lg-5 d-none d-lg-block">
              <h2 className="p_title_footer ">ACERCA DE LAIKA</h2>{" "}
              <a href="https://laika.com.co/about_us/bog">
                <h3 className="p_text_footer mb-2">Sobre Laika</h3>
              </a>{" "}
              <a href="https://laika.com.co/services/bog/dog">
                <h3 className="p_text_footer mb-2">Servicios</h3>
              </a>{" "}
              <a href="https://jobs.airavirtual.com/laika">
                <h3 className="p_text_footer mb-2">Trabaja con nosotros</h3>
              </a>{" "}
              <a href="https://blog.laika.com.co/" target="_blank">
                <h3 className="p_text_footer mb-2">Blog</h3>
              </a>{" "}
              <a
                href="https://laika.com.co/terms_conditions/bog"
                target="_blank"
              >
                <h3 className="p_text_footer mb-2">Términos y condiciones</h3>
              </a>
            </div>{" "}
            <div className="col-md-2 col-lg-2 mt-5 d-none d-lg-block">
              <h2 className="p_title_footer ">LINKS DE INTERÉS</h2>{" "}
              <a href="https://laika.com.co/frequent_questions/bog">
                <h3 className="p_text_footer mb-2">Preguntas frecuentes</h3>
              </a>{" "}
              <h3 className="p_text_footer mb-2">¿Cómo comprar en Laika?</h3>{" "}
              <a href="https://laika.com.co/privacy_policies/bog">
                <h3 className="p_text_footer mb-2">Política de Privacidad</h3>
              </a>{" "}
              <h3 className="p_text_footer mb-2">Contáctanos</h3>{" "}
              <a href="https://laika.com.co/delivery_policies/bog">
                <h3 className="p_text_footer mb-2">Políticas de Entrega</h3>
              </a>
            </div>{" "}
            <div className="col-md-2 col-lg-2 mt-5 d-none d-lg-block">
              <h2 className="p_title_footer ">INFORMACIÓN</h2>{" "}
              <h3 className="p_text_footer mb-2">
                Teléfono: +573009108496
                <br />
                <br /> servicioclientes@laika.com.co
                <br />
                <br /> Bogotá D.C., Colombia
              </h3>
            </div>{" "}
            <div className="col-md-12 col-lg-2 mt-5 d-none d-sm-none d-md-none d-lg-block">
              <h2 className="p_title_footer ">SUSCRÍBETE</h2>{" "}
              <h3 className="p_text_footer mb-2 pt-0 mb-2 ">
                Recibe noticias y promociones al instante.
              </h3>{" "}
              <form action="form-group mt-0">
                <div className="input-group ">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    required="required"
                    className=" form-control text_subscription"
                  />{" "}
                  <button
                    type="button"
                    className=" btn bg-laika btn_subcription pt-0 pb-1 "
                  >
                    <span
                      className="bg_purple badge mt-1 "
                      style={{ width: "30px", height: " 25px" }}
                    >
                      <i
                        className=" fas fa-angle-right text-white align-text-bottom "
                        style={{ fontSize: "18px" }}
                      ></i>
                    </span>
                  </button>
                </div>{" "}
                <div className="custom-control custom-checkbox d-flex ">
                  <input
                    type="checkbox"
                    name="check_notifications"
                    id="check_notifications"
                    className="custom-control-input check_subscription m-auto"
                  />{" "}
                  <label
                    for="check_notifications"
                    style={{ fontSize: "0.6rem", margin: "auto 1vw" }}
                    className="custom-control-label pt-1 color_purple"
                  >
                    He leído y acepto las{" "}
                    <a
                      href="https://laika.com.co/privacy_policies/bog"
                      className="color_purple"
                    >
                      políticas de privacidad.
                    </a>
                  </label>
                </div>
              </form>
            </div>
          </div>{" "}
          <div
            id="accordionFooter"
            className="col-md-12 d-md-block  d-lg-none accordion mb-2"
          >
            <div
              className="card shadow-sm mb-2 w-100"
              style={{ border: "0px solid white" }}
            >
              <div
                id="headingOne_about"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                className="card-header  bg-white row"
                style={{ cursor: "pointer", borderBottom: "0px solid white" }}
              >
                <h2 className="btn_acordion  p-2  pl-2 col-10 col-sm-11">
                  ACERCA DE LAIKA
                </h2>{" "}
                <span className="text-rigth col-1 mt-1">
                  <i
                    id="arrow_footer_about"
                    className="fas fa-chevron-right color_purple status_footer_arrow"
                  ></i>
                </span>
              </div>{" "}
              <div
                id="collapseOne"
                aria-labelledby="headingOne_about"
                data-parent="#accordionFooter"
                className="collapse"
              >
                <div className="card-body px-3 py-2">
                  <a href="https://laika.com.co/about_us/bog">
                    <h3 className="p_text_footer mb-1">Sobre Laika</h3>
                  </a>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <a href="https://laika.com.co/services/bog/dog">
                    <h3 className="p_text_footer mb-1">Servicios</h3>
                  </a>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <a href="https://jobs.airavirtual.com/laika">
                    <h3 className="p_text_footer mb-1">Trabaja con nosotros</h3>
                  </a>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <a href="https://blog.laika.com.co/" target="_blank">
                    <h3 className="p_text_footer mb-1">Blog</h3>
                  </a>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <a
                    href="https://laika.com.co/terms_conditions/bog"
                    target="_blank"
                  >
                    <h3 className="p_text_footer mb-1">
                      Términos y condiciones
                    </h3>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="card shadow-sm mb-2">
              <div
                id="headingOne_interest"
                data-toggle="collapse"
                data-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
                className="card-header  row bg-white"
              >
                <h2 className="btn_acordion col-10 col-sm-11 p-2 pl-2">
                  LINKS DE INTERÉS
                </h2>{" "}
                <span className="text-rigth col-1 mt-1">
                  <i
                    id="arrow_footer_interest"
                    className="fas fa-chevron-right color_purple status_footer_arrow"
                  ></i>
                </span>
              </div>{" "}
              <div
                id="collapse2"
                aria-labelledby="headingOne_interest"
                data-parent="#accordionFooter"
                className="collapse"
              >
                <div className="card-body px-3 py-2">
                  <a href="https://laika.com.co/frequent_questions/bog">
                    <h3 className="p_text_footer mb-1">Preguntas frecuentes</h3>
                  </a>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <h3 className="p_text_footer mb-1">
                    ¿Cómo comprar en Laika?
                  </h3>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <a href="https://laika.com.co/privacy_policies/bog">
                    <h3 className="p_text_footer">Política de Privacidad</h3>
                  </a>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <h3 className="p_text_footer mb-1">Contáctanos</h3>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <a href="https://laika.com.co/delivery_policies/bog">
                    <h3 className="p_text_footer">Políticas de Entrega</h3>
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="card shadow-sm">
              <div
                id="headingOne_info"
                data-toggle="collapse"
                data-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
                className="card-header row bg-white"
              >
                <h2 className="btn_acordion p-2 pl-2 col-10 col-sm-11">
                  INFORMACIÓN
                </h2>{" "}
                <span className="text-rigth col-1 mt-1">
                  <i
                    id="arrow_footer_info"
                    className="fas fa-chevron-right color_purple status_footer_arrow"
                  ></i>
                </span>
              </div>{" "}
              <div
                id="collapse3"
                aria-labelledby="headingOne_info"
                data-parent="#accordionFooter"
                className="collapse"
              >
                <div className="card-body px-3 py-2">
                  <h3 className="p_text_footer mb-1">
                    Teléfono: +573009108496
                  </h3>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <h3 className="p_text_footer mb-1">
                    servicioclientes@laika.com.co
                  </h3>
                </div>{" "}
                <div className="card-body px-3 py-2">
                  <h3 className="p_text_footer mb-1">Bogotá D.C., Colombia</h3>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-12 col-lg-2 mt-5 d-block d-sm-block d-md-none d-lg-none mb-4">
            <h2 className="p_title_footer mb-0">SUSCRÍBETE</h2>{" "}
            <h3 className="p_text_footer pt-0 mb-2">
              Recibe noticias y promociones al instante.
            </h3>{" "}
            <form action="form-group mt-0">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Correo electronico"
                  required="required"
                  className="form-control text_subscription"
                />{" "}
                <button
                  type="button"
                  className=" btn bg-laika btn_subcription pt-0 pb-1 "
                >
                  <span
                    className="bg_purple badge mt-1 "
                    style={{ width: "30px", height: " 25px" }}
                  >
                    <i
                      className=" fas fa-angle-right text-white align-text-bottom "
                      style={{ fontSize: "18px" }}
                    ></i>
                  </span>
                </button>
              </div>{" "}
              <div className="custom-control custom-checkbox ">
                <input
                  type="checkbox"
                  id="check_notifications_resp"
                  className="custom-control-input check_subscription"
                />{" "}
                <label
                  for="check_notifications_resp"
                  className="custom-control-label pt-1 "
                  style={{
                    fontSize: " 10px",
                    color: "rgb(96, 62, 133)",
                    fontStyle: "italic",
                  }}
                >
                  He leído y acepto las{" "}
                  <a
                    href="https://laika.com.co/privacy_policies/bog"
                    className="color_purple"
                  >
                    Políticas de privacidad.
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <div style={{ padding: "0 12%", backgroundColor: "#e9ecef" }}>
        <div className="profesiones">
          <div className="div_figure_card">
            <figure className="figure_de_figures">
              <img
                src="https://laika.com.co/assets/laika_vetcare/Mercado_pago.png"
                className="img_figure"
                alt=""
              />
            </figure>
          </div>
          <div className="div_figure_card">
            <figure className="figure_de_figures">
              <img
                src="https://laika.com.co/assets/laika_vetcare/PSE.png"
                className="img_figure"
                alt=""
              />
            </figure>
          </div>
          <div className="div_figure_card">
            <figure className="figure_de_figures">
              <img
                src="https://laika.com.co/assets/laika_vetcare/VISA.png"
                className="img_figure"
                alt=""
              />
            </figure>
          </div>
          <div className="div_figure_card">
            <figure className="figure_de_figures">
              <img
                src="https://laika.com.co/assets/laika_vetcare/MASTER.png"
                className="img_figure"
                alt=""
              />
            </figure>
          </div>
          <div className="div_figure_card">
            <figure className="figure_de_figures">
              <img
                src="https://laika.com.co/assets/huaweiGallery.png  "
                className="img_figureds"
                alt=""
              />
            </figure>
          </div>
          <div className="div_figure_card">
            <figure className="figure_de_figures">
              <img
                src="https://laika.com.co/assets/GOOGLEP.png  "
                className="img_figureds"
                alt=""
              />
            </figure>
          </div>

          <div className="div_figure_card">
            <figure className="figure_de_figures">
              <img
                src="https://laika.com.co/assets/APP.png  "
                className="img_figureds"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionInfoCorreo;
