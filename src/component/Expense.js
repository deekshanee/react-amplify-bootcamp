/* This will be reusable component which duty is to render expense item based on props */
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Expense = (props) => {
  const { title, amount, description, date } = props.expense;
  const { index } = props;
  const submitHandler = (index) => {
    console.log("Clicked on the id", index);
  };
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{date.toString()}</ListGroup.Item>
        <ListGroup.Item>{description}</ListGroup.Item>
        <ListGroup.Item>
          <Stack direction="horizontal" gap={2}>
            <Badge pill bg="primary">
              ${amount}
            </Badge>
          </Stack>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button
            variant="primary"
            size="sm"
            onClick={() => submitHandler(index)}
          >
            Edit
          </Button>{" "}
          <Button
            variant="primary"
            size="sm"
            onClick={() => submitHandler(index)}
          >
            Save
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Expense;
