import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const PortfolioDetailsPopUp = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="rounded-btn modal-popup">
        View <i className="bi bi-arrow-up-right" />
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
          },
        }}
      >
        <div className="mfp-close" onClick={() => setOpen(false)}>
          ×
        </div>
        <div className="popup_content_area">
          <div className="popup_modal_content">
            <div className="project-info-wrapper">
              <div className="thumbnail-wrapper">
                <img
                  width={650}
                  height={404}
                  src="/images/popup/popup-project-thumb.png"
                  alt="thumbnail"
                />
              </div>
              <div className="project-client-meta d-flex flex-wrap justify-content-between">
                <div className="client-meta">
                  <p>Clients:</p>
                  <h6>MD Towkib Tanvir</h6>
                </div>
                <div className="client-meta">
                  <p>Category:</p>
                  <h6>Business Consulting</h6>
                </div>
                <div className="client-meta">
                  <p>Timeframe:</p>
                  <h6>August 05, 2025</h6>
                </div>
              </div>
              <hr className="hr w-100" />
              <div className="project-details">
                <h3>Dashboard Design</h3>
                <p>
                  Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus
                  felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis
                  dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed
                  magna accumsan neque fermentum laoreet. Ut nunc.
                </p>
                <ul>
                  <li>Will you provide website layout about design</li>
                  <li>Branding With Business Agency</li>
                  <li>Why should I work with an agency over a freelancer</li>
                  <li>How much do you charge for branding</li>
                </ul>
                <div className="other-project-img row">
                  <div className="col-md-6">
                    <div>
                      <img
                        width={301}
                        height={246}
                        src="/images/popup/popup-img-1.png"
                        alt="thumbnail"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div>
                      <img
                        width={301}
                        height={246}
                        src="/images/popup/popup-img-2.png"
                        alt="thumbnail"
                      />
                    </div>
                  </div>
                </div>
                <hr className="hr w-100" />
                <div className="footer-modal d-flex justify-content-between align-items-center">
                  <div aria-label="button">
                    <i className="bi bi-arrow-left" />
                  </div>
                  <span>
                    <i className="bi bi-microsoft" />
                  </span>
                  <div aria-label="button">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioDetailsPopUp;
