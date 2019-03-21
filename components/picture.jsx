import PropTypes from 'prop-types';

const Picture = ({
  source, alt, deployed, github,
}) => (
  <div className="picContainer">
    <img src={source} alt={alt} className="image image-fluid" />
    <div className="overlay">
      <div className={(deployed && github) ? 'text textWithDeployed' : 'text'}>
        {github ? <a href={github} target="_blank" rel="noopener noreferrer">Github</a> : ''}
        {deployed ? <a href={deployed} target="_blank" rel="noopener noreferrer">Deployed</a> : ''}
      </div>
    </div>
  </div>
);

Picture.propTypes = {
  source: PropTypes.string,
  deployed: PropTypes.string,
  alt: PropTypes.string,
  github: PropTypes.string,
};

Picture.defaultProps = {
  source: '',
  deployed: '',
  alt: '',
  github: '',
};

export default Picture;
