import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CiSearch } from "react-icons/ci";

const style = {
  position: "absolute",
  top: "13%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#82741c4e",
  border: "2px solid #82741c",
  boxShadow: 24,
  p: 2,
  borderRadius: 10,
};

const ModalPage = ({ icon }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        onClick={handleOpen}
      >
        {icon}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description">
              <div className="d-flex justify-content-center align-items-center">
                <div className="flex-fill">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-100 md_sch"
                  />
                </div>
                <div className="sch_bth">
                  <button className="badge">Search</button>
                </div>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalPage;
