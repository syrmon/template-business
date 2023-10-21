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
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </div>
          <div className={styles.infoContainer}>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </div>
          <div className={styles.inputContainer}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
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
