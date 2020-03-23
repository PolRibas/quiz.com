import axios from 'axios'

class QuestionService {
    constructor (){
        this.question = axios.create({
            baseURL: 'http://localhost:5000/api/question'
        })
    }
    
    createByType(type, question){
        const {title, description, answer, posibles, haveFormation, formation} = question
        return this.question.post(`/${type}`, {title, description, answer, posibles, haveFormation, formation})
        .then(response => response)
    }
    
    create(question){
        const {title, type, description, answer, posibles, haveFormation, formation} = question
        return this.question.post(`/`, {title, type, description, answer, posibles, haveFormation, formation})
        .then(response => response)
    }

    getByType(type){
        return this.question.get(`/${type}`)
        .then(response => response)
    }

    getAll(){
        return this.question.get(`/`)
        .then(response => response)
    }
}
    
const question  = new QuestionService();

export default question;