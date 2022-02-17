import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import React, {useState, useEffect} from 'react'
import db from '../../firebase.config'


export default  function _Router(props){
    let id = props.match && props.match.params && props.match.params.id_c
    let name = props.match && props.match.params && props.match.params.name
    let NAME = name === undefined? props.pr_name : name
    let id_p = id === undefined ? props.id : id
    const key = id===undefined? 'id_p': 'id_c'
    const[blog, setblog] = useState([])
    const getblog = async (id, _key) => {
      await db.collection("Blogs").where(_key, '==', id).onSnapshot((querySnapshot) => {
            var arr = []

            querySnapshot.forEach((doc) => {
                arr.push({
                    ...doc.data(),
                    id: doc.id
                });

            });
            setblog(arr)
        })
    };
    useEffect( async()=>{
         await getblog(id_p, key)
    })
    return(
        <div>
            <Section1 blog={blog} parent={NAME}/>
            <Section2 blog={blog}/>
           
            <Section3/>
            <Section4/>
             <Section3/>
        </div>
    )
}