import { authAxios } from "./constants";

export const login = async (body, dispatch) => {
    return new Promise(async (resolve, reject) => {
        await authAxios.post(`/auth/signin`, body)
            .then(async res => {
                console.log(res.data)
                if (res.data) {
                    if (res.status === 200 ) {
                        await dispatch({
                            type: "LOGIN",
                            payload: res.data
                        });
                        resolve(res)
                    }
                } 
            }).catch((err) => {
                reject(err)
            })
    })
}


// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }