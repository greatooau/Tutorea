import { dataFetcher } from "../../constants/dataFetcher";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'api/'


const getTutorsByCategory = async(category, token) => {
    const config = {
        headers: {
            'Authorization':`Bearer ${token}`
        }
    }
    
    const response = await dataFetcher.get(API_URL + 'tutors/category/' + category, config)
    
    
    return response.data
}

// Get user's tutors
const getMyTutors = async (token) => {
    
    const config = {
        headers: {
            'Authorization':`Bearer ${token}`
        }
    }
    const response = await dataFetcher.get(API_URL + 'users/mytutors', config)
    
    return response.data
}

const getTutors = async (token) => {
    const config = {
        headers: {
            'Authorization':`Bearer ${token}`
        }
    }
    const response = await dataFetcher.get(API_URL + 'tutors/', config)
    
    return response.data
}
// Login user
const addToMyTutors = async (token, tutorId) => {
    const config = {
        headers: {
            'Authorization':`Bearer ${token}`
        }
    }
    const response = await dataFetcher.post(API_URL + 'users/mytutors', { tutorId },
    config)
  
    return response.data
}
// Login user
const getOneTutor = async (token, tutorId) => {
    const config = {
        headers: {
            'Authorization':`Bearer ${token}`
        }
    }
    const response = await dataFetcher.get(API_URL + `tutors/${tutorId}` ,config)
    
    return response.data
}
// Lo que tengo q corregir
const endSesion = async(tutorId, token) => {
    await AsyncStorage.removeItem('user');
}

const tutorService = {
    getMyTutors,
    getOneTutor,
    getTutorsByCategory,
    addToMyTutors,
    endSesion,
    getTutors
}

export default tutorService