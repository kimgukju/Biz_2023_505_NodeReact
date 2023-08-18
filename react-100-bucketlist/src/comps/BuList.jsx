import "../css/BuList.css";

const BuList = ({ children }) => {
  return (
    <>
      <div>보여주기용 더미1 입니다</div>
      <table className="bulist">
        <div>{children}</div>
      </table>
    </>
  );
};
export default BuList;
