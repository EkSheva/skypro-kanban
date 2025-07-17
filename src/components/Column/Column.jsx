import { cardList } from "../../../data";
import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
const Column = ({ title, loading }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList
          .filter((item) => item.status === title)
          .map((item, id) =>
            loading ? <CardLoader tem={item} key={id} /> : <Card item={item} key={id} />
          )}
      </div>
    </div>
  );
};

export default Column;
