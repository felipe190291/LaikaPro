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
        peerodropup.addEventListener("mouseover", () => {
          if (peerodropup) peerodropup.classList.add("show");
        });
      peerodropup &&
        peerodropup.addEventListener("mouseout", () => {
          if (peerodropup) peerodropup.classList.remove("show");
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
            data-bs-toggle="collapse"
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
        <a className="perri_bonito">
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
        <div className="px-0 d-lg-flex d-lg-none row col-12 mx-auto py-2 bg-white justify-content-center">
          <button style={{ background: "transparent", border: "none" }}>
            <img src=" https://laika.com.co/assets/laika_vetcare/logo_vetcare.png " />
          </button>
        </div>
        <div className="px-0 d-lg-flex d-lg-none row col-12 mx-auto py-2 bg-white justify-content-center">
          <button
            style={{
              background: "#ffc107",
              border: "1px solid #ffc107",
              borderRadius: "10px",
              maxWidth: "10rem",
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
