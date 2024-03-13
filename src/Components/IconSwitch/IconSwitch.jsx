import img_list from '../../../icons/view_list.png';
import img_module from '../../../icons/view_module.png';


export const IconSwitch = (props) => {
  let img;
  props.icon === 'view_list' ? img = img_module : img = img_list
  return (
    <img className='icon' src={img} onClick={props.onSwitch}></img>
  )
}
