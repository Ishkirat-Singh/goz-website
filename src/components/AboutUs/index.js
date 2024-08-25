import { Stack, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Stack>
      <Typography fontWeight={700} className="grot" mb={2} variant="h2">
        About us
      </Typography>
      <Typography>
        The GOZ has, for a long time, been fascinated only by the crux of
        multiple languages. This has induced the need for an external platform
        that provides the opportunity to apply these formations and build a deep
        understanding of the core concepts learned in school. Olympiads are
        competitive examinations conducted nationally and internationally and
        have proved to be such platforms that allow students to test their
        mettle in different subjects. These exams focus on the application of
        concepts learned in the classroom. The exams are designed in such a way
        that the students are forced to apply multiple concepts simultaneously
        to arrive at the answers. This not only sharpens their skill but also
        builds in them a deep appreciation of the subject. Global Olympiad Zone
        recognizes the need for such periodic tests that plunge the students out
        of solace and help them invigorate their performances. Our Olympiads
        that are led on an international level pull students from all across the
        globe to compete against their peer groups. We aim to foster a healthy
        environment that is fierce yet polished.
      </Typography>
    </Stack>
  );
};

export default AboutUs;
