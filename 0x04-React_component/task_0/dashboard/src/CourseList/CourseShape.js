import PropTypes from 'prop-types';

CourseShape.PropTypes = {
    CourseShape: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        credit: PropTypes.string.isRequired 
    })
};

export default CourseShape;
