import "../styles/navBar.css";
import colombia from "./assets/colombia_icon_127815.svg";
import { laptopMedia } from "../utils/utils";
// https://code.luasoftware.com/tutorials/bootstrap/bootstrap-hide-element-based-on-viewport-size/
function NavBar() {
  return (
    <>
      <div
        className="mx-auto  justify-content-center header_icons_container  disapearNabBlack"
        style={{ background: "#000" }}
      >
        <div className="mx-auto">
          <span className="color_white font-14  text-left border_solid_1">
            <img
              data-src=" https://laika.com.co/assets/home/secure_mc.svg "
              className="lazy"
              src=" https://laika.com.co/assets/home/secure_mc.svg "
            />{" "}
            Compras seguras online
          </span>
          <span className="color_white ml-md-1 ml-lg-1 font-14  text-left border_solid_1">
            <img
              data-src=" https://laika.com.co/assets/home/wallet_mc.svg "
              className="lazy"
              src=" https://laika.com.co/assets/home/wallet_mc.svg "
            />{" "}
            Pago contra entrega
          </span>
          <span className="color_white ml-md-1 ml-lg-1 font-14  text-left">
            <img
              data-src=" https://laika.com.co/assets/home/truck_mc.svg "
              className="lazy"
              src=" https://laika.com.co/assets/home/truck_mc.svg "
            />{" "}
            Entregas el mismo día
          </span>
        </div>{" "}
        <div className="mx-auto">
          <span className="color_white font_causten_round_semi_bold_oblique ml-md-1 ml-lg-3 font-14 text-right ">
            <div className="whatsapp_container_header mr-2">Llámanos </div>{" "}
            +573009108496
          </span>{" "}
          <a href="mailto:servicioclientes@laika.com.co?Subject=Hola Laika">
            <span
              className="color_white ml-md-1 ml-lg-3 font-14 font_causten_round_semi_bold_oblique text-right "
              style={{ borderleft: " 1px solid white", paddingLeft: "15px" }}
            >
              {" "}
              Escríbenos
            </span>
          </a>{" "}
          <a
            href="https://www.youtube.com/channel/UC_Syn3ptKsOheb1Yz2MzGgA"
            target="_blank"
          >
            <span className="color_white ml-md-1 ml-lg-2 font-14 font_causten_round_semi_bold_oblique text-right ">
              <img
                data-src=" https://laika.com.co/assets/home/youtube_mc.svg "
                className="lazy"
                src=" https://laika.com.co/assets/home/youtube_mc.svg "
              />
            </span>
          </a>{" "}
          <a
            href="https://www.facebook.com/Laikamascotascolombia/"
            target="_blank"
          >
            <span className="color_white ml-md-1 ml-lg-2 font-14 font_causten_round_semi_bold_oblique text-right ">
              <img
                data-src=" https://laika.com.co/assets/home/facebook_mc.svg "
                className="lazy"
                src=" https://laika.com.co/assets/home/facebook_mc.svg "
              />
            </span>
          </a>{" "}
          <a
            href="https://www.instagram.com/laikamascotas/?hl=es-la"
            target="_blank"
          >
            <span className="color_white ml-md-1 ml-lg-2 font-14 font_causten_round_semi_bold_oblique text-right ">
              <img
                data-src=" https://laika.com.co/assets/home/instagram_mc.svg "
                className="lazy"
                src=" https://laika.com.co/assets/home/instagram_mc.svg "
              />
            </span>
          </a>
        </div>
      </div>

      <div className="all-container-nav">
        <div className="container-inside-nav ">
          <div className="d-flex  mb-1 w-100">
            <div className="button-icon-left ">
              <button
                className="button-apparreance-nav"
                style={{ margin: "0 10px" }}
              >
                <span style={{ color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-justify"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="search_canweb mb-0">
              <svg
                className=" "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search lupa_search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
                type="text"
                name="autocomplete_search"
                id="autocomplete_search"
                placeholder="Encuentra lo mejor para mascota"
                className=" form-control"
              />
            </div>
            <div className="button-icon-rigth d-flex">
              <div className="button-apparreance-nav d-flex">
                <img src={colombia} width="30" />
                <select
                  className="button-apparreance-nav"
                  style={{ color: "#ffff" }}
                ></select>
              </div>
              <button
                className="button-apparreance-nav"
                style={{ margin: "0 10px" }}
              >
                <span style={{ color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="div-icon-left ">
            <img
              className="image-dog-laika"
              src="https://laika.com.co/assets/home/LaikaMascotas.svg"
            />
          </div>
        </div>
        <div className="search_can">
          <svg
            className=" "
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search lupa_search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            type="text"
            name="autocomplete_search"
            id="autocomplete_search"
            placeholder="¿Encuentra lo mejor para mascota?"
            className=" form-control"
          />
        </div>
      </div>
      <div className="sugerencias_chat">
        <svg
          style={{ display: "inline-block" }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chat-left-dots"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        <span
          style={{ display: "inline-block", margin: "auto", margin: "4px" }}
        >
          {" "}
          Sugerencias
        </span>{" "}
      </div>
    </>
  );
}

export default NavBar;
