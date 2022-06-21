import "../styles/navBar.css";
import colombia from "./assets/colombia_icon_127815.svg";
import { laptopMedia } from "../utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";

// https://code.luasoftware.com/tutorials/bootstrap/bootstrap-hide-element-based-on-viewport-size/
function NavBar() {
  const [Ciudades, setCiudades] = useState(null);

  useEffect(() => {
    axios
      .post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: "Colombia",
      })
      .then((res) => {
        setCiudades(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
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
          <i class="fa-brands fa-whatsapp-square"></i>
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
            <div className="search_canweb my-auto">
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
              <div className="button-apparreance-nav">
                <img src={colombia} width="30" style={{ margin: "auto" }} />
                <select
                  className="button-apparreance-nav"
                  style={{
                    color: "#ffff",
                    background: "#614186",
                    textTransform: "uppercase",
                    maxWidth: "55px",
                  }}
                >
                  {Ciudades &&
                    Ciudades.sort().map((e) => (
                      <option value={e}>{e.slice(0, 3)}</option>
                    ))}
                </select>
              </div>
              <div className="button-apparreance-nav media_disappear_cuenta">
                <img
                  src="https://laika.com.co/assets/home/profile_mc.svg "
                  width="30"
                  style={{
                    marginLeft: "22vw",
                    borderRadius: "50%",
                    background: " #472f62",
                    width: "25px",
                    height: "25px",
                    padding: "5px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginRight: "5px",
                  }}
                />
                <div style={{ margin: "auto", color: "white" }}>Mi cuenta</div>
              </div>
              <button
                className="button-apparreance-nav"
                style={{ margin: "auto 4vw auto 1vw" }}
              >
                <span style={{ color: "white", position: "relative" }}>
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
                  <span
                    style={{
                      position: "absolute",
                      background: "#ff007a",
                      color: "white",
                      width: "15px",
                      height: "15px",
                      fontSize: "12px",
                      padding: "auto",
                      minWidth: "fit-content",
                      display: "inline-block",
                      fontWeight: "700",
                      lineHeight: "1",
                      borderRadius: "100%",
                    }}
                  >
                    8
                  </span>
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
      <a
        href="https://api.whatsapp.com/send?phone=573042996908&text=Hola!%20Quiero%20saber%20mas%20de tu proyecto!"
        target="_blank"
      >
        <div className="chat_whatsapp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </div>
      </a>
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
