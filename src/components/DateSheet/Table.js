import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

const DateSheetTable = ({ dates }) => {
  return (
    <Stack mt={-10} mb={15}>
      <Container maxWidth="lg">
        <TableContainer
          sx={{
            bgcolor: "white",
            p: 2,
            boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Table>
            <TableHead
              sx={{
                "& > .MuiTableRow-root > *": {
                  fontWeight: 700,
                  minWidth: 120,
                },
              }}
            >
              <TableRow>
                <TableCell>Contest</TableCell>
                <TableCell>Exam date</TableCell>
                <TableCell>Last date of reg.</TableCell>
                <TableCell>Eligible for grades</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                "& > *:last-child": {
                  "& > *": {
                    border: "none",
                  },
                },
              }}
            >
              {dates.map((date) => (
                <TableRow key={date._key}>
                  <TableCell>{date.contest}</TableCell>
                  <TableCell>{date.examDate}</TableCell>
                  <TableCell>{date.lastDate}</TableCell>
                  <TableCell>{date.eligible}</TableCell>
                  <TableCell>{date.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Stack>
  );
};

export default DateSheetTable;
