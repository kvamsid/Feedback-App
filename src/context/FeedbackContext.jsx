import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:  'This is Feedback Item 1',
            rating:10
        },
        {
            id:1,
            text:  'This is Feedback Item 2',
            rating:5
        },{
            id:1,
            text:  'This is Feedback Item 3',
            rating:8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updatedItem) =>{
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item))
    }

    return <FeedbackContext.Provider value = {{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext