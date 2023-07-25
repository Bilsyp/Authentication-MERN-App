import { Container, Row, Col, Button } from "react-bootstrap";
const Hero = () => {
  return (
    <Container className='bg-light text-secondary text-center my-5 rounded'>
      <Row>
        <Col>
          <h1 className='py-4 fs-1 fw-bold'>Welcome to MERN APP</h1>
          <p className='tez'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
            deserunt tempora? Ad veniam alias delectus nobis eos autem provident
            placeat accusamus? Inventore libero tenetur explicabo voluptas
            commodi dolor nam quas.
          </p>
        </Col>
        <div className='my-3 d-flex gap-2 justify-content-center'>
          <Button href='/signUp' variant='secondary'>
            SignUp
          </Button>
          <Button href='/login' variant='primary'>
            SignIn
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Hero;
