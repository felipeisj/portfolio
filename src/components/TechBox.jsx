import PropTypes from 'prop-types';

const TechBox = ({ image, title, experiencePercentage }) =>
  <div className='transition duration-500 ease-in-out hover:scale-110 items-center md:h-auto'>
    <div className='flex flex-col items-center justify-center font-bold py-4 md:bg-gray-900 rounded-md'>
        <img alt={title} src={image} className='p-2 w-4/5 h-4/5 md:w-32 md:h-28 '/>
      <p className='text-lg font-bold mt-2 hidden md:block'>{experiencePercentage}%</p>
    </div>
    <div className='mt-2 text-center'>
        {title}
    </div>  
  </div>

TechBox.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired, // 'node' because content can be any renderable element
  experiencePercentage: PropTypes.string.isRequired,
};

export default TechBox;