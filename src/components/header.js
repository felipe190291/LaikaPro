import "../styles/header.css";

function Header() {
  return (
    <div className="container-header">
      <span>
        <div>
          <a
            href="https://laika.com.co/support/bog/dog"
            className="btn btn-link pl-4 pr-4"
          >
            <div className="w-100 position-relative py-2 sections_sidebar d-flex align-items-center">
              <span className="mr-2 width_icons ">
                <i className="fas fa-headphones-alt fa-lg color_purple"></i>
              </span>{" "}
              <span className="font_nova_semilbold">Soporte</span>{" "}
              <span className="img_rows_absolute">
                <i
                  id="arrow_first_level_cat"
                  className=" fas fa-chevron-right"
                ></i>
              </span>
            </div>
          </a>
        </div>{" "}
      </span>
      <span>
        <div></div>{" "}
        <div>
          <a
            href="https://laika.com.co/terms_conditions/bog"
            className="btn btn-link pl-4 pr-4"
          >
            <div className="w-100 position-relative py-2 sections_sidebar d-flex align-items-center">
              <span className="mr-2 width_icons ">
                <i className="fas fa-file-contract fa-lg color_purple"></i>
              </span>{" "}
              <span className="font_nova_semilbold">
                Terminos y condiciones
              </span>{" "}
              <span className="img_rows_absolute">
                <i
                  id="arrow_first_level_cat"
                  className=" fas fa-chevron-right"
                ></i>
              </span>
            </div>
          </a>
        </div>{" "}
      </span>
      <span>
        <div></div>{" "}
        <div>
          <a
            href="https://laika.com.co/privacy_policies/bog"
            className="btn btn-link pl-4 pr-4"
          >
            <div className="w-100 position-relative py-2 sections_sidebar d-flex align-items-center">
              <span className="mr-2 width_icons ">
                <i className="fas fa-user-shield fa-lg color_purple"></i>
              </span>
              <span className="font_nova_semilbold">
                Políticas de privacidad
              </span>{" "}
              <span className="img_rows_absolute">
                <i
                  id="arrow_first_level_cat"
                  className=" fas fa-chevron-right"
                ></i>
              </span>
            </div>
          </a>
        </div>{" "}
      </span>
      <div>
        <a className="btn btn-link pl-4 pr-4">
          <div className="w-100 position-relative py-2 sections_sidebar d-flex">
            <span className="mr-2 width_icons ">
              <i className="fas fa-sign-out-alt fa-lg color_purple"></i>
            </span>{" "}
            <span className="font_nova_semilbold">Cerrar sesión</span>{" "}
            <span className="img_rows_absolute ">
              <i
                id="arrow_first_level_cat"
                className=" fas fa-chevron-right"
              ></i>
            </span>
          </div>
        </a>
      </div>{" "}
      <div></div>
      <a className="btn btn-link pl-4 pr-4">
        <div className="w-100 position-relative py-2 sections_sidebar d-flex">
          <span className="mr-2 width_icons ">
            <i className="fas fa-sign-out-alt fa-lg color_purple"></i>
          </span>{" "}
          <span className="font_nova_semilbold">Cerrar sesión</span>{" "}
          <span className="img_rows_absolute ">
            <i id="arrow_first_level_cat" className=" fas fa-chevron-right"></i>
          </span>
        </div>
      </a>
      <div></div>
      <div id="search_auto" className="form_search mx-0">
        <div id="user_session" class="align-self-center mt-xl-0 user_session">
          <div className="container_cities d-flex position-relative align-items-center mr-3">
            <div
              data-target="#add_address_first_step_wh"
              data-toggle="modal"
              className="d-flex width_address cursor_pointer align-items-baseline mr-3"
            >
              <div className="font_causten_round_semi_bold_oblique font-14 color_white position_address auxiliar_white_space_nowrap mr-2 address_offline">
                Agregar dirección
              </div>{" "}
              <div>
                <img
                  data-src="https://laika.com.co/assets/home/arrow_down_custom.svg"
                  className="lazy ml-1"
                  src="https://laika.com.co/assets/home/arrow_down_custom.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="user_container_actions font_causten_round_semi_bold_oblique">
          <div className="dropdown">
            <button
              className=" font-13 color_white btn btn_login_register d-none d-sm-block d-xl-block"
              type="button"
              id="dropdown_options"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-1 ">Crear cuenta</span>
              <i className="fa fa-angle-down"></i>
            </button>
            <div
              className="circle_bg_profile cursor_pointer d-block d-sm-none d-xl-none"
              id="dropdown_options"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="lazy vertical_ab profile_img_width"
                data-src="https://laika.com.co/assets/home/profile_mc.svg "
                src="https://laika.com.co/assets/home/profile_mc.svg "
              />
            </div>
            <div
              className="px-2 dropdown-menu dropdown-menu-right text-center  dropdown_options_user"
              aria-labelledby="dropdown_options"
            >
              <button
                className="br-8 w-100 mb-1 font-13 btn mx-auto align-text-middle bg_purple color_white"
                id="layout_login"
                data-toggle="modal"
                data-target="#login"
                style={{ cursor: "pointer" }}
              >
                Iniciar sesión
              </button>
              <div className="font-11  w-100 text-left">
                ¿Eres nuevo cliente?
              </div>
              <button
                className="br-8 w-100 mx-auto btn btn-sm bg-white btn_crear_cuenta"
                id="layout_createAccount"
                data-toggle="modal"
                data-target="#crear_cuenta"
              >
                {" "}
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
        <div id="cart_header" className="header_navbar_small_cart ">
          <div className="btn-group">
            <span
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="cursor_pointer"
            >
              <div className="circle_bg_cart">
                <img
                  data-src=" https://laika.com.co/assets/home/cart_mc.svg "
                  className="lazy vertical_at"
                  style={{ width: "22px" }}
                  src=" https://laika.com.co/assets/home/cart_mc.svg "
                />
              </div>{" "}
              <span className="badge badge_car rounded-circle ">0</span>
            </span>{" "}
            <div
              className="dropdown-menu dropdown-menu-right mt-2 dropdown_cart"
              style={{ background: "rgb(250, 250, 250)" }}
            >
              <div
                className="dropdown-header text-right"
                style={{ padding: "0px 1.5rem !important;" }}
              >
                <span
                  className="font_nova_bold color_purple"
                  style={{ fontSize: "18px", cursor: "pointer" }}
                >
                  X
                </span>
              </div>{" "}
              <div className="dropdown-divider"></div>{" "}
              <div
                className="ml-1 mr-1 pt-3 px-3 pb-1 font_causten_round_semi_bold_oblique"
                style={{ maxHeight: "310px", overflowY: "auto" }}
              >
                <div className="cart-checkout">
                  <p className="mb-0">El carrito está vacio</p>
                </div>{" "}
              </div>{" "}
              <div className="dropdown-divider"></div>{" "}
              <div className="container_without_delivery_free">
                <div className="text-center btn_checkout_cart">
                  <a
                    type="button"
                    className="btn bg_purple text-white shadow rounded disabled"
                    style={{ appearance: " none !important" }}
                  >
                    <div className="text-left">
                      Continuar al Checkout{" "}
                      <span className="text-right cart_price_span">
                        $<span id="price_cart_checkout">0</span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img_laika_1 position-relative">
          <div className="position-absolute">
            <a href="https://laika.com.co/city/bog/dog">
              <img
                data-src="https://laika.com.co/assets/home/LaikaMascotas.svg"
                className="img_laika_navbar lazy"
                src="https://laika.com.co/assets/home/LaikaMascotas.svg"
                alt=""
              />
            </a>
          </div>
        </div>{" "}
        <div className="input-group col-12 col-md-12 col-lg-12 offset-xl-1 col-xl-7 p-0 p-0 searcher_resp_mw">
          <img
            src="https://laika.com.co/assets/home/search_icon_mc.svg"
            id="btn_result_search"
            alt=""
            className="icon_search"
          />{" "}
          <img
            src="https://laika.com.co/assets/home/times_mc.svg"
            id="btnSearcher"
            alt=""
            className="icon_close_searcher btn_close_search_autocomplete_new"
          />{" "}
          <input
            type="text"
            autocomplete="off"
            name="autocomplete_search"
            id="autocomplete_search"
            placeholder="¿Qué necesita tu mascota?"
            className="autocomplete_search_style placeholder form-control"
          />
        </div>
        <div className="px-0 px-sm-2 px-md-2 px-lg-3 mt-5 mt-5 col-md-12 col-lg-12 col-xl-10 "></div>
        <div className="background_banner_experiencie d-flex">
          <div className="col-lg-7 col-xl-8">
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
            <div className="download_icons_home">
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
          <div className="px-0 col-lg-5 mt-0 mt-lg-4 banner_footer_experience">
            <img
              data-src="https://laika.com.co/assets/imagen_phone_r.png"
              class="lazy "
              src="https://laika.com.co/assets/imagen_phone_r.png"
            />
          </div>
        </div>
      </div>
      <div
        id="header_menu"
        className="d-none d-xl-block container-fluid font_causten_round_semi_bold_oblique"
      >
        <div className=" row nav-3 shadow-sm bg-white pl-0 pr-0 ">
          <div className="col-md-10 ml-auto mr-auto position-relative stay_hover_options d-flex">
            <div
              id="hover_dog_submenu"
              className="submenu_header"
              style={{ marginRight: "30px" }}
            >
              <div
                id="menu_perro"
                aria-haspopup="true"
                aria-expanded="false"
                className="d-flex"
              >
                <span className="text-left text-white wspc_no_w">
                  <img
                    width="30"
                    src="https://laika.com.co/assets/home/dog_mc.svg "
                  />{" "}
                  <span id="active-dog_" className="color_purple">
                    Perro
                  </span>
                </span>{" "}
                <div className="px-2">
                  <img
                    src="https://laika.com.co/assets/punto_de_flecha_a_la_derecha_1.svg"
                    alt=""
                    className="pt-1"
                    style={{ height: "11px" }}
                  />
                </div>
              </div>{" "}
              <div className="dropdown_dog_header mt-2">
                <div className="d-flex">
                  <div className="pt-1 pb-3 px-3">
                    <div className="font-20 font_causten_round_extra_bold_oblique d-flex border-bottom pb-2 cursor_pointer">
                      <img
                        src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png "
                        height="30"
                        className="pr-1 mr-2"
                      />{" "}
                      <div style={{ whiteSpace: " nowrap" }}>Alimento</div>
                    </div>{" "}
                    <div className="pt-1 px-3 mx-auto text-left">
                      <div>
                        <div className=" cursor_pointer hover_categories_subcategories">
                          Concentrado
                        </div>{" "}
                        <div className=" cursor_pointer hover_categories_subcategories">
                          Humedo
                        </div>{" "}
                        <div className=" cursor_pointer hover_categories_subcategories">
                          Dietas naturales
                        </div>
                      </div>{" "}
                      <div className="mb-2 cursor_pointer all_categories_a hover_categories_subcategories">
                        Ver más
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-1 pb-3 px-3">
              <div className="font-20 font_causten_round_extra_bold_oblique d-flex border-bottom pb-2 cursor_pointer">
                <img
                  src="https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_SNACKS.png "
                  height="30"
                  className="pr-1 mr-2"
                />{" "}
                <div style={{ whiteSpace: " nowrap" }}>Snacks</div>
              </div>{" "}
              <div className="pt-1 px-3 mx-auto text-left">
                <div>
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Brownies y otros
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Tortas de Celebración
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Huesos y Carnaza
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Galletas y Snacks
                  </div>
                </div>{" "}
                <div className="mb-2 cursor_pointer all_categories_a hover_categories_subcategories">
                  Ver más
                </div>
              </div>
            </div>{" "}
            <div className="pt-1 pb-3 px-3">
              <div className="font-20 font_causten_round_extra_bold_oblique d-flex border-bottom pb-2 cursor_pointer">
                <img
                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png "
                  height="30"
                  className="pr-1 mr-2"
                />{" "}
                <div style={{ whiteSpace: " nowrap" }}>Farmapet</div>
              </div>{" "}
              <div className="pt-1 px-3 mx-auto text-left">
                <div>
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Antiparasitarios
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Suplementos
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Analgésicos
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Antibacterianos
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Antibióticos
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Antiinflamatorios
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Antipulgas y Garrapatas
                  </div>
                </div>{" "}
                <div className="mb-2 cursor_pointer all_categories_a hover_categories_subcategories">
                  Ver más
                </div>
              </div>
            </div>{" "}
            <div className="pt-1 pb-3 px-3">
              <div className="font-20 font_causten_round_extra_bold_oblique d-flex border-bottom pb-2 cursor_pointer">
                <img
                  src="https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png "
                  height="30"
                  className="pr-1 mr-2"
                />{" "}
                <div style={{ whiteSpace: " nowrap" }}>Cuidado e Higiene</div>
              </div>{" "}
              <div className="pt-1 px-3 mx-auto text-left">
                <div>
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Higiene
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Pañales y Tapetes
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Cepillos
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Corta Uñas
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Cuidado Hogar
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Cuidado Oral
                  </div>{" "}
                  <div className=" cursor_pointer hover_categories_subcategories">
                    Protector Vehículos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="footer" className="bg_white">
          <div className="bg_white container-fluid w-100 mb-3 px-0 font_causten_round_semi_bold_oblique">
            <div className="row footer_laika m-auto justify-content-center mb-4 mt-0 mt-md-4 div_footer_principal ">
              <div className="col-md-4 col-lg-2 mt-5 text-center">
                <span>
                  <img
                    data-src="https://laika.com.co/assets/LAIKA.png  "
                    className="ml-2 text-right img-fluid img_laika_footer lazy"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
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
              </div>
              <div className="col-md-2 col-lg-2 mt-2 mt-lg-5 d-none d-lg-block">
                <h2 className="p_title_footer "></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_laika m-auto justify-content-center mb-4 mt-0 mt-md-4 div_footer_principal ">
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
          </div>

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
            <a href="https://laika.com.co/terms_conditions/bog" target="_blank">
              <h3 className="p_text_footer mb-2">Términos y condiciones</h3>
            </a>
          </div>

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
          </div>
          <div className="col-md-2 col-lg-2 mt-5 d-none d-lg-block">
            <h2 className="p_title_footer ">INFORMACIÓN</h2>{" "}
            <h3
              className="p_text_footer mb-2"
              style={{ overflowWap: "break-word" }}
            >
              Teléfono: +573009108496 servicioclientes@laika.com.co Bogotá D.C.,
              Colombia
            </h3>
          </div>
          <div className="col-md-12 col-lg-2 mt-5 d-none d-sm-none d-md-none d-lg-block">
            <h2 className="p_title_footer ">SUSCRÍBETE</h2>{" "}
            <h3 className="p_text_footer mb-2 pt-0 mb-2 ">
              Recibe noticias y promociones al instante.
            </h3>
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
                    style={{ width: "30px", height: "25px" }}
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
                  name="check_notifications"
                  id="check_notifications"
                  className="custom-control-input check_subscription"
                />{" "}
                <label
                  for="check_notifications"
                  className="custom-control-label pt-1 font-11 color_purple"
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
        </div>
        <div
          id="accordionFooter"
          className="col-md-12 d-md-block  d-lg-none accordion mb-2"
        >
          <div
            className="card shadow-sm mb-2 w-100"
            style={{ border: " 0px solid white" }}
          >
            <div
              id="headingOne_about"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              className="card-header  bg-white row"
              style={{ cursor: " pointer", borderBottom: "0px solid white" }}
            >
              <h2 className="btn_acordion  p-2  pl-2 col-10 col-sm-11"></h2>
            </div>
          </div>
        </div>

        <div className="box_products position-relative">
          <span id="product_out_of_stock_fav_12539"></span>
          <div className="border_card_products">
            <div className="row classNamess justify-content-center">
              <a href="https://laika.com.co/product_details/bog/purina-one-super-foods-perros-cachorros-y-adultos-salmon/dog">
                <img
                  id="img_product_favorities_12539"
                  alt="Purina One Super Foods Perros Cachorros Y Adultos Salmón"
                  data-src="https://laika.com.co/cdn-cgi/image/format=auto,quality=80,sharpen=1/https://laikapp.s3.amazonaws.com/dev_images_products/76050_Purina_One_Super_Foods_Perros_Cachorros_Y_Adultos_Salm__n_1647448739_0_500x500.jpg"
                  className="img_card_products ml-auto mr-auto mt-3 mb-3 lazy"
                  style={{ width: "180px" }}
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                />
              </a>
            </div>
            <div className="card_products ml-3 mt-1 mr-3">
              <a href="https://laika.com.co/product_details/bog/purina-one-super-foods-perros-cachorros-y-adultos-salmon/dog">
                <h3
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Purina One Super Foods Perros Cachorros Y Adultos Salmón"
                  className="text_product_card mb-2"
                >
                  Purina One Super Foods Perros Cachorros Y Adultos Salmón
                </h3>
              </a>
              <p className="mb-1">
                <i className="fa-xs fa fa-star card_star"></i>{" "}
                <i className="fa-xs fa fa-star card_star"></i>{" "}
                <i className="fa-xs fa fa-star card_star"></i>{" "}
                <i className="fa-xs fa fa-star card_star"></i>{" "}
                <i className="fa-xs fa fa-star card_star"></i>
              </p>
              <p className="h6 m-0 heigh_container_info_cards">
                <span id="price_products_fav_12539">
                  <span id="price_fav_12539" className="mr-1">
                    $4.800
                  </span>{" "}
                  <span
                    id="fav_old_price_12539"
                    className="ml-2 text_old_product d-none"
                  >
                    <span>Antes</span> <br />{" "}
                    <strike
                      id="price_old_fav_12539"
                      className="text_old_price font-11"
                    >
                      $4.800
                    </strike>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="box_products position-relative">
        <span id="product_out_of_stock_fav_4414"></span>
        <div className="border_card_products">
          <div className="row classNamess justify-content-center">
            <a href="https://laika.com.co/product_details/bog/salvaje-dieta-horneada-natural-salmon/dog">
              <img
                id="img_product_favorities_4414"
                alt="Salvaje Dieta Horneada Natural Salmon"
                data-src="https://laika.com.co/cdn-cgi/image/format=auto,quality=80,sharpen=1/https://laikapp.s3.amazonaws.com/dev_images_products/13509_66932_Salvaje_Dieta_Horneada_Natural_Salmon_1618354593_500x500.jpg"
                className="img_card_products ml-auto mr-auto mt-3 mb-3 lazy"
                style={{ width: "180px" }}
                src="https://laika.com.co/cdn-cgi/image/format=auto,quality=80,sharpen=1/https://laikapp.s3.amazonaws.com/dev_images_products/13509_66932_Salvaje_Dieta_Horneada_Natural_Salmon_1618354593_500x500.jpg"
              />
            </a>
          </div>{" "}
          <div className="card_products ml-3 mt-1 mr-3">
            <a href="https://laika.com.co/product_details/bog/salvaje-dieta-horneada-natural-salmon/dog">
              <h3
                data-toggle="tooltip"
                data-placement="top"
                title="Salvaje Dieta Horneada Natural Salmon"
                className="text_product_card mb-2"
              >
                Salvaje Dieta Horneada Natural Salmon
              </h3>
            </a>{" "}
            <p className="mb-1">
              <i className="fa-xs fa fa-star card_star"></i>
              <i className="fa-xs fa fa-star card_star"></i>{" "}
              <i className="fa-xs fa fa-star card_star"></i>{" "}
              <i className="fa-xs fa fa-star card_star"></i>{" "}
              <i className="fa-xs fa fa-star card_star"></i>
            </p>{" "}
            <p className="h6 m-0 heigh_container_info_cards">
              <span id="price_products_fav_4414">
                <span id="price_fav_4414" className="mr-1">
                  $5.900
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
                    $5.900
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
                <span className="row m-0 pt-1 mt-1 line_throught_info_cards_top">
                  <span className="mr-1 color_laika_member font-20">
                    <span className="mr-2 fav_price_laika_member_4414">
                      $5.015{" "}
                    </span>
                  </span>{" "}
                  <span className="btn_container_laika_member">
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
              <div>
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
          </div>
          <div className="card-footer p-0 mt-1">
            <div id="btn_favs_laika">
              <button
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
    </div>
  );
}

export default Header;
