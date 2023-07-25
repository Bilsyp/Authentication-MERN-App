import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
("react-toastify");
import Loader from "../components/Loader";
import { Form, Button } from "react-bootstrap";
import { FormContainer } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slice/authSlice";
import { useUpdateMutation } from "../slice/userApiSlice";
const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [update, { isLoading }] = useUpdateMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/profile");
      console.log(userInfo);
    }
  }, [userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await update({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("update successfully!");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>

          <Form.Control
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>

          <Form.Control
            type='text'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>

          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Confirm Password</Form.Label>

          <Form.Control
            type='confirmPassword'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {isLoading && <Loader />}
        <Button type='submit' variant='primary' className='mt-3'>
          Update
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ProfileScreen;
