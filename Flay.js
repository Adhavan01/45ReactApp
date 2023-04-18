import React,{useState} from 'react'
import axios from "axios";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


const baseURL = "http://10.100.127.26:8090/track/all";

function Flay() {

    const [post, setPost] = useState(null);
    React.useEffect(() => {
        console.log(baseURL, '-> baseurl');
        axios.get(baseURL).then((response) => {
            console.log(response, '-> response');
          setPost(response.data);
        });
      }, []);

      if (!post) return null;
  return (
    <div>
        {
            post.map((data) =>{
                return(
                    <div>
                        <h1>{data.type}</h1>
                    </div>
                )
            })
                //     <TableContainer component={Paper}>
                //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
                //       <TableHead>
                //         <TableRow>
                //           <TableCell>Type</TableCell>
                //           <TableCell align="right">Capasity</TableCell>
                //           <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                //         </TableRow>
                //       </TableHead>
                //       <TableBody>
                //         {post.map((post) => (
                //           <TableRow
                //             key={post.name}
                //             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                //           >
                //             <TableCell component="th" scope="row">
                //               {post.type}
                //             </TableCell>
                //             <TableCell align="right">{post.type}</TableCell>
                //             <TableCell align="right">{post.capacity}</TableCell>
                //             <TableCell align="right">{post.cost}</TableCell>
                //           </TableRow>
                //         ))}
                //       </TableBody>
                //     </Table>
                //   </TableContainer>
                // // )
                
        }
  
    </div>
  )
}

export default Flay