import PropTypes from 'prop-types';

const Card = ({ title, content, imageUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover', // Ensures the image covers the entire card
    backgroundPosition: 'center', // Centers the image
  };

  return (
    <div className="group bg-white shadow-md rounded-lg overflow-hidden cursor-pointer relative w-2/5 h-64">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={cardStyle}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
      <h2 className="text-xl font-bold z-10 text-white absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:hidden">
        {title}
      </h2>
      <div className="content absolute inset-0 opacity-0 group-hover:opacity-100 p-4 transition-opacity duration-500 items-center justify-center hidden group-hover:flex">
        {content}
      </div>
    </div>


    // <div
    //   key={title}
    //   className="flex flex-col cursor-pointer bg-white justify-center p-4 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px]"
    //   >
    //   <p className="text-[24px] font-bold uppercase mb-7" style={cardStyle}>{title}</p>
    //   <p className="text-[15px] font-medium leading-2 w-full">
    //     {content}
    //   </p>
    // </div>

  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired, // 'node' because content can be any renderable element
  imageUrl: PropTypes.string.isRequired, // Add prop type for imageUrl

};

export default Card;