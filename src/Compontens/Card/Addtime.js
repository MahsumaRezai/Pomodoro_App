
import Card from '../UI/Card';
import classes from './Addtime.module.css'
import ButtonLogn from './ButtonLogn';
import ButtonPomdor from './ButtonPomdor';
import ButtonShort from './ButtonShort';
const Addtime = (props) => {
   




    return (

        <Card >
            <form className={classes.content}>
                <div className={classes.buttons}>
                    <ButtonPomdor>Pomodoro</ButtonPomdor>
                    <ButtonShort>Short Break</ButtonShort>
                    <ButtonLogn>Long Break</ButtonLogn>
                </div>
                <div>
                    <div className={classes.time} id='clock'>25</div>
                </div>
                <div>
                    <button className={classes.btn}>START</button>
                </div>






            </form>

        </Card>

    );
};

export default Addtime;