import React from 'react';
import './Home.scss';

import {Grid} from '../../templates/Grid/Grid';
import {Nav} from '../../templates/Nav/Nav';

import {Search} from '../../Components/Search/Search';
import {OrderFilter} from '../../Components/OrderFilter/OrderFilter';

function Home() {
    return (
        <React.Fragment>
            <Nav />
            <div className="HomeContainer">
                <div className="HomeContainer__searchFilter">
                    <Search className="HomeContainer__searchFilter-search" />
                    <OrderFilter 
                        className="HomeContainer__searchFilter-order"
                        option={[["value1", "option1"], ["value2", "option2"], ["value3", "option3"]]}  
                    />
                </div>
                <div className="HomeContainer__ProductGrid">
                    <Grid />

                </div>

            </div>
        </React.Fragment>
    );
}

export {Home};