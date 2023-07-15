import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Main() {

    const [data, setData] = useState({
        userHeader: "",
        userData: ""
    });

    const [toggle, setToggle] = useState(false)

    // const [arr,setArr]=useState([])

    const handleChange = (e) => {
        // console.log(e.target.value)
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);
        setToggle(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ border: "1px solid black", margin: "50px auto", width: "30%", height: "350px", borderRadius: "10px", textAlign: "center", boxShadow: "10px 10px 5px #aaaaaa" }}>

                {/* text-field */}
                <div>
                    <TextField id="standard-basic" label="Section-Header" variant="standard" name='userHeader' value={data.userHeader} onChange={handleChange} style={{ marginTop: "30px" }} />
                </div>

                {/* section-detail */}
                <div>
                    <TextField
                        id="filled-multiline-static"
                        label="Section-Details"
                        multiline
                        rows={4}
                        variant="filled"
                        style={{ marginTop: "30px" }}
                        name='userData'
                        value={data.userData}
                        onChange={handleChange}
                    />
                </div>

                {/* Button */}
                <div>
                    <Button type='submit' variant="contained" style={{ marginTop: "30px" }}>Submit</Button>
                </div>

            </form>
            {toggle == true && <div>
                <Accordion style={{ width: "50%", margin: "0 auto" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography >{data.userHeader}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {data.userData}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            }

        </>
    )
}

export default Main