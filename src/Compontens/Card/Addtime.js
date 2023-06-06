
import Card from '../UI/Card';
import classes from './Addtime.module.css'
const Addtime = (props) => {
    return (

        <Card >
            <div className={classes.content}>
                <div>
                    <button>Pomodoro</button>
                    <button>Short Break</button>
                    <button>Long Break</button>
                </div>
                <div>
                    <h1>25:00</h1>
                </div>
                <div>
                    <button>START</button>
                </div>






            </div>

        </Card>

    );
};

export default Addtime;