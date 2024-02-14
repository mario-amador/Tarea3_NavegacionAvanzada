import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal, DrawerLayoutAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Menu = ({ route }) => {
  const { name, email, phone, profilePic } = route.params || {};

  const [showNavegacion, setShowNavegacion] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  const products = [
    { id: 1, name: 'Strawberry Creme', description: 'Puré de fresa', price: 'Lps 70', image: require('./strawberry.jpg') },
    { id: 2, name: 'Green Tea Cream', description: 'Té verde matcha', price: 'Lps 90', image: require('./green.jpg') },
  ];

  const drawerRef = React.createRef();

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };

  const navigateToScreen = (screenName) => {
    closeDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="right"
      renderNavigationView={() => (
        <View style={styles.drawerContainer}>
          <TouchableOpacity onPress={() => navigateToScreen('Dirección guardada')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Dirección guardada</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Inicio de sesión inteligente')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Inicio de sesión inteligente</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Idioma')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Idioma</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Preguntas más frecuentes')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Preguntas más frecuentes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Ayuda')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Ayudas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Política de Privacidad')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Política de Privacidad</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Términos de servicio')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Términos de servicio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Contacta con nosotros')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Contacta con nosotros</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('Cerrar sesión')} style={styles.drawerItem}>
            <Text style={styles.drawerItemText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      )}
    >
    <LinearGradient colors={['#1C5715', '#f5f5f5']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./notificacion.png')} style={styles.sideImage} />
        <Image source={require('./Starbucks-1.png')} style={[styles.headerImage, { tintColor: 'white' }]} />
        <Image source={require('./confi.png')} style={[styles.confiImageStyle, styles.sideImage]} />
      </View>
      
      <View style={styles.profileContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Bienvenido</Text>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.emailText}>{email}</Text>
          <Text style={styles.phoneText}>{phone}</Text>
        </View>
        <Image source={require('./user.jpg')} style={styles.profileImage} />
      </View>
      <FlatList
        data={[
          { image: require('./Starbuckss.jpg') },
          { image: require('./Starbucksa.jpg') },
        ]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.carouselImage} />
        )}
        pagingEnabled={true}
      />
      <View style={styles.navigationContainer}>
      <TouchableOpacity style={styles.navButton} onPress={() => setShowNavegacion(true)}>
          <Text style={styles.navButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setShowProducts(true)}>
          <Text style={styles.navButtonText}>Servicios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setShowActivities(true)}>
          <Text style={styles.navButtonText}>Actividades</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setShowUserProfile(true)}>
          <Text style={styles.navButtonText}>Usuario</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showProducts} animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={products}
            numColumns={2} 
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>Comprar</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <TouchableOpacity onPress={() => setShowProducts(false)}>
            <Text style={styles.closeButtonText}>Inicio</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={showActivities} animationType="slide">
        <View style={styles.modalContainer}>
        <Text style={styles.activityText}>No se ha realizado ninguna actividad</Text>
          <TouchableOpacity onPress={() => setShowActivities(false)}>
            <Text style={styles.closeButtonText}>Inicio</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={showUserProfile} animationType="slide">
        <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo Electrónico:</Text>
          <Text style={styles.emailText}>{email}</Text>
        </View>
        <View style={styles.phoneContainer}>
        <Text style={styles.phoneLabel}>Teléfono:</Text>
        <Text style={styles.phoneText}>{phone}</Text>
        </View>
          <TouchableOpacity onPress={() => setShowUserProfile(false)}>
            <Text style={styles.closeButtonText}>Inicio</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </LinearGradient>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: -60,
  },
  headerImage: {
    width: '50%',
    height: 200,
    resizeMode: 'cover',
  },
  sideImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  confiImageStyle: {
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 40, 
    marginTop: 30,
  },
  profileImage: {
    width: 40,
    height: 50,
    borderRadius: 25,
    marginTop: -50,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'black',
    marginTop: -70,
  },
  nameText: {
    fontSize: 18,
    color: 'black',
    marginTop: -20,
  },
  emailText: {
    fontSize: 16,
    color: 'black',
  },
  phoneText: {
    fontSize: 16,
    color: 'black',
  },
  carouselImage: {
    width: 300,
    height: 130,
    resizeMode: 'cover',
    margin: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#1C5715',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 30,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  productDescription: {
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#1C5715',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 18,
    color: 'black',
  },
  phoneText: {
    fontSize: 18,
    color: 'black',
  },
  activityText: {
    fontSize: 18,
    color: 'black',
    marginTop: -20,
  },
  label: {
    marginBottom: 20,
    color: 'green',
  },
  inputContainer: {
    marginBottom: 30,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneLabel: {
    fontSize: 16,
    color: 'green',
    marginRight: 7,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 10,
  },
  drawerItem: {
    marginBottom: 20,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#1C5715',
  },
});

export default Menu;