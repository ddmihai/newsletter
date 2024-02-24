import { Fragment, useState } from "react"
import Button from "./Button";

const TextInput = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);


    // Use regex expressions to validate emails
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    // Email on change handler for input text 
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValid(validateEmail(e.target.value));
    };


    return (
        <div className="mt-8">
            <div className="text-xs font-bold text-charcoalGrey flex justify-between">
                <label htmlFor="email">Email address</label>
                {!isValid && <label htmlFor="email" className="text-tomato ml-2">Valid email required</label>}
            </div>
            
            <input
                className={`border-2 mt-1 w-full rounded-md py-3 pl-4 
                    ${ isValid ? 'border-Gray' : 'border-tomato' }
                    ${ isValid ? 'focus:outline-dashed' : 'focus:outline-tomato' }
                    ${ isValid ? 'bg-transparent' : 'bg-red-100' }
                `}
                id="email"
                name="email"
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={handleEmailChange}
                required
            />

            <div className="mt-3">
                <Button>Subscribe to monthly newsletter</Button>
            </div>
        </div>
    );
};


export default TextInput;