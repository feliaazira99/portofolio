function Navbar() {
  return (
    <div className="flex flex-row w-full justify-between p-4 shadow-md">
      <h2 className="text-base text-lg font-semibold text-cyan-700">
        Felia Azira
      </h2>
      <div className="flex flex-row gap-7">
        <a href="#">Home</a>
        <a href="#summary">Summary</a>
        <a href="#project">Project</a>
        <a href="#education">Education</a>
      </div>
    </div>
  );
}

export default Navbar;
