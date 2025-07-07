import Column from "../Column/Column";

const Main = () => {
    const columnTitles = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово"
  ];
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnTitles.map((title, index) => (
              <Column key={index} title={title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
