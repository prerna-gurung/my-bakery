import { useForm } from 'react-hook-form';
import Navbar from '../components/common/Navbar';
import '../styles/login.css';

function Login(){
    const delay = d => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, d * 1000);
        });
    };

    const onsubmit = async (data) => {
        await delay(3);
        console.log(data);
        if (data.username !== "Prerna") {
            setError("myform", { message: "Your credentials are invalid" });
        }
    };

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    return (
        <>
            <Navbar/>
            <div className="form-container">
                {isSubmitting && <div className="loading">Loading...</div>}
                <h2 className="form-title">Login</h2>
                <form className="bakery-form" onSubmit={handleSubmit(onsubmit)}>
                    <label className="form-label">Username</label>
                    <input 
                        type="text" 
                        {...register('username', {
                            required: { value: true, message: "This field is required" },
                            minLength: { value: 3, message: "Min length is 3" },
                            maxLength: { value: 10, message: "Max length is 10" }
                        })} 
                        className="form-input" 
                        placeholder="Username" 
                    />
                    {errors.username && <div className='error-msg'>{errors.username.message}</div>}
                    
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            minLength: { value: 7, message: "The min length of password is 7" },
                            required: { value: true, message: "This field is required" }
                        })}
                        className="form-input"
                        placeholder="Password"
                    />
                    {errors.password && <div className='error-msg'>{errors.password.message}</div>}
                    
                    <input disabled={isSubmitting} className="submit-btn" type="submit" value="Login" />
                    {errors.myform && <div className='error-msg'>{errors.myform.message}</div>}
                    {errors.blocked && <div className='error-msg'>{errors.blocked.message}</div>}
                </form>
            </div>
        </>
    );
}

export default Login;
