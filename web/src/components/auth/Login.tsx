import * as React from 'react';
import { Link } from 'react-router-dom';
import { login } from './Action';
import Loader from '../common/Loader';
import CONSTANT from '../../constant';
import { onChange, validateForm } from '../../utils';

export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userId: { name: 'userId', value: '', error: '', isRequired: true },
            password: { name: 'password', value: '', error: '', isRequired: true },
            showLoader: false,
            loggedIn:false,
        }
    }
    componentDidMount() {

    }
    public render() {
        const { userId, password, showLoader } = this.state;
        return (
            <div className="kt-grid kt-grid--ver kt-grid--root">
                <div className="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
                    <div className="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                            <div className="kt-login__body">
                                <div className="kt-login__form">
                                    <div className="kt-login__title">
                                        <h3>Sign In</h3>
                                    </div>
                                    <form className="kt-form" onSubmit={this.submitForm}>
                                        <div className="form-group">
                                            <input
                                                className={userId.error.length > 0 ? "form-control is-invalid" : "form-control"}
                                                placeholder="Enter Email Or Mobile number"
                                                name={userId.name}
                                                value={userId.value}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className={password.error.length > 0 ? "form-control is-invalid" : "form-control"}
                                                placeholder="Password"
                                                name={password.name}
                                                value={password.value}
                                                onChange={this.onChange} />
                                        </div>
                                        <div className="kt-login__actions">
                                        <Link to={CONSTANT.url.register} className="kt-link kt-login__signup-link">Sign Up!</Link>
                                        <button type="submit" className="btn btn-primary btn-elevate kt-login__btn-primary">
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {
                    showLoader && <Loader />
                }
            </div>
        )
    }

    private onChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        onChange(this, name, value);
    }

    private submitForm = (e: any) => {
        e.preventDefault();
        if (validateForm(this)) {
            this.setState({ showLoader: true });
            const st = this.state;
            const model = {
                userId: st.userId.value,
                password: st.password.value
            };
            login(model).then((res: any) => {
                this.setState({ showLoader: false });
                if (res) { 
                    window.location.href = CONSTANT.url.ProfileAddress;
                }
            });
        }
    }
}
