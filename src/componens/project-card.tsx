interface Props {
  name: String;
  year: String;
  desc: String;
  bgColor?: String;
}

const Projectcard = (props: Props) => {
  const { name, year, desc, bgColor } = props;
  return (
    <div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
      <div className="flex flex-row justify-between">
        <label className="font-semibold">{name}</label>
        <div className="font-semibold">{year}</div>
      </div>
      <p className="text-base text-justify">{desc}</p>
    </div>
  );
};
export default Projectcard;
