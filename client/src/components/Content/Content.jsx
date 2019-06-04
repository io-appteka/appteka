import React from 'react';
import styles from './Content.css';
import { PricesList } from '../Lists/PricesList/PricesList';
import { DrugDetails } from '../DrugDetails/DrugDetails';
import Opinions from '../Opinions/Opinions';

export class Content extends React.Component {
    state = {
        renderedComponent: 'prices',
    };

    mapNamesToComps = {
        prices: undefined,
        description: undefined,
        opinions: undefined,
    };
    
    componentDidMount () {
        this.mapNamesToComps = {
            prices: <PricesList data={this.props.pricesListData}/>,
            description: <DrugDetails/>,
            opinions: <Opinions opinions={this.props.opinionsData}/>,
        };
        this.setState({renderedComponent: 'prices'});
    };

    togglePrices = () => this.setState({renderedComponent: 'prices'});
    toggleDescription = () => this.setState({renderedComponent: 'description'});
    toggleOpinions = () => this.setState({renderedComponent: 'opinions'});

    render() {
    const styleSelected = [ styles.selected, styles.cont].join(' ');
    const { renderedComponent } = this.state;
     return (
        <>
            <div className={styles.Content}>
                <ul>
                    <li><button onClick={this.togglePrices} className={renderedComponent === 'prices' ? styleSelected : styles.cont}>Porównanie cen</button></li>
                    <li><button onClick={this.toggleDescription} className={renderedComponent === 'description' ? styleSelected : styles.cont}>Szczegóły produktu</button></li>
                    <li><button onClick={this.toggleOpinions} className={renderedComponent === 'opinions' ? styleSelected : styles.cont}>Opinie</button></li>
                </ul>
            </div> 
            {this.mapNamesToComps[this.state.renderedComponent]}
        </>
    );
  };
};
