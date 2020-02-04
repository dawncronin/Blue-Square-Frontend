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

    render() {
        return (
            <div className="filter">

                <div> Daily Price: Under ${this.state.price}
                    <input type="range" name="price" min="50" max="220" step="10" value={this.state.price} onChange={this.handlePriceChange}/>
                </div> 
                <div>
                    Minimum Rating:
                    <select name="Rating"> 
                        <option value="1"> 1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                    </select> 
                </div>

                <div> Region
                    <select name="region"> 
                            <option value="None">None</option>
                        <option value="Seirra Nevadas">Sierra Nevadas</option>
                        <option value="Midwest">Midwest</option>
                        <option value="East Coast">East Coast</option>
                        <option value="Rockies">Rockies</option>
                    </select> 
                </div>

                <div> Ski Pass:
                    <select name="skipass"> 
                            <option value="None">None</option>
                        <option value="epic">Epic Pass</option>
                        <option value="ikon">Ikon Pass</option>
                    </select> 
                </div>
    
                <div> 
                    Great For Begineers: <input type="checkbox" name="begineers"/> 
                </div>

                <div>Sort Resorts:
                    <select name="sort"> 
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