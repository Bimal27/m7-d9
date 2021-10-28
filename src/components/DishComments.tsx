import { Row } from 'react-bootstrap'

interface DishCommentsProps {
  dish: []
}

const DishComments = ({ dish }: DishCommentsProps) => (
  <Row className="justify-content-center mt-4">
    <ul>
      {
        // DELIMITING THE DYNAMIC PART
        // DELIMITING THE JS CODE
        dish.comments.map((c) => (
          <li key={c.id}>{c.comment}</li>
        ))
      }
    </ul>
  </Row>
)

export default DishComments
