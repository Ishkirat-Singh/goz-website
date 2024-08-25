import { Container } from "@mui/system";
import Grade from "./Grade";

// const grades = [
//   {
//     grade: 1,
//     samplePaper: "https://google.com/sample-papers",
//     blueprint: "http://google.com/blueprint",
//     syllabus: `lorem ipsum dolor, simply dummy
//             test of the priting
//             `,
//   },
//   {
//     grade: 2,
//     samplePaper: "https://google.com/sample-papers",
//     blueprint: "http://google.com/blueprint",
//     syllabus: `
//             lorem ipsum dolor, simply dummy
//             test of the priting
//             `,
//   },
//   {
//     grade: 3,
//     samplePaper: "https://google.com/sample-papers",
//     blueprint: "http://google.com/blueprint",
//     syllabus: `
//             lorem ipsum dolor, simply dummy
//             test of the priting
//             `,
//   },
// ];

const Grades = ({ grades }) => {
  return (
    <Container
      sx={{
        mt: -15,
      }}
      maxWidth="md"
    >
      {grades.map((grade) => (
        <Grade key={grade._key} {...grade} />
      ))}
    </Container>
  );
};

export default Grades;
