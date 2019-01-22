import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state={loggedIn:null}

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB33Vpe1OerU-wsMEUQEueevIcsdeh5LrI",
            authDomain: "auth-react-native-2dde6.firebaseapp.com",
            databaseURL: "https://auth-react-native-2dde6.firebaseio.com",
            projectId: "auth-react-native-2dde6",
            storageBucket: "auth-react-native-2dde6.appspot.com",
            messagingSenderId: "539175326966"
        })

        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                this.setState({loggedIn:true})
            }else{
                this.setState({loggedIn:false})
            }

        })
    }
    renderContent(){
        switch(this.state.loggedIn){
            case true:return ( <Button onPress={()=>firebase.auth().signOut()} buttonText='Log Out' />)
            case false:return <LoginForm/>
            default: return <Spinner size="large"/>
        }
    }
   
    render() {
        return (
            <View>
                <Header text="Authentication" />
                {this.renderContent()}
            </View>
        )
    }
}

export default App