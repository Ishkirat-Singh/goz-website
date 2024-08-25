import { Stack, Typography } from "@mui/material";

const Faqs = () => {
  return (
    <>
      <Typography fontWeight={700} className="grot" mb={2} variant="h2">
        FAQs
      </Typography>
      <Stack spacing={5} mb={5}>
        <Stack>
          <Typography fontWeight={700} className="grot" mb={2} variant="h5">
            What are Olympiad exams?
          </Typography>
          <Typography>
            Olympiad exams are competitive exams conducted by various
            organisations across India and abroad. These examinations are
            conducted on the basis of the school curriculum of CBSE, ICSE, and
            other major state boards. These exams help to compare student's
            performance with their peers across the country. The question paper
            for these exams is objective-type with multiple-cxhoice questions.
            Olympiad exams focus on concept-based learning and logical thinking.
            This in turn enhances the abilities of the student which is an
            important tool to face the future competition coming in their lives.
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={700} className="grot" mb={2} variant="h5">
            What is the importance of Olympiad Exams?
          </Typography>
          <Typography>
            Olympiad exams evaluate conceptual learning and strengthen the
            reasoning, analytical and problem solving skills of a student from
            an early age. This way the student becomes ready for the upcoming
            challenges of the competitive world.
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={700} className="grot" mb={2} variant="h5">
            I want to conduct these exams in my school, what should I do?
          </Typography>
          <Typography>
            For details and more information about school registration, please
            send us an email at globalolympiadzone@gmail.com with the details of
            your school. We will revert back with all the necessary procedures
            for registering a school for conducting the exam.
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={700} className="grot" mb={2} variant="h5">
            Can 'I' participate in the Olympiad examination individually as my
            school is not participating in the Olympiad examination?
          </Typography>
          <Typography>
            Yes, you can directly participate logging in with the site or reach
            out us at globalolympiadzone@gmail.com
          </Typography>
        </Stack>
        <Stack>
          <Typography fontWeight={700} className="grot" mb={2} variant="h5">
            How can I participate in the Olympiad Examination?
          </Typography>
          <Typography>
            You can participate in an Olympiad exam either through your school
            or by participating individually on www.globalolympiadzone.co.in
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Faqs;
