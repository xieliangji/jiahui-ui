import Axios from "axios";
import restapi from '../../../assets/js/rest';
import {Message} from 'element-ui'

export async function upload(payload){
    let filePath
    await Axios.post(restapi.sugarTestPlanFileUpload, payload).then(response => {
        if(response.data.code !== 0){
            Message({message: response.data.message, type: "error", duration: 3000})
        } else {
            filePath = response.data.payload
        }
    }).catch(err => {
        Message({message: err, type: "error", duration: 3000})
    })
    return filePath
}