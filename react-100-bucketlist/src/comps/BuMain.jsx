import { useState } from "react";
import BuInput from "./BuInput";
import { BuData as buData } from "../data/BuData";
import BuItem from "./buItem";

import uuid from "react-uuid";

const Main = () => {
  const [buDto, setbuDto] = useState(buData);
  const [buList, setbuList] = useState([]);

  const buInput = () => {
    let newBudto = { ...buData };
    if (!buDto.id) {
      newBudto = {
        ...buDto,
        id: uuid(),
      };
    }
    setbuList([...buList, newBudto]);
  };

  const buListItemView = buList?.map((item, index) => {
    return <BuItem item={item} seq={index} />;
  });

  return (
    <>
      <BuInput
        buDto={buDto}
        setbuDto={setbuDto}
        buInput={buInput}
        buListItemView={buListItemView}
      />
    </>
  );
};
export default Main;
