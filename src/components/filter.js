import React, {Component} from 'react';


export default class Filter extends Component {
    constructor() {
        super()
        this.state = {
            price: 220
        }
    }

    handlePriceChange = (e) => {
        this.setState({price: e.target.value})
        this.props.onFilterChange({price: e.target.value})
    }

    handleSortChange = (e) => {
        this.props.onSortChange(e.target.value)
    }

    render() {
        return (
            <div className="filter">
                <h3> Filter Results:</h3>

                <div className="price"> Daily Price:  Under ${this.state.price} <br/>
                    <input type="range" name="price" min="50" max="220" step="10" value={this.state.price} onChange={this.handlePriceChange}/>
                </div> 

               

                <div className="region"> Region:
                    <select name="region" onChange={e => {this.props.onFilterChange({region: e.target.value})}}> 
                            <option value="none">None</option>
                        <option value="Sierra Nevadas">Sierra Nevadas</option>
                        <option value="Midwest">Midwest</option>
                        <option value="Northeast">Northeast</option>
                        <option value="Rockies">Rockies</option>
                    </select> 
                </div>


                <div className="pass"> Ski Pass:
                    <select name="skipass" onChange={e => {this.props.onFilterChange({skipass: e.target.value})}}> 
                            <option value="none">None</option>
                        <option value="epic">Epic Pass</option>
                        <option value="ikon">Ikon Pass</option>
                    </select> 
                </div>


                <div className="begineers"> 
                    Great For Begineers: <input type="checkbox" name="begineers" value={true} onChange={e => {this.props.onBegineerChecked()}}/> 
                </div>
                

                <div className="sort">Sort Resorts:
                    <select name="sort" onChange={this.handleSortChange}> 
                        <option value="none">None</option>
                       <option value="snowfall">Yearly Snowfall</option>
                       <option value="vertical">Vertical Drop</option>
                       <option value="summit">Summit Height</option>
                       <option value="runs">Total Runs</option>
                       <option value="lifts">Total Lifts</option>
                       <option value="acres">Skiable Acres</option>
                       <option value="green">Green Runs</option>
                       <option value="blue">Blue Runs</option>
                       <option value="black">Black Runs</option>
                       <option value="double_black">Double Black Runs</option>
                       <option value="terrain_parks">Terrain Parks</option>
                    </select> 
                </div>
            </div>
    )
    }
}