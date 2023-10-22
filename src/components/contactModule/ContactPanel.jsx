import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./styles.module.css";
import { useState } from "react";

const ContactPanel = (props) => {
  const html = document.querySelector("html");

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.blurredBackground}>
      <div className={styles.container}>
        <div
          onClick={() => {
            props.uploader(false);
            html.style.overflow = "scroll";
          }}
          className={styles.closeBtn}
        >
          X
        </div>

        <form action="">
          <div className={styles.infoContainer}>
            <TextField id="standard-basic" label="Name" variant="standard" />
          </div>
          <div className={styles.infoContainer}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className={styles.emailInput}
            />
            <TextField
              id="standard-basic"
              label="Contact Number"
              variant="standard"
            />
          </div>
          <div className={styles.inputContainer}>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
              className={styles.selectInput}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Services
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Services"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>App Development</MenuItem>
                <MenuItem value={20}>Website Design</MenuItem>
                <MenuItem value={30}>Digital Marketing</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="standard-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="standard"
            />
          </div>

          <button className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPanel;
