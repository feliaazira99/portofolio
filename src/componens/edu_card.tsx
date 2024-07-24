interface Props {
  school: String;
  majors: String;
  level: String;
  years: String;
  bgColor?: String;
}

const EduCard = (props: Props) => {
  const { school, majors, level, years, bgColor } = props;
  return (
    <div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
      <div className="flex flex-row justify-between">
        <label className="font-semibold">{school}</label>
        <div className="font-semibold">{years}</div>
      </div>
      <div className="font-base italic">
        {level} {majors}
      </div>
    </div>
  );
};

export default EduCard;
