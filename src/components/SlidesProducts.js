import "../styles/SlidesProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import { useEffect, useState } from "react";
function SlidesProducts() {
  const [allProducts, setallProducts] = useState(null);

  useEffect(() => {
    axios
      .get("https://pruebabac.herokuapp.com/api/articulos")
      .then((res) => {
        console.log(res.data);
        setallProducts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const render_img_mobile =
    allProducts &&
    allProducts.map((e, index) => {
      const imagen = e.imagen;
      const id = e.id;
      const description = e.description;
      const name = e.name;
      const puntuacion = e.puntuacion;
      const descuento = e.descuento;
      const precio = e.precio;
      const tagstar = document.getElementById("starts");
      var arr_start = [];
      for (let i = 0; i < puntuacion; i++) {
        arr_start.push(<i class="fa-xs fa fa-star card_star"></i>);
      }

      return (
        <SwiperSlide key={index} className="sliderimg2">
          <div className="box_products position-relative" key={id}>
            <div className="border_card_products">
              <div className="row classNamess justify-content-center">
                <a
                  href="https://laika.com.co/product_details/bog/salvaje-dieta-horneada-natural-salmon/dog"
                  className="text-center"
                >
                  <img
                    id={"img" + imagen}
                    alt="Salvaje Dieta Horneada Natural Salmon"
                    className="img_card_products ml-auto mr-auto mt-3 mb-3 lazy"
                    style={{ width: "180px" }}
                    src={imagen}
                  />
                </a>
              </div>{" "}
              <div className="card_products ml-3 mt-1 mr-3">
                <a
                  href="https://laika.com.co/product_details/bog/salvaje-dieta-horneada-natural-salmon/dog"
                  style={{ textDecoration: "none" }}
                >
                  <h3
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Salvaje Dieta Horneada Natural Salmon"
                    className="text_product_card mb-2"
                  >
                    {name}
                  </h3>
                </a>{" "}
                {arr_start.length > 0 && arr_start.map((e) => e)}
                <p className="h6 m-0 heigh_container_info_cards">
                  <span id="price_products_fav_4414">
                    <span id="price_fav_4414" className="mr-1">
                      ${precio}
                    </span>{" "}
                    <span
                      id="fav_old_price_4414"
                      className="ml-2 text_old_product d-none"
                    >
                      <span>Antes</span> <br />{" "}
                      <strike
                        id="price_old_fav_4414"
                        className="text_old_price font-11"
                      >
                        ${precio}
                      </strike>
                    </span>{" "}
                    <span className="d-flex m-0 pt-1 mt-1 line_throught_info_cards_top">
                      <span className="mr-1 color_laika_member font-20">
                        <span className="mr-2 fav_price_laika_member_4414">
                          ${precio - precio * (descuento / 100)}{" "}
                        </span>
                      </span>{" "}
                      <span className="btn_container_laika_member m-2">
                        <img
                          width="80"
                          data-src="https://laika.com.co/assets/laikamemeber.svg"
                          className="ml-1 mb-1 lazy"
                          src="https://laika.com.co/assets/laikamemeber.svg"
                        />{" "}
                        <button className="font-4 btn_member btn_laika_member_cards p-2">
                          ADQUIÉRELA YA
                        </button>
                      </span>
                    </span>
                  </span>{" "}
                  <span id="txt_out_of_stock_fav_4414">
                    <span
                      id="out_of_stock_supplier"
                      className="txt_out_of_stock"
                    ></span>
                  </span>
                </p>
                <div className="custom-radio-button pl-1 pt-2 mt-3 custom-radio-button-scroll">
                  <input type="radio" id="fav_13509" required="required" />
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="500 GR"
                    className="text_quantity_product text_overflow_1_line"
                  >
                    <label className="cuadro_gramos">500 GR</label>
                  </span>
                </div>
              </div>
              <div className="card-footer p-0 mt-1">
                <div id="btn_favs_laika">
                  <button
                    style={{ background: "#603e85", width: "100%" }}
                    type="submit"
                    id="btn_general_favorites_4414"
                    className="btn btn-lg btn-block info_bubble  text-white"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });

  return (
    <>
      <div style={{ padding: "0 4rem" }} className="sliderPublicidadprod">
        <Swiper
          style={{ overflow: "hidden", width: "80%", margin: "0 auto" }}
          spaceBetween={1}
          slidesPerView="auto"
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          slidesPerGroup={1}
          slidesPerGroupSkip={1}

          //
          //
          //   spaceBetween={0}
          //   slidesPerView={3}
        >
          {render_img_mobile ? (
            render_img_mobile
          ) : (
            <h1 style={{ color: "#603e85", textAlign: "center" }}>
              <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
              <span class="sr-only"></span>
            </h1>
          )}
        </Swiper>
      </div>
    </>
  );
}

export default SlidesProducts;
