import { StatusBar } from 'expo-status-bar';
import {ScrollView ,StyleSheet, Text, View , Image} from 'react-native';
import ProfileDetails from '../Components/ProfileDetails';

const ProfileScreen = () => {
const profile = [
    {
        id: 1,
        name:'Anita',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: require('../assets/person1.jpg'),
    },
    {
        id: 2,
        name:'Muhamed',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 3,
        name:'Albert',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: require('../assets/person3.jpg'),
    },
];
return(
    <ScrollView contentContainerStyle={styles.container}>

        {profile.map(profile =>(
            <StudentDetails
                key={profile.id}
                name={profile.name}
                description={profile.description}
                image={profile.image}
            />
        ))};
    </ScrollView>
)
};


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f0f0f0', 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', 
    }
});


export default ProfileScreen;