import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SubjectResource from "./SubjectResource";
import SamplePapersImage from "./images/sample-papers.png";
import BlueprintImage from "./images/blueprint.png";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../sanity";

const Grade = ({ grade, samplePaper, blueprint, syllabus }) => {
  return (
    <Accordion
      elevation={0}
      disableGutters
      sx={{
        bgcolor: "white",
        "&::before": {
          height: 0,
        },
        mb: 3,
        boxShadow: "0px 10px 32px rgba(0, 0, 0, 0.05)",
        // "&.Mui-expanded .MuiAccordionSummary-root": {
        //   color: "primary.main",
        // },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        {grade.includes("+") ? "CUET" : `Grade ${grade}`}
      </AccordionSummary>
      <AccordionDetails sx={{ px: { xs: 3, sm: 4 }, pt: 2, pb: 5 }}>
        {!!syllabus && (
          <>
            <Typography fontWeight={700}>Syllabus</Typography>
            <Stack
              mb={4}
              borderRadius={1}
              width="100%"
              mt={2}
              p={2}
              bgcolor="#F2F7FB"
              sx={{
                "& > *": {
                  m: 0,
                },
                "& > p": {
                  my: 1,
                },
              }}
            >
              <PortableText
                value={syllabus}
                components={{
                  types: {
                    image: ({ value }) => (
                      <Stack
                        sx={{
                          "& img": {
                            width: "100%",
                          },
                        }}
                      >
                        <img src={urlFor(value).url()} />
                      </Stack>
                    ),
                  },
                }}
              />
            </Stack>
          </>
        )}
        <Grid
          container
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={{
            xs: 4,
            sm: 0,
          }}
        >
          {!!samplePaper && (
            <Grid item xs={6}>
              <SubjectResource
                Icon={SamplePapersImage}
                title="Sample papers"
                sub="Latest set of papers"
                link={samplePaper}
              />
            </Grid>
          )}
          {!!blueprint && (
            <Grid item xs={6}>
              <SubjectResource
                Icon={BlueprintImage}
                title="Blueprint"
                sub="Blue print of sample paper"
                link={blueprint}
              />
            </Grid>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Grade;
