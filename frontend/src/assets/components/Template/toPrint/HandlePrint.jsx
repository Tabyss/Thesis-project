import React from 'react';
import ReactToPrint from 'react-to-print';

import { ComponentToPrint,ComponentToPrint2 } from './ComponentToPrint';

export class HandlePrint extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button className='print'>Print</button>;
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export class HandlePrint2 extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button className='print2'>Print</button>;
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint2 ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}