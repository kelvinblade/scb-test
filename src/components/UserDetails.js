import React, { PureComponent } from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { Icon } from 'expo';
import PropTypes from 'prop-types';

import { SectionTitle, RoundButton } from '../common';
import Colors from '../constants/Colors';

export default class UserDetails extends PureComponent {
  render() {
    const { user, navigateTo } = this.props;
    const {
      name, email, phone, website, company,
    } = user;

    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://ui-avatars.com/api/?name=${name}&background=59CFE2&color=fff&size=100`,
          }}
          style={styles.avatar}
        />
        <Text style={styles.title}>{name}</Text>
        <View style={styles.buttonContainer}>
          <RoundButton title="Albums" icon="ios-images" onPress={() => navigateTo('UserAlbums')} />
          <RoundButton title="Posts" icon="ios-create" onPress={() => navigateTo('UserPosts')} />
          <RoundButton title="Todos" icon="ios-list" onPress={() => navigateTo('UserTodos')} />
        </View>
        <View style={styles.sectionContainer}>
          <SectionTitle title="Contact" />
          <View style={styles.row}>
            <Icon.Ionicons name="ios-mail" style={styles.icon} />
            <Text style={styles.text}>{email}</Text>
          </View>
          <View style={styles.row}>
            <Icon.Ionicons name="ios-call" style={styles.icon} />
            <Text style={styles.text}>{phone}</Text>
          </View>
          <View style={styles.row}>
            <Icon.Ionicons name="ios-globe" style={styles.icon} />
            <Text style={styles.text}>{website}</Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <SectionTitle title="Company" />
          <Text style={styles.text}>{company.name}</Text>
        </View>
      </View>
    );
  }
}

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  navigateTo: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: Colors.headerText,
    fontWeight: '700',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    color: Colors.tertiaryColor,
    marginRight: 5,
  },
  text: {
    fontSize: 14,
    color: Colors.detailText,
    fontWeight: '400',
  },
  sectionContainer: {
    marginVertical: 15,
  },
});
