import * as React from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

export default function NewsletterDrawer(props) {
  return (
    <Drawer
      anchor={"bottom"}
      open={props.open}
      onClose={props.onClose}
      PaperProps={{ elevation: 0 }}
      sx={{
        backdropFilter: "blur(4px)",
      }}
    >
      <Container maxWidth="sm">
        <form
          action=""
          method="POST"
        >
          <Box
            sx={{
              my: "2rem",
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: "1.5rem" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Subscribe to to stay up to date.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: "360px",
                  lineHeight: "1.43",
                }}
              >
                No spam, unsubscribe any time 🤞 
              </Typography>
            </Box>
            <TextField
              id="outlined-name"
              label="Name"
              variant="outlined"
              name="name"
              type={"text"}
            />
            <TextField
              id="outlined-email"
              label="Email"
              variant="outlined"
              name="email"
              type={"email"}
              required
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disableElevation
              type="submit"
              sx={{
                backgroundColor: "text.primary",
                color: "background.alt",
                textTransform: "none",
                fontWeight: 400,
              }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Container>
    </Drawer>
  )
}
