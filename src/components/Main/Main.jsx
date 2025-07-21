import Column from "../Column/Column";
import Loader from "../Loader/Loader";

const Main = ({ loading }) => {
  const columnTitles = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnTitles.map((title, index) => (
              <Column loading={loading} key={index} title={title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
