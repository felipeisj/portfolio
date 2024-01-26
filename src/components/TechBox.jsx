import PropTypes from 'prop-types';

const TechBox = ({ image, title, experiencePercentage }) =>
  <div className='transition duration-500 ease-in-out hover:scale-110'>
    <div className='flex flex-col items-center justify-center font-bold py-4 bg-gray-900  rounded-md'>
        <img alt={title} src={image} className='p-2 w-32 h-auto '/>
      <p className='text-lg font-bold mt-2'>{experiencePercentage}%</p>
    </div>
    <div className='my-2  text-center'>
        {title}
    </div>  
  </div>

TechBox.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired, // 'node' because content can be any renderable element
  experiencePercentage: PropTypes.string.isRequired,
};

export default TechBox;