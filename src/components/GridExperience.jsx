import TechBox from "./TechBox";

const GridExperience = () => <div>
    <ul className="grid grid-cols-3 gap-4 py-4 items-center">
      <TechBox title="ReactJS" image="reactjs.svg" experiencePercentage="80" />
      <TechBox title="HTML 5" image="html5.svg" experiencePercentage="90" />
      <TechBox title="CSS" image="css.svg" experiencePercentage="60" />
      <TechBox title="Python" image="python.svg" experiencePercentage="80" />
      <TechBox title="PHP" image="php.svg"  experiencePercentage="40"/>
      <TechBox title="Nodejs" image="nodejs.svg" experiencePercentage="70" />
    </ul> 
</div>



export default GridExperience;