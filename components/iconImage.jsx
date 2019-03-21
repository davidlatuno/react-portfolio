import PropTypes from 'prop-types';

const IconImage = ({ source, alt }) => (
  <img className="iconImage" src={source} alt={alt} />
);

IconImage.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
};

IconImage.defaultProps = {
  source: '',
  alt: '',
};

export default IconImage;
