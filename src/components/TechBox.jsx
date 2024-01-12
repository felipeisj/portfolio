import PropTypes from 'prop-types';

const TechBox = ({ image, title }) => <div>
  <div className='flex flex-col items-center justify-center font-bold py-4  bg-gray-900  rounded-md
  transition duration-500 ease-in-out hover:scale-110'>
      <img alt={title} src={image} className='p-2 w-32 h-24'/>
    <p className='text-lg font-bold mt-2'>99%</p>
  </div>
  <div className='my-2 text-[#f3cece] text-center'>
      {title}
  </div>  
</div>
TechBox.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired, // 'node' because content can be any renderable element
};

export default TechBox;