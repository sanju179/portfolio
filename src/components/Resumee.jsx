import { TbExternalLink } from "react-icons/tb";
import resumepdf from '../assets/myresume.pdf';
const Resumee = () => {
  return (
    <div className='inline py-8 text-light w-full'>
        <a href={resumepdf} target="_blank"
                    rel="noreferrer">
                    View resume <TbExternalLink className="inline-block"/>
                </a>
                
    </div>
  )
}

export default Resumee