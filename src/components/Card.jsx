const Card = (props) => {
  console.log(props);

  console.log(props.data.cardObj[0].image);
  return props.data.cardObj.map((elem) => {
    return (
      <div className="h-70 w-45 mb-6 bg-white rounded-xl flex justify-center items-center ">
        <div
          className=" h-67 w-43 bg-cover bg-center overflow-hidden flex items-end bg-[url(``)] rounded-lg "
          style={{ backgroundImage: `url(${elem.image})` }}
        >
          <div className="inner h-15 pt-1 w-full  rounded-b-lg blur-10xl  backdrop-blur-[2px] bg-[#8080802c]">
            <h1 className="pl-2.5 text-white font-light ">{elem.name}</h1>
            <h3 className="pl-2.5 text-[8px] text-white pr-3">
              {elem.description}
            </h3>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
