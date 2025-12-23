import Card from "./Card";

const Section = (props) => {
  console.log(props);
  return (
    <div className="min-h-screen w-full pt-6 bg-gray-700 flex flex-col items-center justify-center">
      <Card data={props} />
    </div>
  );
};

export default Section;
