import Loader from "../Loader/Loader";

const CardLoader = ({item}) => {
  return (
    <div className="card-loader" id={item.id}>
      <div className="loader-wrapper">
        <Loader width={82} height={20} />
        <Loader width={113} height={13} />
      </div>
      <Loader width={56} height={13} />
    </div>
  );
};

export default CardLoader;
