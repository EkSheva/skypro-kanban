import Date from "../Date/Date/Date";
import {
  CardBtn,
  CardBtnDiv,
  CardContent,
  CardGroup,
  CardsCard,
  CardsItem,
  CardTheme,
  CardThemeP,
  CardTitle,
} from "./Card.styled";

const topicColors = {
  "Web Design": {
    background: "#ffe4c2",
    color: "#ff6d00",
  },
  Reserch: {
    background: "#b4fdd1",
    color: "#06b16e",
  },
  Copywriting: {
    background: "#e9d4ff",
    color: "#9a48f1",
  },
};

const Card = ({ item }) => {
  const topicStyle = topicColors[item.topic] || {
    background: "#94a6be",
    color: "#ffffff",
  };

  return (
    <CardsItem id={item.id}>
      <CardsCard>
        <CardGroup>
          <CardTheme $background={topicStyle.background}>
            <CardThemeP $color={topicStyle.color}>{item.topic}</CardThemeP>
          </CardTheme>
          <a href="#popBrowse" target="_self">
            <CardBtn>
              <CardBtnDiv></CardBtnDiv>
              <CardBtnDiv></CardBtnDiv>
              <CardBtnDiv></CardBtnDiv>
            </CardBtn>
          </a>
        </CardGroup>
        <CardContent>
          <a href="" target="_blank">
            <CardTitle>{item.title}</CardTitle>
          </a>
          <Date />
        </CardContent>
      </CardsCard>
    </CardsItem>
  );
};

export default Card;
