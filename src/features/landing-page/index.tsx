import EduCard from "../../componens/edu_card";
import Projectcard from "../../componens/project-card";
import photo from "../../assets/poto.jpg";

interface Project {
  name: String;
  year: String;
  desc: String;
}

interface Edu {
  school: String;
  years: String;
  majors: String;
  level: String;
}

const LandingPage = () => {
  const edus: Edu[] = [
    {
      school: "Universitas Indonesia",
      years: "2019-2023",
      majors: "Teknik Informatika",
      level: "S1",
    },
    {
      school: "SMK N 1 Solok",
      years: "2015-2018",
      majors: "Teknik Komputer Jaringan",
      level: "SMK",
    },
  ];

  const projects: Project[] = [
    {
      name: "Project A",
      year: "2019-2020",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      name: "Project B",
      year: "2020-2021",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      name: "Project C",
      year: "2021-2022",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  return (
    <div className="flex flex-col">
      <section className="flex flex-row justify-evenly items-center m-5">
        <div className="flex flex-col">
          <h1 className="font-semibold md:font-serif text-4xl">
            Hello World !
          </h1>
          <p className="italic text-2xl">Felia Azira</p>
        </div>
        <img src={photo} className="w-56 rounded-sm" alt="Felia" />
      </section>

      <section className="flex flex-col px-5 py-10 bg-gray-300 gap-5">
        <label className="font-semibold text-lg">Summary</label>
        <p className="text-base text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>

      <section className="flex flex-col px-5 py-5 gap-5">
        <label className="font-semibold text-lg">Projects</label>
        {projects.map((item: Project, index: number) => (
          <Projectcard
            key={index}
            name={item.name}
            year={item.year}
            desc={item.desc}
            bgColor={`${index % 2 === 0 ? "bg-gray-300" : ""}`}
          />
        ))}
      </section>

      <section className="flex flex-col px-5 py-5 gap-5">
        <label className="font-semibold text-lg">Education</label>
        {edus.map((item: Edu, index: number) => (
          <EduCard
            key={index}
            school={item.school}
            years={item.years}
            majors={item.majors}
            level={item.level}
            bgColor={`${index % 2 === 0 ? "bg-gray-300" : ""}`}
          />
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
