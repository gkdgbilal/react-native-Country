import * as React from "react";
import { View, Text, Platform, TouchableOpacity, TouchableNativeFeedback, Image } from "react-native";
import PropTypes from "prop-types";
import { countryObjectStyles as styles } from "./styles";
import { Icon } from "../../components";
import { colors } from "../../config/colors";

class CountryObject extends React.Component {
  render() {
    const TouchableComponent = Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
    const { name, nativeName, alpha2Code } = this.props.country;
    return (
      <TouchableComponent style={styles.container}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.countryFlag}
            resizeMode="cover"
            source={{ uri: `https://www.countryflags.io/${alpha2Code}/flat/64.png` }}
          />
          <Text style={styles.countryName}>{`${name} ( ${nativeName} )`}</Text>
          <Icon name="arrow" tintColor={colors.text_color} />
        </View>
      </TouchableComponent>
    );
  }
}

CountryObject.propTypes = {
  country: PropTypes.object,
};

export default CountryObject;
