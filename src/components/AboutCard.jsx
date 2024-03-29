import PropTypes from 'prop-types';

const AboutCard = ({ title, content, imageUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    // backgroundPosition: 'center', // Centers the image
  };

  return (
    <div className="group rounded-lg overflow-hidden cursor-pointer relative md:w-2/5 w-4/5 h-64">
      <div 
        className="absolute inset-0 bg-center " 
        style={cardStyle}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-80 hover:scale-110 transition-all duration-300  "></div>
      <h2 className="text-xl font-bold inset-0 z-10 text-center text-black mt-4 absolute duration-300
                    group-hover:hidden "
      >
        {title}
      </h2>
      <div className="content absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                      duration-300 items-center justify-center hidden group-hover:flex"
      >
        {content}        
      </div>
    </div>


  );
};

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired, // 'node' because content can be any renderable element
  imageUrl: PropTypes.string.isRequired, // Add prop type for imageUrl

};

export default AboutCard;