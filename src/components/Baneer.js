import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Banner.css";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

function Banner() {
  SwiperCore.use([Pagination, Autoplay, Navigation]);
  const publicidad_mobile = [
    {
      imgl: "https://laika.com.co/cdn-cgi/image/format=auto,quality=80,sharpen=1/https://laikapp.s3.amazonaws.com/dev_images_banners/1651535370MicrosoftTeams-image%20%2835%29.png",
      id: "123",
    },
    {
      imgl: "https://laika.com.co/cdn-cgi/image/format=auto,quality=80,sharpen=1/https://laikapp.s3.amazonaws.com/dev_images_banners/1653059502BANNER.jpg",
      id: "321",
    },
  ];

  const render_img_mobile = publicidad_mobile.map((imagen, index) => {
    const def_img = imagen.imgl;
    const id = imagen.id;

    return (
      <SwiperSlide key={id} className="sliderimg">
        <img src={def_img} alt={"mobile" + id} />
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        className="sliderPublicidad"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          el: ".bulletsPublicidad",
          type: "custom",
          renderCustom: function (swip, current, total) {
            current -= 1;
            return render_img_mobile
              .map((value, index) => {
                return `<div class='swiper-pagination-bullet mx-2 ${
                  current === index ? "active" : ""
                }'></div>`;
              })
              .join("");
          },
        }}
      >
        {render_img_mobile}
      </Swiper>

      <div className="bulletsPublicidad"></div>
      <br />
      <Swiper
        style={{ overflow: "hidden", width: "calc(100% - 5rem)" }}
        navigation={true}
        modules={[Navigation]}
        slidesPerView="auto"
        className="mySwiperde"
        spaceBetween={30}
        slidesOffsetBefore={40}
        slidesOffsetAfter={10}
        slidesPerGroup={1}
        slidesPerGroupSkip={1}
      >
        <SwiperSlide style={{ width: "auto" }}>
          <li className="item-a lslide active" style={{ marginRight: "10px" }}>
            <div className="py-4 card_categories_home px-3 pt-2 pb-2 text-center cursor_pointer">
              <div className="pb-2">
                <img
                  data-src="https://laikapp.s3.amazonaws.com/images_categories/categoria_alimento-min.png"
                  className="img-fluid box_categories_v2 text-center mx-auto d-block lazy"
                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_alimento-min.png"
                />
              </div>
              <h3 className="font-14">Alimento</h3>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="item-a lslide" style={{ marginRight: "10px" }}>
            <div className="py-4 card_categories_home px-3 pt-2 pb-2 text-center cursor_pointer">
              <div className="pb-2">
                <img
                  data-src="https://laikapp.s3.amazonaws.com/images_categories/categoria_snacks-min.png"
                  className="img-fluid box_categories_v2 text-center mx-auto d-block lazy"
                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_snacks-min.png"
                />
              </div>
              <h3 className="font-14">Snacks</h3>
            </div>
          </li>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <li className="item-a lslide" style={{ marginRight: "10px" }}>
            <div className="py-4 card_categories_home px-3 pt-2 pb-2 text-center cursor_pointer">
              <div className="pb-2">
                <img
                  data-src="https://laikapp.s3.amazonaws.com/images_categories/categoria_farmacia.png"
                  className="img-fluid box_categories_v2 text-center mx-auto d-block lazy"
                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_farmacia.png"
                />
              </div>
              <h3 className="font-14">Accesorios</h3>
            </div>
          </li>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <li className="item-a lslide" style={{ marginRight: "10px" }}>
            <div className="py-4 card_categories_home px-3 pt-2 pb-2 text-center cursor_pointer">
              <div className="pb-2">
                <img
                  data-src="https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios.png"
                  className="img-fluid box_categories_v2 text-center mx-auto d-block lazy"
                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios.png"
                />
              </div>
              <h3 className="font-14">Juguetes</h3>
            </div>
          </li>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <li className="item-a lslide" style={{ marginRight: "10px" }}>
            <div className="py-4 card_categories_home px-3 pt-2 pb-2 text-center cursor_pointer">
              <div className="pb-2">
                <img
                  data-src="https://laikapp.s3.amazonaws.com/images_categories/categoria_higiene.png"
                  className="img-fluid box_categories_v2 text-center mx-auto d-block lazy"
                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_higiene.png"
                />
              </div>{" "}
              <h3 className="font-14">Cuidado e Higiene</h3>
            </div>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="item-a lslide" style={{ marginRight: "10px" }}>
            <div className="py-4 card_categories_home px-3 pt-2 pb-2 text-center cursor_pointer">
              <div className="pb-2">
                <img
                  data-src="https://laikapp.s3.amazonaws.com/images_categories/categoria_petlover.png"
                  className="img-fluid box_categories_v2 text-center mx-auto d-block lazy"
                  src="https://laikapp.s3.amazonaws.com/images_categories/categoria_petlover.png"
                />
              </div>{" "}
              <h3 className="font-14">Para PetLovers</h3>
            </div>
          </li>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
