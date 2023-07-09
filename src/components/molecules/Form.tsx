import React, { FC, useState, FormEvent } from 'react';
import './Form.scss';
import {Button} from "../atoms/Button";


interface FormProps {
    onSubmit: (username: string, password: string) => void;
}

const Form:FC<FormProps>  = ({onSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(username, password);
        setUsername('');
        setPassword('');
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        placeholder="Please enter your username"
                        value={username}
                        className="form__input"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Please enter your password"
                        value={password}
                        className="form__input"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                {/* @ts-ignore*/}
                <Button onClick={handleSubmit} >Submit</Button>
            </form>
        </div>
    )

}

export default Form;