import css from "./ImageModal.module.css";

const ImageModalWindow = ({ modal, setModal }) => {
  const { imgSrc, imgImage, modalState } = modal;
  return (
    <div className={(modalState && css.modal_open) || css.modal_close}>
      <span>&times;</span>
      <div className={css.modal_dialog}>
        <div className={css.modal_content}>
          <div className="header"></div>
          <div className="body"></div>
          <div className="footer">CopyRight &copy; callor@callor.com</div>
        </div>
      </div>
    </div>
  );
};
export default ImageModalWindow;
