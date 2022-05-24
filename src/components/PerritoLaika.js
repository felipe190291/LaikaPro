import "../styles/Banner.css";
function PerritoLaika() {
  return (
    <>
      <div className="background_banner_experiencie d-flex">
        <div
          className="col-lg-7 col-xl-8"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className="text_download ">
            Para una mejor{" "}
            <strong className="font_causten_round_extra_bold_oblique">
              experiencia
            </strong>{" "}
            para ti y tu{" "}
            <strong className="font_causten_round_extra_bold_oblique">
              peludo descarga la app.
            </strong>
          </p>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://itunes.apple.com/co/app/laika/id1325285117?mt=8"
              target="_blank"
              className="text_decoration_general"
            >
              <img
                className="text-right img-fluid img-app_v2 mb-3 lazy"
                data-src="https://laika.com.co/assets/APP.png  "
                src="https://laika.com.co/assets/APP.png  "
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.kubo.laika"
              target="_blank"
              className="text_decoration_general"
            >
              <img
                className="text-right img-fluid img-app_v2 border_dp mb-3 lazy"
                data-src="https://laika.com.co/assets/GOOGLEP.png  "
                src="https://laika.com.co/assets/GOOGLEP.png  "
              />
            </a>
            <a
              href="https://appgallery5.huawei.com/#/app/C101252007"
              target="_blank"
              className="text_decoration_general"
            >
              <img
                className="text-right img-fluid img-app_v2 border_dp mb-3 lazy"
                data-src="https://laika.com.co/assets/huaweiGallery.png  "
                src="https://laika.com.co/assets/huaweiGallery.png  "
              />
            </a>
          </div>
        </div>
        <div
          className="px-0 col-lg-5 mt-0 mt-lg-4 banner_footer_experience"
          style={{ overflow: "hidden" }}
        >
          <img
            data-src="https://laika.com.co/assets/imagen_phone_r.png"
            class="lazy "
            src="https://laika.com.co/assets/imagen_phone_r.png"
          />
        </div>
      </div>
      <div className="allcontent-laika-food">
        <div className="row footer_laika m-auto justify-content-center mb-4 mt-0 mt-md-4 div_footer_principal ">
          <div className="col-md-4 col-lg-2 mt-5 text-center">
            <span>
              <img
                data-src="https://laika.com.co/assets/LAIKA.png  "
                className="ml-2 text-right img-fluid img_laika_footer lazy"
                src="https://laika.com.co/assets/LAIKA.png  "
              />{" "}
              <p
                className="ml-0 ml-md-2 mt-2 p_img_laika_footer mb-0  change-color-social
"
              >
                Síguenos en:
              </p>{" "}
              <p className="ml-0 ml-md-1">
                <span className="">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UC_Syn3ptKsOheb1Yz2MzGgA"
                    className="change-color-social"
                  >
                    <i className="fab fa-youtube fa-2x color_purple"></i>
                  </a>
                </span>{" "}
                <span className="">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/laikamascotas/?hl=es-la"
                    className="change-color-social"
                  >
                    <i className="fab fa-instagram fa-2x color_purple"></i>
                  </a>
                </span>{" "}
                <span className="">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Laikamascotascolombia/"
                    className="change-color-social"
                  >
                    <i className="fab fa-facebook-square fa-2x color_purple"></i>
                  </a>
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerritoLaika;
