import Calendar from "../Calendar/Calendar";
import { useNavigate, useParams } from "react-router-dom";

import { cardList } from "../../mock/data";

import Card from "../Card/Card";
import { useMemo } from "react";
import {
  BtnGroup,
  Categories,
  FormBrowseArea,
  FormBrowseBlock,
  Gray,
  PopBrowseBlock,
  PopBrowseBtnBrowse,
  PopBrowseBtnEdit,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseStatus,
  PopBrowseWrap,
  SPopBrowse,
  StatusP,
  StatusTheme,
  StatusThemes,
  Subttl,
} from "./PopBrowse.styled";
export const PopBrowse = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const card = useMemo(() => {

    if (!id) {
      return null;
    }
    return cardList.find((card) => card.id === id) || { title: "", topic: "", status: "", id: "" };
  }, [id]); 

  if (!card) {
    return null;
  };

  
  const handleClose = () => {
    navigate("/");
  };

  return (
    <SPopBrowse>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <Card card={card} open={true} />
            {/* <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{card.topic}</p>
              </div>
            </div> */}
            <PopBrowseStatus>
              <StatusP>Статус</StatusP>
              <StatusThemes>
       
                <StatusTheme>
                  <Gray><p>{card.status}</p></Gray>
                  
                </StatusTheme>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm
                id="formBrowseCard"
                action="#"
              >
                <FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></FormBrowseArea>
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <div className="theme-down__categories theme-down">
              <Categories><Subttl>Категория</Subttl></Categories>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <PopBrowseBtnBrowse>
              <BtnGroup>
                <PopBrowseBtnEdit>
                  <a href="#">Редактировать задачу</a>
                </PopBrowseBtnEdit>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </BtnGroup>
              <button className="btn-browse__close _btn-bg _hover01"  onClick={handleClose}>
                Закрыть
              </button>
            </PopBrowseBtnBrowse>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <PopBrowseBtnEdit
                onClick={handleClose}
              >
                Закрыть
              </PopBrowseBtnEdit>
            </div>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </SPopBrowse>
  );
};

export default PopBrowse;
