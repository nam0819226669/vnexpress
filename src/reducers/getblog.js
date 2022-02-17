import * as types from '../actions/Actiontypes';
// const [blog, setblog] =useState([])
import db from '../firebase.config';
var blog=[]
var myreducer =(state = blog, action)=>{
    switch(action.type){
        case types.getblogs:
                const docs = []
                db.collection("Category").where("name", "==", "newblogs").onSnapshot((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        db.collection("Blogs").where("id_c", "==", doc.id).onSnapshot((querySnapshot) => {
                            querySnapshot.forEach((doc1) => {
                                docs.push({
                                    ...doc1.data(),
                                    id: doc1.id
                                });

                            });

                          
                        })

                    });
                })
            return docs;
    
            default: return state;
    }
}
export default myreducer