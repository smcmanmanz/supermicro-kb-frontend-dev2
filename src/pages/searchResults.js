import React from "react"
import SidebarCheckbox from "./SidebarCheckbox";
import API from "../services/API"
import SearchInput from "./SearchInput";

const CATEGORIES = [
    "Questions & Answers",
    "Articles",
    "Others",
    "System",
    "CPU",
    "Memory", 
    "Storage",
    "AOC",
    "GPU", 
    "Network", 
    "Storage Controller" 

]

class SearchResults extends React.Component {

    constructor(props) {
        super(props);

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.state = { categories: CATEGORIES, entries: [], filters: new Set() };
        const windowUrl = window.location.search;
        this.query = new URLSearchParams(windowUrl).get("query");
        console.log("Check the query value:"+ this.query);
    }

    componentDidMount(){
        console.log("Component did mount");
        console.log("Print out query"+this.query);
        const api = new API();
        api.getEntries(this.query).then((response)=>{
            console.log(response.data);
            this.setState({entries: response.data});
            console.log("Time to check the entries: "+this.state.entries);
        })
        .catch((err)=> console.log(err));
    }

    handleFilterChange(e) {
        console.log('The checkbox was toggled');
        console.log(e.target);
        this.setState(previousState => {
            let fil = new Set(previousState.filters);
            let ent = this.state.entries;
            console.log("current ent: ");
            console.log(ent);
            if (e.target.checked) {
                fil.add(e.target.value);
            } else {
                fil.delete(e.target.value);
            }
            console.log("current filter: ");
            console.log(fil);
            if (fil.size) {
                ent = ent.filter(entry => {
                    return fil.has(entry.category);
                })
            }
            return { entries: ent, filters: fil }
        });
    }

    render() {
        return (
            <div>
                {/* <Header /> */}
                <div>
                    <SidebarCheckbox categories={this.state.categories} onFilterChange={this.handleFilterChange} />
                </div>
                <div>
                    <div>
                        <SearchInput />
                    </div>

                    <div class="container">
                        <div class="resultsSpace">
                            {
                                this.state.entries.map((entry, index) => (
                                    <div class="result">
                                        <h2>{entry.subject}</h2>
                                        <hr />
                                        <a href={entry.url}>{entry.url}</a>
                                        <p>{entry.explanation}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }

}

export default SearchResults

