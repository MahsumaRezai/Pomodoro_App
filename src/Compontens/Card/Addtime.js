
import Card from '../UI/Card';
import classes from './Addtime.module.css'
import ButtonPomdor from './ButtonPomdor';
const Addtime = (props) => {
    return (

        <Card >
            <div className={classes.content}>
                <div>
                    <ButtonPomdor>Pomodoro</ButtonPomdor>
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