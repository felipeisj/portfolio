import GridExperience from "../components/GridExperience";

const Projects = () => {
  const folderStructure = [
    { name: 'about.txt', depth: 0, url: "#about" },
    { name: 'JavaScript', depth: 0, folder: true, children: [
      { name: 'ReactJS', depth: 1, folder: true, children: [
        { name: 'Vanilla', depth: 2, url: "https://www.google.com" },
        { name: 'NextJS', depth: 2, url: "https://www.google.com" },
      ] },
      { name: 'NodeJS', depth: 1, folder: true, children: [
        { name: 'Express', depth: 2, url: "https://www.google.com" },
        { name: 'Authy', depth: 2, url: "https://www.google.com" },
      ] },
      { name: 'NextJS', depth: 1, url: "https://www.google.com" },
      // Agrega más proyectos o subcarpetas aquí
    ]},
    { name: 'Python', depth: 0, folder: true, children: [
      { name: 'project1', depth: 1, url: "https://www.google.com" },
      { name: 'project2', depth: 1, url: "https://www.google.com" },
      { name: 'project3', depth: 2, url: "https://www.google.com" },
      // Agrega más proyectos o subcarpetas aquí
    ]},
    // Puedes agregar más archivos o carpetas aquí
  ];

  const renderFolder = (item, key) => {
    const paddingLeft = item.depth * 20; // Incrementa el padding para cada nivel de profundidad

    return (
      <div key={key} style={{ paddingLeft: `${paddingLeft}px` }}>

        {item && !item.folder ? <a href={item.url} className="text-[#f3cece] inline-block p-2 border-b-2
        border-transparent rounded-t-lg hover:border-gray-300
        dark:hover:text-gray-300"
        >
          {item.name}</a>
        :
        <p className="inline bg-[#04B404] text-black px-1">{item.name}</p>
        }
        {item.children && item.children.map((child, index) => renderFolder(child, `child-${index}`))}
      </div>
    );
  };

  return (
    <div className="flex flex-column w-full items-center justify-around px-16">

      <div className="bg-[#242424] text-[#04B404] font-mono text-lg ">
        <p>[user@portfolio]: /projects$ ls</p>
        {folderStructure.map((item, index) => renderFolder(item, index))}
      </div>

      <GridExperience /> 

    </div>
    
  );

}

export default Projects;