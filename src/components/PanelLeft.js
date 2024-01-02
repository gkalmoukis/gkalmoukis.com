import * as React from "react"
import { Link } from "gatsby"

import ContactDrawer from "./ContactDrawer"
import SearchDialog from "./search/search-dialog"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SearchIcon from "@mui/icons-material/Search"

export default function RightDrawer({ isRootPath, ThemeButton }) {
  const [state, setState] = React.useState({
    bottom: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "80px",
        borderRight: "1px solid",
        borderColor: "divider",
        padding: "2.5rem 0",
        position: "sticky",
        top: 0,
        "@media (max-width: 1080px)": {
          display: "none",
        },
      }}
    >
      <Box>
        <IconButton
          sx={{ color: "text.primary" }}
          size="small"
          component={Link}
          to="/"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 905.000000 608.000000"
          >
            <g
              transform="translate(0.000000,608.000000) scale(0.100000,-0.100000)"
              fill="currentColor"
              stroke="none"
            >
              <path d="M235 6071 c-89 -22 -178 -101 -211 -187 -18 -47 -19 -92 -19 -1214
                l0 -1165 26 -55 c33 -69 79 -115 149 -149 l55 -26 735 -3 c636 -2 749 -1 840
                13 385 60 704 293 880 645 85 169 109 290 120 615 12 319 38 457 121 641 188
                420 623 740 1182 869 l102 24 -1975 -1 c-1086 0 -1988 -3 -2005 -7z"/>
              <path d="M4945 6055 c359 -84 686 -255 905 -475 194 -193 301 -389 366 -668
                22 -92 26 -144 34 -377 8 -243 11 -280 35 -373 48 -186 118 -324 236 -466 148
                -177 317 -292 537 -366 174 -58 231 -61 1037 -58 l730 3 50 23 c65 30 122 85
                151 147 l24 50 0 1180 0 1180 -24 50 c-29 62 -86 117 -151 147 l-50 23 -1990
                2 -1990 2 100 -24z"/>
              <path d="M173 2764 c-61 -30 -117 -88 -147 -153 l-21 -46 0 -1175 0 -1175 24
                -50 c33 -65 96 -128 152 -149 41 -15 193 -16 1999 -14 l1955 3 -90 23 c-494
                128 -901 426 -1087 797 -103 204 -137 366 -148 700 -6 158 -15 281 -25 334
                -80 412 -407 769 -810 886 -48 14 -114 29 -148 35 -38 6 -366 10 -833 10
                l-770 0 -51 -26z"/>
              <path d="M7220 2779 c-282 -47 -563 -222 -745 -464 -54 -72 -123 -204 -158
                -301 -48 -133 -59 -214 -67 -479 -9 -280 -26 -398 -85 -561 -158 -444 -565
                -782 -1130 -939 l-120 -34 1977 2 1976 2 58 40 c46 32 65 53 91 104 l33 63 -2
                1192 c-3 1117 -4 1193 -21 1223 -28 52 -76 102 -126 131 l-46 27 -790 1 c-440
                1 -814 -2 -845 -7z"/>
            </g>
          </svg>
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Tooltip title="Home" placement="right" arrow>
          <IconButton component={Link} to="/">
            {isRootPath ? (
              <HomeIcon sx={{ color: "text.primary" }} />
            ) : (
              <HomeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <React.Fragment>
          <Tooltip title="Search" placement="right" arrow>
            <IconButton onClick={handleClickOpen}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <SearchDialog
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
          />
        </React.Fragment>
        <React.Fragment>
          <Tooltip title="Contact" placement="right" arrow>
            <IconButton onClick={toggleDrawer("bottom", true)}>
              <AlternateEmailOutlinedIcon />
            </IconButton>
          </Tooltip>
          <ContactDrawer
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          />
        </React.Fragment>
        {ThemeButton}
      </Box>
      <Box>
        <Avatar
          alt="Giorgos Kalmoukis"
          src="https://avatars.githubusercontent.com/u/39299141?v=4"
          sx={{ width: 32, height: 32, backgroundColor: "divider" }}
        >
          BR
        </Avatar>
      </Box>
    </Box>
  )
}
