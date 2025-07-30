import "./App.css";
import GlobalStyle from "./GlobalStyles/GlobalStyles.styled";
import { Wrapper } from "./Wrapper.styled";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import { useEffect, useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header isModalOpen={isModalOpen} toggleModal={toggleModal} />
        <Main loading={loading} />
      </Wrapper>
    </>
  );
}

export default App;
