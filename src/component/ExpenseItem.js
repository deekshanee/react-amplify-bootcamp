import { Container } from "@mui/material";
import Expense from "./Expense";
import { Col, Row } from "react-bootstrap";

function ExpenseItem() {
  const expenseItems = [
    {
      title: "Title-1",
      amount: "200",
      description: "Expense Item1",
      date: new Date(),
    },
    {
      title: "Title-2",
      amount: "1200",
      description: "Expense Item2",
      date: new Date(),
    },
    {
      title: "Title-3",
      amount: "220",
      description: "Expense Item3",
      date: new Date(),
    },
    {
      title: "Title-4",
      amount: "800",
      description: "Expense Item4",
      date: new Date(),
    },
    {
      title: "Title-5",
      amount: "900",
      description: "Expense Item5",
      date: new Date(),
    },
    {
      title: "Title-6",
      amount: "9009",
      description: "Expense Item6",
      date: new Date(),
    },
  ];
  return (
    <Container>
      {expenseItems.map((expense, key) => (
        <Row>
          <Col>
            <Expense expense={expense} index={key} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default ExpenseItem;
