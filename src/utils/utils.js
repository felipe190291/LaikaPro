import "./utils.css";
export const laptopMedia = window.matchMedia("(min-width: 1024px)");
export const AccordionItem = (props) => {
  const parent = props.dataBsParent;
  const children = props.children;
  const title = props.title;
  const clase = props.clase;
  const key_1 = props.key;
  const item = props.item;
  const id = props.id;
  const all_divs = children.map((imagen, index) => {
    const def_img = imagen;
    const id = index;

    return (
      <div
        key={id}
        className="sliderimg my-2 px-3"
        style={{
          textAlign: "left",
          color: "#603e85",
          fontWeight: "700",

          position: "relative",
          letterSpacing: "normal",
          fontSize: "13px",
        }}
      >
        {def_img}
      </div>
    );
  });

  return (
    <div
      className="d-flex  shadow-sm  m-3 "
      style={{ flexDirection: "column" }}
      key={children}
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
        data-bs-toggle="collapse"
        data-bs-target={`#demox${item}`}
        aria-expanded="true"
        aria-controls={`demox${item}`}
      >
        {title}
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
      <div
        class="collapse in card_collapse shadow-sm-cardl "
        id={`demox${item}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${item}`}
        data-bs-parent={parent}
      >
        {all_divs}
      </div>
    </div>
  );
};
