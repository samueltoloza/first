import React, {Component} from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import PropTypes from "prop-types";

class Button extends Component{
    render(){
        const { label, action } = this.props;
        return(
            <TouchableOpacity style={styles.btn} onPress={action}>
            <Text style={styles.btnText}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

// function Button(props){
//     const { label, action } = props;
//     return(
//         <TouchableOpacity style={styles.btn} onPress={action}>
//         <Text style={styles.btnText}>{label}</Text>
//         </TouchableOpacity>
//     );
// }

Button.defau
ltProps = {
    label: "Button",
    action: () => null,
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func,
}

const styles = StyleSheet.create({
    btn: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#bdc3c7',
    },
    btnText: {
      fontSize: 18,
      color: '#ecf0f1',
      fontWeight: 'bold',
    },
});

export default Button;