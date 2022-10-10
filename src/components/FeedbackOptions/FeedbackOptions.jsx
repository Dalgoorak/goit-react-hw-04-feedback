import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedback__options}>
      {options.map(option => (
        <button
          key={option}
          className={css.feedback__btn}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

// import PropTypes from 'prop-types';
// import css from './FeedbackOptions.module.css';

// function FeedbackOptions({ options, onLeaveFeedback }) {
//   return (
//     <ul className={css.feedback__options}>
//       {options.map(option => (
//         <li className={css.item} key={option}>
//           <button
//             className={css.button}
//             type="button"
//             name={option}
//             onClick={onLeaveFeedback}
//           >
//             {option}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// FeedbackOptions.prototype = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;
