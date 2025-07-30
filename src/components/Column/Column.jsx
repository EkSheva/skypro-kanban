import { cardList } from "../../mock/data";
import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
import { Cards, ColumnTitle, MainColumn, PTitle } from "./Column.styled";
const Column = ({ title, loading }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <PTitle>{title}</PTitle>
      </ColumnTitle>
      <Cards>
        {cardList
          .filter((item) => item.status === title)
          .map((item) =>
            loading ? (
              <CardLoader key={item.id} />
            ) : (
              <Card item={item} key={item.id} />
            )
          )}
      </Cards>
    </MainColumn>
  );
};

export default Column;
