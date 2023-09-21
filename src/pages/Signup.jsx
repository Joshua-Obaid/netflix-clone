import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'



export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { firebase } = useContext(FirebaseContext)

    const isInvalid = email === '' | password === '' | firstName === ''

    const handleSignup = (e) => {
        e.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        setEmail('')
                        setPassword('')
                        setError('')
                        navigate(ROUTES.BROWSE)
                    })
            ).catch((error) => setError(error.message))
    }



    return (
        <>
            <HeaderContainer />

            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method='POST'>
                    <Form.Input
                        type='text'
                        placeholder='first name'
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />
                    <Form.Input
                        type='email'
                        placeholder='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <Form.Input
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        autoComplete='off'
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>

                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>

            <FooterContainer />
        </>
    )
}