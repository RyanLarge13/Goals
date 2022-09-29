import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';


const GoalForm = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createGoal({text}));
        setText('');
    };

  return (
    <>
        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="text">Goal</label>
                    <input type="text" id="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Add Goal</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default GoalForm