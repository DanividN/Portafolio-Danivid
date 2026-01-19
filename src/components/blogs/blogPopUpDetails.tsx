import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const BlogPopUpDetails = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="btn-wrapper">
        <button
          onClick={() => setOpen(true)}
          className="bttn-round modal-popup"
        >
          <span className="btn-txt">
            View <i className="bi bi-arrow-up-right" />
          </span>
        </button>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        classNames={{ closeButton: "mfp-close", modal: "popup_content_area" }}
        styles={{
          closeButton: { display: "none" },
          modal: {
            padding: 0,
            backgroundColor: "transparent",
            margin: "75px 20px",
            overflow: "visible",
            boxShadow: "none",
          },
        }}
        focusTrapped={false}
        initialFocusRef={undefined}
      >
        <div className="mfp-close" onClick={() => setOpen(false)}>
          ×
        </div>
        <div id="blog-popup" className="popup_content_area">
          <div className="popup_modal_content">
            <div className="project-info-wrapper">
              <div className="thumbnail-wrapper">
                <img
                  src="images/popup-blog/blog-thumbnail.png"
                  alt="thumbnail"
                />
              </div>
              <div className="blog-meta d-flex mt-4">
                <span>Design &nbsp;</span>
                <p>24 May, 2025</p>
              </div>
              <div className="project-details">
                <h3>Phasellus ultricies comd erat a cursus.</h3>
                <p>
                  Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus
                  felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis
                  dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed
                  magna accumsan neque fermentum laoreet. Ut nunc.
                </p>
                <h5 className="my-3">Where does it come from template</h5>
                <p>
                  Duis sed augue condimentum, blandit sapien in, accumsan eros.
                  Curabitur sodales pulvinar libero et venenatis. Nullam
                  eleifend risus a quam dictum auctor. Mauris at leo non dui
                  euismod varius. Cras vel erat at est aliquam laoreet. Donec
                  tincidunt, nunc eu gravida malesuada, tellus leo.
                </p>
                <h6 className="my-4">
                  Donec ac augue a enim tempus cinia sed id odio. Orci arius
                  natoque penatibu magnis parturient elementum.
                </h6>
                <p className="mb-4">
                  Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus
                  felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis
                  dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed
                  magna accumsan neque fermentum laoreet. Ut nunc Mauris at leo
                  non dui euismod varius.
                </p>
                <hr className="hr w-100" />
                <div className="footer-modal d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-arrow-left" />
                  </div>
                  <span>
                    <i className="bi bi-microsoft" />
                  </span>
                  <div>
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
                <hr className="hr w-100 hr-2" />
                <h4 className="mb-3">Comments</h4>
                <div className="blogger-one">
                  <div className="d-block d-sm-flex">
                    <img src="images/popup-blog/blogger-1.png" alt="blogger" />
                    <div className="my-2 my-sm-0">
                      <h6>Monsur Rahman Lito</h6>
                      <p className="mt-1">
                        Phasellus ac consequat turpis, sit amet fermentum nulla.
                        Donec dignissim augue nunc. Praesent bibendum erat ac
                        lectus lobortis.
                      </p>
                    </div>
                    <button className="reply bttn bttn-primary">Reply</button>
                  </div>
                </div>
                <hr className="hr w-100 my-3" />
                <div className="blogger-two ms-5">
                  <div className="d-block d-sm-flex">
                    <img src="images/popup-blog/blogger-2.png" alt="blogger" />
                    <div className="my-2 my-sm-0">
                      <h6>Towkibur Rahman</h6>
                      <p className="mt-1">
                        Phasellus ac consequat turpis, sit amet fermentum nulla.
                        Donec dignissim augue nunc. Praesent bibendum erat.
                      </p>
                    </div>
                    <button className="reply bttn bttn-primary">Reply</button>
                  </div>
                </div>
                <h4 className="my-3 pt-2">Post Comments</h4>
                <form id="blog-form">
                  <div className="user-details row">
                    <div className="input-box col-md-6">
                      <label className="details" htmlFor="f-name">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="f-name"
                        className="text"
                        name="f_name"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="input-box col-md-6">
                      <label className="details" htmlFor="l-name">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="l-name"
                        className="text"
                        name="l_name"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="input-box col-md-6">
                      <label className="details" htmlFor="mail-addr">
                        Email
                      </label>
                      <input
                        type="email"
                        id="mail-addr"
                        className="text"
                        name="mail-addr"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="input-box col-md-6">
                      <label className="details" htmlFor="phoneNo">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNo"
                        className="text"
                        name="phoneNo"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="user-message">
                    <label className="details" htmlFor="comment">
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      cols={1}
                      rows={1}
                      placeholder="Write your comment..."
                      autoComplete="off"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <button className="bttn bttn-primary" type="submit">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BlogPopUpDetails;
