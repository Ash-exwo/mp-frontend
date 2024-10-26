// multiple api call is needed here so we choose this kind of configuration otherwise we can just call the single request methods like axios.get(url[, config])-check the site of AXIOS

import axios from "axios";

const commonAPI = async (httpMethod, url, reqBody) => {
    const requestConfig = {
        method: httpMethod,
        url,
        data: reqBody
    }
    return await axios(requestConfig).then((res) => {
        return res
    }).catch(err => {
        return err
    })
}

export default commonAPI