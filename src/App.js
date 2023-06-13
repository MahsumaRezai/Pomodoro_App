import Header from "./Compontens/UI/Header";
import Pomodoro from "./Compontens/time/time";
import { useState } from "react";
import List from "./Compontens/Task/List";
import Form from "./Compontens/Task/Form";
const App = () => {
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
    <p style={{ textAlign: 'center', color: " #fff", fontSize: "20px" }}>What is your Taks?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <List items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }


  return (
    <div>
      <Header />
      <Pomodoro />
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