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
const POST_PROFILE_CHANGES = 'POST_PROFILE_CHANGES'

export function requestProfile() {
    let prof = axios
        .post('/api/profile')
        .then(res => {
            return res.data
        })

        return {
            type: REQUEST_PROFILE,
            payload: prof
        }
}

export function editProfile(event) {
    let {value, name} = event.target
    let details = {name, value}
        return {
            type: EDIT_PROFILE,
            payload: details
        }
}

export function postProfileChanges(profile) {
    let info = axios
        .post('/api/profile', profile)
        .then(res => {
            return res.data
        })

        return {
            type: POST_PROFILE_CHANGES,
            payload: info
        }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_PROFILE + '_PENDING': 
            return { ...state, loading: true }
        case REQUEST_PROFILE + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        case EDIT_PROFILE:
            return { ...state, profile: {...state.profile, [action.payload.name]: action.payload.value}}
        case POST_PROFILE_CHANGES + '_PENDING':
            return { ...state, loading: true}
        case POST_PROFILE_CHANGES + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        default: 
            return state
    }
}