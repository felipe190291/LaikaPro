import { useEffect } from "react";
import "../styles/SectionOne.css";
import { laptopMedia } from "../utils/utils";
function SectionOne() {
  useEffect(() => {
    if (laptopMedia.matches) {
      const peerodrop = document.getElementById("perroAparece");
      const peerodropup = document.getElementById("dropdownDog");
      peerodrop &&
        peerodrop.addEventListener("mouseover", () => {
          if (peerodropup) peerodropup.classList.add("show");
        });
      peerodropup &&
        peerodropup.addEventListener("mouseout", () => {
          if (peerodropup) peerodropup.classList.remove("show");
        });
      peerodropup &&
        peerodropup.addEventListener("mouseover", () => {
          if (peerodropup) peerodropup.classList.add("show");
        });
    }
  });

  return (
    <>
      <div className=" row col-12 mx-auto py-2  justify-content-center ">
        <a className="perri_bonito">
          <div
            className="d-flex"
            id="perroAparece"
            data-bs-toggle={laptopMedia.matches ? "collapse" : ""}
            data-bs-target="#dropdownDog"
            aria-controls="dropdownDog"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="ml-2"
              style={{
                background: "#603e85",
                color: " #fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              Perro
            </span>
            <span
              className="ml-2"
              style={{ background: "#603e85", color: " #fff" }}
            >
              <img src="https://laika.com.co/assets/home/dog_mc.svg " />
            </span>
          </div>
        </a>
        <a className="gato_bonito">
          <div className="d-flex" style={{ textDecoration: "none" }}>
            <span
              className="ml-2"
              style={{
                color: " #000000",
                display: "flex",
                alignItems: "center",
              }}
            >
              Gato
            </span>
            <span className="ml-2" style={{ color: " #fff" }}>
              <img src="https://laika.com.co/assets/home/cat_mc_s.svg " />
            </span>
          </div>
        </a>
        <a className="perri_bonito_media">
          <div
            className="d-flex"
            id="perroAparece"
            data-bs-toggle={laptopMedia.matches ? "collapse" : ""}
            data-bs-target="#dropdownDog"
            aria-controls="dropdownDog"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="ml-2"
              style={{
                color: " #603e85",
                display: "flex",
                alignItems: "center",
              }}
            >
              Ofertas
            </span>
            <span className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </div>
        </a>
        <a className="perri_bonito_media">
          <div
            className="d-flex"
            id="perroAparece"
            data-bs-toggle={laptopMedia.matches ? "collapse" : ""}
            data-bs-target="#dropdownDog"
            aria-controls="dropdownDog"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="ml-2"
              style={{
                color: " #603e85",
                display: "flex",
                alignItems: "center",
              }}
            >
              Servicios
            </span>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </div>
        </a>
        <a className="perri_bonito_media">
          <div
            className="d-flex"
            id="perroAparece"
            data-bs-toggle={laptopMedia.matches ? "collapse" : ""}
            data-bs-target="#dropdownDog"
            aria-controls="dropdownDog"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="ml-2"
              style={{
                color: " #603e85",

                alignItems: "center",
              }}
            >
              Blog{" "}
            </span>
          </div>
        </a>
        <div className="perri_bonito_media">
          <button style={{ background: "transparent", border: "none" }}>
            <img
              width={120}
              src=" https://laika.com.co/assets/laikamemeber.svg "
            />
          </button>
        </div>
        <div className="perri_bonito_media">
          <button
            style={{
              background: "#ffc107",
              border: "1px solid #ffc107",
              borderRadius: "10px",
              minWidth: "120px",
              fontSize: "0.7rem",
              fontWeight: "bold",
            }}
          >
            ADQUIERELA YA
          </button>
        </div>
        <div className="px-0 d-lg-flex d-lg-none row col-12 mx-auto py-2 bg-white justify-content-center">
          <button style={{ background: "transparent", border: "none" }}>
            <img
              width={150}
              src=" https://laika.com.co/assets/laikamemeber.svg "
            />
          </button>
        </div>
        <div className="px-0 d-lg-flex d-lg-none row col-12 mx-auto py-2 bg-white justify-content-center">
          <button
            style={{
              background: "#ffc107",
              border: "1px solid #ffc107",
              borderRadius: "10px",
              maxWidth: "10rem",
              padding: "5px",
              fontWeight: "bold",
            }}
          >
            ADQUIERELA YA
          </button>
        </div>
        <div className="collapse navbar-collapse" id="dropdownDog">
          <div
            className="d-flex  shadow-sm  m-3 "
            style={{ flexDirection: "column" }}
          >
            <button
              id="headingOne_about"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              className="card-header  bg-white row"
              style={{
                backgroundColor: "#ffff",
                border: "0px solid #ffff",
                textAlign: "left",
                color: "#603e85",
                fontWeight: "700",
                padding: "1rem",
                position: "relative",
                letterSpacing: "normal",
                fontSize: "13px",
              }}
            >
              Alimento
            </button>
            <i
              style={{
                position: "absolute",
                right: 0,
                margin: "1rem 2rem",
                color: "#603e85",
              }}
              class="fas fa-chevron-right color_purple status_footer_arrow"
            ></i>
          </div>
          <div
            id="collapseOne"
            aria-labelledby="headingOne_about"
            data-parent="#accordionFooter"
            className="collapse"
          >
            <div className="card-body px-3 py-2">
              <a href="https://laika.com.co/about_us/bog">
                <div className="btn-group dropend">
                  <button
                    style={{ border: "none", minWidth: "23rem" }}
                    className=" dropdown-toggle button_despliegue"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Concentrado
                  </button>
                  <ul class="dropdown-menu">
                    <li
                      style={{
                        width: "35vw",
                        margin: "2rem",

                        borderRadius: "10px",
                        backgroundColor: " #ffb100",
                        border: "1px solid #ffb100",
                      }}
                    >
                      <a class="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="button_despliegue_text m-auto">
                            Médico en casa
                          </div>
                          <img
                            style={{ maxWidth: "15rem" }}
                            src="https://laikapp.s3.amazonaws.com/images_services/veterinaria-min.png"
                          />
                        </div>
                      </a>
                    </li>
                    <li
                      style={{
                        width: "35vw",
                        margin: "2rem",

                        borderRadius: "10px",
                        backgroundColor: " #bacbf8",
                        border: "1px solid #bacbf8",
                      }}
                    >
                      <a class="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="button_despliegue_text m-auto">
                            Asesorias
                          </div>
                          <img
                            style={{ maxWidth: "15rem" }}
                            src="https://laikapp.s3.amazonaws.com/general_vetcare/asistencia_2.png"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div
            id="collapseOne"
            aria-labelledby="headingOne_about"
            data-parent="#accordionFooter"
            className="collapse"
          >
            <div className="card-body px-3 py-2">
              <a href="https://laika.com.co/about_us/bog">
                <div className="btn-group dropend">
                  <button
                    style={{ border: "none", minWidth: "23rem" }}
                    className=" dropdown-toggle button_despliegue"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dietas naturales
                  </button>
                  <ul class="dropdown-menu">
                    <li style={{ width: "40vw", backgroundColor: " #bacbf8" }}>
                      <a class="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="button_despliegue_text m-auto">
                            Médico en casa
                          </div>
                          <img src="https://laikapp.s3.amazonaws.com/images_services/veterinaria-min.png" />
                        </div>
                      </a>
                    </li>
                    <li style={{ width: "40vw", backgroundColor: " #bacbf8" }}>
                      <a class="dropdown-item" href="#">
                        <div className="d-flex">
                          <div className="button_despliegue_text m-auto">
                            Asesorias
                          </div>
                          <img
                            style={{ maxWidth: "20rem" }}
                            src="https://laikapp.s3.amazonaws.com/general_vetcare/asistencia_2.png"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div
            className="d-flex  shadow-sm  m-3 "
            style={{ flexDirection: "column" }}
          >
            <button
              style={{
                backgroundColor: "#ffff",
                border: "0px solid #ffff",
                textAlign: "left",
                color: "#603e85",
                fontWeight: "700",
                padding: "1rem",
                position: "relative",
                letterSpacing: "normal",
                fontSize: "13px",
              }}
            >
              Snacks
            </button>
            <i
              style={{
                position: "absolute",
                right: 0,
                margin: "1rem 2rem",
                color: "#603e85",
              }}
              class="fas fa-chevron-right color_purple status_footer_arrow"
            ></i>
          </div>
          <div
            className="d-flex  shadow-sm  m-3 "
            style={{ flexDirection: "column" }}
          >
            <button
              style={{
                backgroundColor: "#ffff",
                border: "0px solid #ffff",
                textAlign: "left",
                color: "#603e85",
                fontWeight: "700",
                padding: "1rem",
                position: "relative",
                letterSpacing: "normal",
                fontSize: "13px",
              }}
            >
              Juguetes
            </button>
            <i
              style={{
                position: "absolute",
                right: 0,
                margin: "1rem 2rem",
                color: "#603e85",
              }}
              class="fas fa-chevron-right color_purple status_footer_arrow"
            ></i>
          </div>
          <div
            className="d-flex  shadow-sm  m-3 "
            style={{ flexDirection: "column" }}
          >
            <button
              style={{
                backgroundColor: "#ffff",
                border: "0px solid #ffff",
                textAlign: "left",
                color: "#603e85",
                fontWeight: "700",
                padding: "1rem",
                position: "relative",
                letterSpacing: "normal",
                fontSize: "13px",
              }}
            >
              Accesorios
            </button>
            <i
              style={{
                position: "absolute",
                right: 0,
                margin: "1rem 2rem",
                color: "#603e85",
              }}
              class="fas fa-chevron-right color_purple status_footer_arrow"
            ></i>
          </div>
          <div
            className="d-flex  shadow-sm  m-3 "
            style={{ flexDirection: "column" }}
          >
            <button
              style={{
                backgroundColor: "#ffff",
                border: "0px solid #ffff",
                textAlign: "left",
                color: "#603e85",
                fontWeight: "700",
                padding: "1rem",
                position: "relative",
                letterSpacing: "normal",
                fontSize: "13px",
              }}
            >
              Alimento
            </button>
            <i
              style={{
                position: "absolute",
                right: 0,
                margin: "1rem 2rem",
                color: "#603e85",
              }}
              class="fas fa-chevron-right color_purple status_footer_arrow"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
