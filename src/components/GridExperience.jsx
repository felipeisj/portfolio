import Box from "./Box";

const GridExperience = () => <div>
    <ul className="grid grid-cols-3 gap-8 py-4 text-white">
      <Box title="ReactJS" image="education.svg"  />
      <Box title="HTML 5" image="img_2.png"  />
      <Box title="CSS" image="education.svg"  />
      <Box title="Python" image="vite.svg"  />
      <Box title="PHP" image="vite.svg"  />
      <Box title="Nodejs" image="education.svg"  />
    </ul> 
</div>



export default GridExperience;