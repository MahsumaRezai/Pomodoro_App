
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
                    <div className={classes.time} id='title'>0</div>
                </div>
                <div className={classes.btns}>
                    <button className={classes.btn} >START</button>
                    <button className={classes.btn} >POUSE</button>

                </div>






            </form>

        </Card>

    );
};

export default Addtime;