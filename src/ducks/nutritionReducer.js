import axios from 'axios'

const initialState = {
    loading: false,
    nutritionG: {
        dateID: null,
        saturatedFat: '',
        polyunsaturatedFat: '',
        monounsaturatedFat: '',
        transFat: '',
        cholesterol: '',
        sodium: '',
        potassium: '',
        fiber: '',
        sugar: '',
        vitaminA: '',
        vitaminC: '',
        calcium: '',
        iron: '',
        fat: '',
        protein: '',
        carbohydrates: '',
        workouts: '',
        calBurned: '',
        minutes: '',
        weight: '',
        neck: '',
        chest: '',
        waist: ''
    },
    nutritionA: {
        dateID: null,
        saturatedFat: '',
        polyunsaturatedFat: '',
        monounsaturatedFat: '',
        transFat: '',
        cholesterol: '',
        sodium: '',
        potassium: '',
        fiber: '',
        sugar: '',
        vitaminA: '',
        vitaminC: '',
        calcium: '',
        iron: '',
        fat: '',
        protein: '',
        carbohydrates: '',
        workouts: '',
        calBurned: '',
        minutes: '',
        weight: '',
        neck: '',
        chest: '',
        waist: ''
    }

}

const REQUEST_NUTRITION_GOALS = 'REQUEST_NUTRITION_GOALS'
const ADD_NUTRITION_GOALS = 'ADD_NUTRITION_GOALS'
const ADD_NUTRITION_ACHIEVEMENTS = 'ADD_NUTRITION_ACHIEVEMENTS'
const POST_NUTRITION_GOALS = 'POST_NUTRITION_GOALS'
const POST_NUTRITION_ACHIEVEMENTS = 'POST_NUTRITION_ACHIEVEMENTS'

export function requestNutritionGoals() {
    let goals = axios
        .post('/api/goals')
        .then(res => {
            return res.data
        })

        return {
            type: REQUEST_NUTRITION_GOALS,
            payload: goals
        }
}

export function addNutritionGoals(event) {
        let {value, name} = event.target
        let goal = {name, value}
            return {
                type: ADD_NUTRITION_GOALS,
                payload: goal
            }
    }

export function postNutritionGoals(nutritionG) {
    let goal = axios
        .post('/api/goals', nutritionG)
        .then(res => {
            return res.data
        })

        return {
            type: POST_NUTRITION_GOALS,
            payload: goal
        }
}

export function postNutritionAchievements(nutritionA) {
    let achievements = axios
        .post('/api/check-in', nutritionA)
        .then(res => {
            return res.data
        })

        return {
            type: POST_NUTRITION_ACHIEVEMENTS,
            payload: achievements
        }
}



export function addNutritionAchievements(event){
    let {value, name} = event.target
    let achievements = {name, value}
        return {
            type: ADD_NUTRITION_ACHIEVEMENTS,
            payload: achievements
        }
}





export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_NUTRITION_GOALS + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_NUTRITION_GOALS + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        case ADD_NUTRITION_GOALS:
            return { ...state, nutritionG: {...state.nutritionG, [action.payload.name]: action.payload.value}}
        case POST_NUTRITION_GOALS + '_PENDING':
            return { ...state, loading: true }
        case POST_NUTRITION_GOALS + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        case POST_NUTRITION_ACHIEVEMENTS + '_PENDING':
            return { ...state, loading: true }
        case POST_NUTRITION_ACHIEVEMENTS + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        case ADD_NUTRITION_ACHIEVEMENTS:
            return { ...state, nutritionA: {...state.nutritionA, [action.payload.name]: action.payload.value}}
        default:
            return state
    }
}