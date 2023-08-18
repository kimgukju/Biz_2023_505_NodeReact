import moment from "moment";

export const BuData = {
  id: "",
  bDate: moment().format("YYYY[-]MM[-]DD"),
  bTime: moment().format("HH:ss:mm"),
  bSubject: "",
  bContent: "",
  bImage: "",
};

export const BuList = [BuData];
