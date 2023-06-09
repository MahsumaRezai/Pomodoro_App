import { useState } from "react";
import Header from "./Compontens/UI/Header";
import Addtime from "./Compontens/Card/Addtime";
import Form from './Compontens/UI/Taks/Form';
import List from './Compontens/UI/Taks/List'
import OpenCart from "./Compontens/UI/openCart";


const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }




  const [courseGoals, setCourseGoals] = useState([
    { text: 'Finish Your Taks!', id: 'g1' },
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center', color: "white" }}>What is your Taks?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <List items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      {cartIsShow && <OpenCart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Addtime />
      <section id="goal-form">
        <Form onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}

      </section>
    </div>
  )

}
export default App;