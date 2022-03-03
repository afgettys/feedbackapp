import PropTypes from "prop-types";

function FeedbacKStats({ feedback }) {
  //calculate average stats

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");
  //REGULAR EXPRESSION 

  return (
    <div className="feedback-stats">
      <h4>{feedback.length}Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbacKStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbacKStats;
