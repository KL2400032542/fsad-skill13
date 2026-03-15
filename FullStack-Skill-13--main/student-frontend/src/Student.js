import axios from "axios"
import { useEffect, useState } from "react"

function Student(){

const [students,setStudents] = useState([])

useEffect(()=>{
axios.get("http://localhost:8080/students")
.then(res => setStudents(res.data))
},[])

return(
<div>
<h2>Students List</h2>

{students.map(s => (
<div key={s.id}>
{s.name} — {s.course}
</div>
))}

</div>
)

}

export default Student