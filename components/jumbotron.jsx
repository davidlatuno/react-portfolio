import PropTypes from 'prop-types';

const Jumbotron = ({ phrase, subtitle }) => (
  <div className="jumbotron text-center">
    <h1 className="display-4 jumbotronMain">{phrase}</h1>
    <p className="lead">{subtitle}</p>
  </div>
);

Jumbotron.propTypes = {
  phrase: PropTypes.string,
  subtitle: PropTypes.string,
};

Jumbotron.defaultProps = {
  phrase: '',
  subtitle: '',
};

export default Jumbotron;
