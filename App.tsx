import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  judul: {
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
  },
  inputan: {
    height: 50,
    width: 200,
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  hasil_input: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  teks: {
    marginBottom: 10,
    fontSize: 18,
  },
  mb20: {
    marginBottom: 20,
  },
});

function HalamanBeranda({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: 'https://i.postimg.cc/MpzQJ6Cv/udb1.png'}}
      />
      <Text style={styles.judul}>UDB Mart</Text>
      <Text style={styles.teks}>Pilih Menu</Text>
      <View style={styles.mb20}>
        <Button
          title="DATA SUPPLIER"
          onPress={() => navigation.navigate('Supplier')}
        />
      </View>
      <View style={styles.mb20}>
        <Button
          title="PEMBUAT APLIKASI"
          onPress={() =>
            navigation.navigate('Profil', {
              nim: '210103079',
              namaMhs: 'Taufik Ridho',
              jurusan: 'Teknik Informatika',
              kelas: 'TI21A2',
            })
          }
        />
      </View>
    </View>
  );
}

function DataSupplier() {
  const [npwp, setNpwp] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputan}
        placeholder="Masukkan No NPWP"
        onChangeText={newNpwp => setNpwp(newNpwp)}
        defaultValue={npwp}
      />
      <TextInput
        style={styles.inputan}
        placeholder="Masukkan Nama Supplier"
        onChangeText={nama => setNama(nama)}
        defaultValue={nama}
      />
      <TextInput
        style={styles.inputan}
        placeholder="Masukkan Alamat"
        onChangeText={alamat => setAlamat(alamat)}
        defaultValue={alamat}
      />
      <Text style={styles.hasil_input}>No NPWP = {npwp}</Text>
      <Text style={styles.hasil_input}>Nama Supplier = {nama}</Text>
      <Text style={styles.hasil_input}>Alamat = {alamat}</Text>
    </View>
  );
}

function DataProfil(route: any) {
  const {namaMhs, nim, jurusan, kelas} = route.route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Halaman Profil Mahasiswa</Text>
      <Text style={styles.teks}>NIM = {nim}</Text>
      <Text style={styles.teks}>Nama = {namaMhs}</Text>
      <Text style={styles.teks}>Jurusan = {jurusan}</Text>
      <Text style={styles.teks}>Kelas = {kelas}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Beranda">
        <Stack.Screen
          name="Beranda"
          component={HalamanBeranda}
          options={{
            title: 'Halaman Beranda',
            headerStyle: {
              backgroundColor: '#006afe',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="Supplier"
          component={DataSupplier}
          options={{
            title: 'Data Supplier',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#006afe',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="Profil"
          component={DataProfil}
          options={{
            title: 'Data Profil',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#006afe',
            },
            headerTitleStyle: {
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
