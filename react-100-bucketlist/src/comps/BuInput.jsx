import moment from "moment";
import BuList from "./BuList";
import "../css/BuInput.css";
import { useRef, useState } from "react";

const BuInput = ({ buDto, setbuDto, buInput, buListItemView }) => {
  const [image, setImage] = useState();
  const imageRef = useRef(null);

  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setbuDto({ ...buDto, [name]: value });
  };

  const onBlur = () => {
    buInput();
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (fe) => {
      setImage(fe.target.result);
    };
    fileReader.readAsDataURL(file);
    inputOnChange();
  };

  return (
    <>
      <table>
        <div className="list">
          <input type="text" value={moment().format("YYYY[-]MM[-]DD")} />
          <input type="text" value={moment().format("HH:ss:mm")} />
          <button>새로작성</button>
          <BuList>{buListItemView}</BuList>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={buDto.bSubject}
            name="bSubject"
            onChange={inputOnChange}
            onBlur={onBlur}
          />
          <textarea
            placeholder="내용을 입력하세요"
            value={buDto.bContent}
            name="bContent"
            onChange={inputOnChange}
          />
          <input
            type="file"
            value={buDto.bImage}
            name="bImage"
            accept="image/*"
            onChange={inputOnChange}
          />
          {/* <div>
            <img src={image ? image : ""} width="100px" />
          </div> */}
        </div>
      </table>
    </>
  );
};
export default BuInput;
