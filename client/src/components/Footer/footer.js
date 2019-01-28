import React from 'react';
import styles from './footer.css';

import { CURRENT_YEAR } from '../../config';

const footer = () => (
    <div className={styles.footer}>
        <div className={styles.right}>
        &#169; 2017-{CURRENT_YEAR} <b>Howlback |</b> with &#x2661; by 
        <a className="badge badge-info ml-1 mr-1" target="_new" title="Developers Profile" href="https://koder-profile.herokuapp.com/profile/Rodney%20Hammad"> <big>Rodney H</big></a>
          | Powered by  
        <a className="badge badge-info ml-1" target="_new" title="Developers Blog" href="https://kodeflash.herokuapp.com/"> <big>&#x2774;Kodeflash&#x2775;</big></a>
        </div>
    </div>
)

export default footer;
