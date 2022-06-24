import { MdOutlineErrorOutline } from "react-icons/md";

export default (props) => {
    
        return (
          <div>
              <span className='spanalert'> <MdOutlineErrorOutline className='iconalert'/>{props.titulo}</span>
          </div>
        );
      }