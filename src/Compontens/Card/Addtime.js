
import Card from '../UI/Card';
import classes from './Addtime.module.css'
import ButtonLogn from './ButtonLogn';
import ButtonPomdor from './ButtonPomdor';
import ButtonShort from './ButtonShort';
import Timer from './CountTime/Timer';
const Addtime = (props) => {
    return (

        <Card >
            <div className={classes.content}>
                <div className={classes.buttons}>
                    <ButtonPomdor>Pomodoro</ButtonPomdor>
                    <ButtonShort>Short Break</ButtonShort>
                    <ButtonLogn>Long Break</ButtonLogn>
                </div>
                <div>
                    <h1 className={classes.time}>25:00</h1>
                </div>
                <div>
                    <Timer>START</Timer>
                </div>






            </div>

        </Card>

    );
};

export default Addtime;