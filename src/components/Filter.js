import React, { Component } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.iconColor = this.iconColor.bind(this);
        this.filterOptionColorChange = this.filterOptionColorChange.bind(this);
        this.state = {
            isFavSelected: false,
            isHeartSelected: false,
            isPoemSelected: false,
            isStorySelected: false,

        }
    }
    iconColor(flag) {
        if (flag == false) {
            return "#e0e8da";
        } else {
            return "#739952"
        }
    }
    filterOptionColorChange(type) {

    }
    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <View style={{ flexDirection: 'row', flex: 3, padding: 20 }}>
                    <Text style={{ flex: 3, fontSize: 15, marginBottom: 10, color: "white" }}>FILTERS</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.toggleDrawer()}><Icon name="times" size={25} color="white" /></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, padding: 20 }}>
                    <Text style={{ flex: 3, fontSize: 15, color: "white" }}>Favourite</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.navigate('screen1')} ><Icon name="check" size={25} color={this.iconColor(this.state.isFavSelected)} /></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, padding: 20 }}>
                    <Text style={{ flex: 3, fontSize: 15, color: "white" }}>Hearted</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this.filterOptionColorChange("heart")}><Icon name="check" size={25} color={this.iconColor(this.state.isHeartSelected)} /></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, padding: 20 }}>
                    <Text style={{ flex: 3, fontSize: 15, color: "white" }}>Poem</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this.filterOptionColorChange("poem")}><Icon name="check" size={25} color={this.iconColor(this.state.isPoemSelected)} /></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, padding: 20 }}>
                    <Text style={{ flex: 3, fontSize: 15, color: "white" }}>Story</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={this.filterOptionColorChange("story")}><Icon name="check" size={25} color={this.iconColor(this.state.isStorySelected)} /></TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flex: 3, marginHorizontal: 20, marginVertical: 100, borderWidth: 3, borderColor: "white", justifyContent: 'center', alignItems: 'center' }} onPress={() => console.log("FILTER")} >
                    <Text style={{ fontSize: 15, color: "white" }}>APPLY</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const mapStateToProps = state => {
    return {
        list: state.list,
    };
};

const mapDispatchToProps = {
    filterFavs: actions.filterFavs,
    filterHearts: actions.filterHearts,
    flterFavsAndHearts: actions.flterFavsAndHearts,

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);