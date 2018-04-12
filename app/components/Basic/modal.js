import React from 'react';

import bg from 'assets/images/bitshares-screenshot-bg.png';

import {Modal as Mdl} from 'bitshares-ui-style-guide';

class Modal extends React.Component {

  render() {

    const style = {
      width: '150%',
      height: '150%',
    };

    return (
      <div>
        <img src={bg} style={style}/>
        <Mdl title="Modal Example"
             visible={true}>
          <p>The quick agile trader exchanged ZCASH for BTS</p>
        </Mdl>
      </div>
    );
  }

}

export default Modal;