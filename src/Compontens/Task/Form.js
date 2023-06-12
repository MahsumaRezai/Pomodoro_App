import React, { useState } from 'react';
import classes from './Form.module.css';
import Button from './Button';
const Form = (props) => {
    const [entervalue, setentervalue] = useState('');
    const goalInputChangeHandler = (event) => {
        setentervalue(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(entervalue);

    };
    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <div >
                <input type="text" onChange={goalInputChangeHandler} className={classes.input} />
            </div>
            <Button type="submit">Taks</Button>
        </form>
    );
}
export default Form;