const BuItem = ({ item, seq }) => {
  return (
    <tr>
      {/* <td>{item.bImage}</td> */}
      <img src={item.bImage} />
      <td>{seq + 1}</td>
      <td>{item.bSubject}</td>
    </tr>
  );
};

export default BuItem;
