import axios from 'axios'

const initialState = {
    loading: false,
    nutritionG: {
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
        carbohydrates: ''
    },
    nutritionA: {
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
        carbohydrates: ''

    }

}

const REQUEST_NUTRITION_GOALS = 'REQUEST_NUTRITION_GOALS'
const ADD_NUTRITION_ACHIEVEMENTS = 'ADD_NUTRITION_ACHIEVEMENTS'

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



export function addNutritionAchievements(saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat,
     cholesterol, sodium, potassium, fiber, sugar, vitaminA, vitaminC, calcium, iron, fat, protein, carbohydrates) {
    let achievements = axios
        .post('/api/goals', {
            saturatedFat, polyunsaturatedFat, monounsaturatedFat, transFat, cholesterol, sodium, potassium, fiber,
            sugar, vitaminA, vitaminC, calcium, iron, fat, protein, carbohydrates
        })
        .then(res => {
            return res.data
        })

        return {
            type: ADD_NUTRITION_ACHIEVEMENTS,
            payload: achievements
        }
}





export default function reducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case REQUEST_NUTRITION_GOALS + '_PENDING':
            return { ...state, loading: true }
        case REQUEST_NUTRITION_GOALS + '_FULFILLED':
            return { ...state, ...action.payload, loading: false }
        case ADD_NUTRITION_ACHIEVEMENTS + '_PENDING':
            return { ...state, loading: true }
        case ADD_NUTRITION_ACHIEVEMENTS + '_FULFILLED':
            return { ...state, nutritionA: initialState.nutritionA, loading: false }
        default:
            return state
    }
}