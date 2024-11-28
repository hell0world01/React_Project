import { useState } from "react";
import { motion } from "framer-motion";
import data from "./data";
import './style.css';
export default function Accordian() {
    const [selected, setSelected] = useState([]);

    function selection(passedID) {
        selected.includes(passedID) 
        ? setSelected(selected.filter(value => value !== passedID)) 
        : setSelected([...selected, passedID]);
    }

    return(
        <div className="wrapper">
            <div className="accordian">
            {
                data && data.length > 0 ? (data.map(value => 
                    <div key={value.id} className="item">
                        <div onClick={() => selection(value.id)} className="title">
                            <h3>{value.question}</h3>
                            <span>+</span>
                        </div>
                        {selected.includes(value.id) ? (
                  <motion.div
                    className="content"
                    key={value.id} // Unique key for each item
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.answer}
                  </motion.div>
                ) : null}
                    </div>
                ))
                : 
                (
                    <div>No data was found</div>
                )
            }
            </div>
        </div>
    )
}