import Loader from "../Loader/Loader";

const CardLoader = () => {
  return (
    <div className="card-loader">
      <Loader width={82} height={20} borderRadius={10} />
      <Loader width={113} height={13} borderRadius={0} marginBottom={35} />
      <Loader width={56} height={13} borderRadius={0} />
    </div>
  );
};

export default CardLoader;
