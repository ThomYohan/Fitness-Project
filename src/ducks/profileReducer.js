import axios from 'axios'

const initialState = {
    loading: false,
    profile: {
        name: '',
        email: '',
        age: '',
        gender: '',
        location: ''
    }
}

const REQUEST_PROFILE = 'REQUEST_PROFILE'
const EDIT_PROFILE = 'EDIT_PROFILE'

export function requestProfile() {
    let profile = axios
        .post('/api/profile')
        .then(res => {
            return res.data
        })

        return {
            type: REQUEST_PROFILE,
            payload: profile
        }
}

export function editProfile(name, email, age, gender, location) {
    let profile = axios
        .post('/api/profile', {
            name, email, age, gender, location
        })
        .then(res => {
            return res.data
        })

        return {
            type: EDIT_PROFILE,
            payload: profile
        }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_PROFILE + '_PENDING': 
            return { ...state, loading: true }
        case REQUEST_PROFILE + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        case EDIT_PROFILE + '_PENDING':
            return { ...state, loading: true }
        case EDIT_PROFILE + '_FULFILLED':
            return { ...state, profile: initialState.profile, loading: false }
        default: 
            return state
    }
}