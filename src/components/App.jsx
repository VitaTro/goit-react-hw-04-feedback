import { useState } from 'react';
// import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

// export const App = () => {
//  useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //  event.currentTarget в React — це властивість об’єкта події, яка ідентифікує елемент, до якого прикріплений обробник події.
  // Важливо розуміти різницю між event.currentTarget та event.target.

  //  event.currentTarget: Це елемент, до якого був прикріплений обробник події.
  // Він може відрізнятися від елемента, який спричинив подію, оскільки подія може бути спричинена нащадком елемента з обробником,
  //  а потім “спливати” вгору до елемента з обробником.
  // Наприклад, якщо ви маєте батьківський елемент з обробником події, а внутрішній елемент спричиняє цю подію,
  // то event.currentTarget буде посилатися на батьківський елемент.
  //  event.target: Це елемент, який спричинив подію. Він може бути будь-яким нащадком елемента з обробником3.
  // Наприклад, якщо користувач клікає на кнопку в середині блоку, то event.target буде посилатися на саму кнопку.
  //  У більшості випадків ви будете використовувати event.target, оскільки він зазвичай вказує на конкретний елемент, який спричинив подію.
  //  Але іноді event.currentTarget може бути корисним, коли ви хочете отримати доступ до елемента, до якого прикріплений обробник,
  // незалежно від того, який елемент спричинив подію.
  //     handleIncrement = () => {
  //       this.setState((state, props) => ({
  //         value: state.value + props.step,
  //       }));
  //     };

  //     handleDecrement = () => {
  //       this.setState((state, props) => ({
  //         value: state.value - props.step,
  //       }));
  //     };
  //   }

  // додавання відгуку по одному
  // const handleFeedback = (type) => {
  //   setFeedback((prevFeedback) => ({
  //     ...prevFeedback,
  //     [type]: prevFeedback[type] + 1,
  //   }));
  // };

  // додавання відгуку по одному
  // handleFeedback = e => {
  //   const { name } = e.target;
  //   this.setState(state => ({ [name]: state[name] + 1 }));
  // };

  const handleFeedback = e => {
    const { name } = e.target;
    name === 'good' && setGood(good + 1);
    name === 'neutral' && setNeutral(neutral + 1);
    name === 'bad' && setBad(bad + 1);
  };
  //  разом всі відгуки
  // const countTotalFeedback = () => {
  //   return feedback.good + feedback.neutral + feedback.bad;
  // };

  //  разом всі відгуки
  const countTotalFeedback = () => {
    // const { good, neutral, bad } = feedbackState;
    return good + neutral + bad;
  };

  //  процентовка всіх хороших відгуків
  // const countPositiveFeedbackPercentage = () => {
  //   const total = countTotalFeedback();
  //   return total > 0 ? Math.round((feedback.good / total) * 100) : 0;
  // };

  // процентовка всіх хороших відгуків
  const countPositiveFeedbackPercentage = () => {
    // const { good, neutral, bad } = feedbackState;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  // const { good, neutral, bad } = feedbackState;
  // const actualState = feedbackState;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given." />
        )}
      </Section>
    </>
  );
};

export default App;
