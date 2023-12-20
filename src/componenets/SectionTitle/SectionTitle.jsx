
import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            {
                subHeading && <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            }
            <h3 className="text-2xl font-bold uppercase py-4 italic">{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string,
};

export default SectionTitle;
