import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';

export default class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputanBarang: '',
      InputanJumlah: '',
    };
  }

  handleInputBarang = event => {
    this.setState({inputanBarang: event});
  };

  handleInputJumlah = event => {
    this.setState({InputanJumlah: event});
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Masukan Nama Barang"
          onChangeText={this.handleInputBarang}
          value={this.state.inputanBarang}
        />
        <TextInput
          placeholder="Masukan Jumlah"
          onChangeText={this.handleInputJumlah}
          value={this.state.handleInputJumlah}
          keyboardType="numeric"
        />
        <Text>{this.props.namabelanja}</Text>
        <Text>Nama Barang: {this.state.inputanBarang}</Text>
        <Text>Jumlah Barang: {this.state.InputanJumlah}</Text>
      </View>
    );
  }
}
