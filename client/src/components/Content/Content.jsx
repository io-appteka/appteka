import React from 'react';

export class ProductDetails extends React.Component {
    
state = {
    on: false,
}

toggle = () => {
    this.setState({
        on: !this.state.on
    })
}
 render() {
    
     return (
          <div className={styles.ProductDetails}>
             {this.state.on && <p>Szczegóły produktu.</p> }
            </div>    

    );
  }

}
