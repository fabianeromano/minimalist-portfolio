const Card = ({ project, year, demo, code, thumbnail, icons }) => {
  return (
    <div className="border border-white/20 flex justify-between flex-col">
      <div className="text-white text-xs p-3 text-center border-b border-white/20 flex justify-center items-center gap-1">
        <span className="block font-semibold">Project {project}</span>
        <span className="border border-white/20 px-1 rounded-full text-xs text-white">
          {year}
        </span>
      </div>
      <figure className="border-b border-white/20">
        <img
          alt="work"
          className="w-full object-cover object-center aspect-square"
          src={thumbnail}
        />
      </figure>
      <div className="flex justify-center items-center border-b border-white/20 p-2 gap-1">
        {icons?.map((icon, idx) => (
          <img key={idx} className="w-auto max-w-6 h-6" src={icon} alt={icon} />
        ))}
      </div>
      <div className="flex justify-center text-white border-b border-white/20">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="border-r border-white/20 w-full text-center p-2 hover:bg-red-400 hover:text-black cursor-pointer">
          Demo
        </a>
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center p-2 hover:bg-red-400 hover:text-black cursor-pointer">
          Code
        </a>
      </div>
    </div>
  );
};

export default Card;
