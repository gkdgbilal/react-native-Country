import * as React from "react";
import { View, ScrollView, FlatList } from "react-native";
import { Header, SearchInput, FabButton } from "../../components";
import { homeStyles as styles } from "./styles";
import CountryObject from "./CountryObject";
import { fetchCountries, changeSearchQuery } from "../../actions/countries";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCountries());
  }

  onSearchButtonTouched = () => {
    const { searchQuery } = this.props;
    this.props.dispatch(fetchCountries(searchQuery));
  };

  onChangeSearchQuery = (text) => {
    this.props.dispatch(changeSearchQuery(text));
  };

  onFabButtonTouched = () => {
    this.props.dispatch(fetchCountries(""));
  };

  render() {
    const renderCountryItem = ({ item }) => <CountryObject country={item} />;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Header />
          <SearchInput
            placeholder="Enter country name"
            onPress={this.onSearchButtonTouched}
            onChangeText={this.onChangeSearchQuery}
            style={styles.searchInput}
          />
          <View style={styles.line} />
          <FlatList
            data={this.props.countries}
            renderItem={renderCountryItem}
            keyExtractor={item => item.name}
          />
        </ScrollView>
        <FabButton
          icon="refresh"
          onPress={this.onFabButtonTouched}
          style={styles.fabButton}
        />
      </View>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,

  countries: PropTypes.array,
  searchQuery: PropTypes.string,
};

const stateToProps = (state) => {
  const { countries, searchQuery } = state.countries;
  return {
    countries,
    searchQuery,
  };
};

export default connect(stateToProps)(Home);
