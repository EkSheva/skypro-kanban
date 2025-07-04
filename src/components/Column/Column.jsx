import Card from "../Card/Card";
const Column = () => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>Нужно сделать</p>
      </div>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
};

export default Column;
