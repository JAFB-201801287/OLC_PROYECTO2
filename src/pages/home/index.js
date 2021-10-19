import React, { Component } from 'react';

import Header from '../../components/header';
import Options from '../../components/options';
import CardComponents from '../../components/cards';
import ErrorTable from '../../components/Tables/ErrorTable';
import SymbolTable from '../../components/Tables/SymbolTable';

/*const HomePage = () => {

    let pestanias = ["a"]

    return (
        <>
            <Header/>

            <Options pestanias={pestanias}/>

            <CardComponents pestanias={pestanias}/>

        </>
    );
};*/

export default class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            tabs: [
                {
                    id: 1,
                    keyTab: "tab1",
                    keyInput: "input1",
                    nameTab: "PESTAÑA 1",
                    value: ""
                }
            ],
            countTabs: 1,
            currentTab: "tab1",
            console: ""
        }

    }

    setCurrentTab = (tab) => {
        this.setState({ currentTab: tab })
    }

    setConsole = (console) => {
        this.setState({ console: console })
    }

    createPestania = () => {
        var temp = {...this.state};
        temp.countTabs = temp.countTabs + 1;
        var nameTab =  "PESTAÑA " + temp.countTabs;
        var keyTab =  "tab" + temp.countTabs;
        var keyInput =  "input" + temp.countTabs;
        temp.tabs.push(
            {
                id: temp.countTabs,
                keyTab: keyTab,
                keyInput: keyInput,
                nameTab: nameTab,
                value: ""
            }
        );
        
        this.setState({ countTabs: temp.countTabs })
    }

    deleteTab = () => {
        var temp = {...this.state};
        var tabs = temp.tabs.filter(element => element.keyTab !== temp.currentTab);
        var currentTab = tabs[0];
        this.setState({ tabs: tabs, currentTab: currentTab })
    }

    render() {
        return (
            <>
                
                <Header/>

                <Options 
                    state={this.state} 
                    createPestania={this.createPestania.bind(this)}
                    deleteTab={this.deleteTab.bind(this)}
                />

                <CardComponents 
                    tabs={this.state.tabs} 
                    console={this.state.console}
                    setConsole={this.setConsole.bind(this)}
                    setCurrentTab={this.setCurrentTab.bind(this)}
                    currentTab={this.state.currentTab}
                />

                <SymbolTable/>

                <ErrorTable/>

            </>
        );
    }
}