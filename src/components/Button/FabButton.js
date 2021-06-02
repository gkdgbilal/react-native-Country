import * as React from "react";
import { View, Platform, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { fabButtonStyles as styles } from "./styles";
import { Icon } from "../";
import PropTypes from "prop-types";

class FabButton extends React.Component {
  render() {
    const TouchableComponent = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
    const { icon, onPress, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <TouchableComponent style={styles.touchable} onPress={onPress}>
          <View style={styles.touchableContent}>
            <Icon name={icon} tintColor="white" />
          </View>
        </TouchableComponent>
      </View>
    );
  }
}

FabButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

export default FabButton;
