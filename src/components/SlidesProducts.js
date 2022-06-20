import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/SlidesProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
    // let formdata = new FormData();
    // formdata.append("name", "Wow Cat Cocinado");
    // formdata.append("descuento", 10);
    // formdata.append(
    //   "imagen",
    //   "https://laika.com.co/cdn-cgi/image/format=auto,quality=80,sharpen=1/https://s3.us-east-1.amazonaws.com/laikapp/images_products/d8c26eacb4f8cdf0d8f4086d50b84eb2.png"
    // );
    // formdata.append("gramos", 300);
    // formdata.append("puntuacion", 5);
    // formdata.append("precio", 3300);
    // formdata.append("descripcion", "Las mascotas lo disfrutan mucho");

    // axios
    //   .post("https://pruebabac.herokuapp.com/api/articulos", formdata)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  }, []);
  console.log(allProducts && allProducts);

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
      for (let i = 0; i < puntuacion; i++) {
        const newOption = document.createElement("div");
        console.log(tagstar);
        tagstar && tagstar.appendChild(newOption);
      }

      return (
        <SwiperSlide key={index} className="sliderimg2">
          <div className="box_products position-relative" key={id}>
            <span id="product_out_of_stock_fav_4414"></span>
            <div className="border_card_products">
              <div className="row classNamess justify-content-center">
                <a
                  href="https://laika.com.co/product_details/bog/salvaje-dieta-horneada-natural-salmon/dog"
                  className="text-center"
                >
                  <img
                    id="img_product_favorities_4414"
                    alt="Salvaje Dieta Horneada Natural Salmon"
                    data-src="https://laika.com.co/cdn-cgi/image/format=auto,quality=80,sharpen=1/https://laikapp.s3.amazonaws.com/dev_images_products/13509_66932_Salvaje_Dieta_Horneada_Natural_Salmon_1618354593_500x500.jpg"
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
                <p className="mb-1" id="starts"></p>{" "}
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
                    <button
                      id="btn_cashback-fav_4414"
                      type="button"
                      data-html="true"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Por la compra de este producto te devolveremos el <b> % en laikacoins</b>"
                      className="btn color_purple span_product_journey font_causten_round_semi_bold_oblique d-none"
                      data-original-title=""
                      title=""
                    >
                      <img
                        src="https://laika.com.co/assets/laika_money.svg"
                        width="10"
                      />
                      <span id="cashback_fav_4414"></span>% Cashback{" "}
                      <i className="fas fa-info-circle color_black_deep"></i>
                    </button>
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
                        <button className="font-12 btn_member btn_laika_member_cards">
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
                    <label for="fav_13509">500 GR</label>
                  </span>
                </div>
              </div>
              <div className="card-footer p-0 mt-1">
                <div id="btn_favs_laika">
                  <button
                    style={{ background: "#603e85" }}
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
          style={{ overflow: "hidden", width: "calc(100% - 2rem)" }}
          spaceBetween={1}
          slidesPerView="auto"
          slidesOffsetBefore={30}
          slidesOffsetAfter={30}
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
