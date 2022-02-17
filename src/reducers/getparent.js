import * as types from '../actions/Actiontypes';
// const [blog, setblog] =useState([])
import db from '../firebase.config';
var blog = []
const parent = (state = blog, action) => {
    if (action.type === types.getparent) {
          const docs = []
            db.collection("parent").onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    docs.push({
                        ...doc.data(),
                        id: doc.id
                    })
                });
            });
          return docs
    }else{
        return state
    }
          

          

       
    }

export default parent