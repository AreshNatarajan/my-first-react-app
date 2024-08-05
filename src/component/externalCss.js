import './css/external.css'
import Styles from  './css/external.module.css'

function ExternalCss(){
    return(
       <div className = {Styles.external}>
          <h1>External Css Work</h1>
          <h5 className = {Styles.subbtext}>Externl css in react</h5>
       </div>
    ) 
}

export default ExternalCss;