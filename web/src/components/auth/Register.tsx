import * as React from 'react';
import { Link } from 'react-router-dom';
import CONSTANT from '../../constant';
import Loader from '../common/Loader';
import { onChange, validateForm, getStorage } from '../../utils';
import { registerCompany } from './Action';

class Register extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            emailId: { name: 'emailId', value: '', error: '', isRequired: true },
            mobile: { name: 'mobile', value: '', error: '', isRequired: true },
            name: { name: 'name', value: '', error: '', isRequired: true },
            password: { name: 'password', value: '', error: '', isRequired: true },
            showLoader: false,
            locale: getStorage(CONSTANT.storage.locale)
        }
    }

    componentDidMount() {
    }

    public render() {
        const { emailId, mobile, name, password, showLoader } = this.state;
        return (
            <div className="fluid-container">
                <div className="row my-3">
                    <div className="col-md-3">
                     </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-md-12">

                                            <div className="form-group">
                                                <label>Your Name *</label>
                                                <input
                                                    type="text"
                                                    className={name.error.length > 0 ? "form-control is-invalid" : "form-control"}
                                                    placeholder="Your full name"
                                                    name={name.name}
                                                    value={name.value}
                                                    onChange={this.onChange} />
                                            </div>
                                            <div className="form-group">
                                                <label>Email *</label>
                                                <input
                                                    type="email"
                                                    className={emailId.error.length > 0 ? "form-control is-invalid" : "form-control"}
                                                    placeholder="Your email"
                                                    name={emailId.name}
                                                    value={emailId.value}
                                                    onChange={this.onChange} />
                                            </div>
                                            <div className="form-group">
                                                <label>Mobile *</label>
                                                <input
                                                    className={mobile.error.length > 0 ? "form-control is-invalid" : "form-control"}
                                                    placeholder="Your mobile number"
                                                    name={mobile.name}
                                                    maxLength={10}
                                                    value={mobile.value}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Password *</label>
                                                <input
                                                    type="password"
                                                    className={password.error.length > 0 ? "form-control is-invalid" : "form-control"}
                                                    placeholder="Password"
                                                    name={password.name}
                                                    value={password.value}
                                                    onChange={this.onChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-3">
                                            <Link to={CONSTANT.url.login}>Login here</Link>
                                        </div>
                                        <div className="col-md-4">
                                            <button
                                                className="btn btn-primary btn-sm btn-block"
                                                type="submit"
                                                onClick={this.onSubmit}
                                            >
                                            Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    showLoader && <Loader />
                }
            </div >
        )
    }

    private onChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        onChange(this, name, value);
    }

    private onSubmit = (e: any) => {
        e.preventDefault();
        if (validateForm(this)) {
            this.setState({ showLoader: true });
            const sd = this.state;
            const model = {
                name: sd.name.value,
                emailId: sd.emailId.value,
                mobile: sd.mobile.value,
                password: sd.password.value
            };
            registerCompany(model).then((res: any) => {
                this.setState({ showLoader: false });
                if (res) {
                    window.location.href = CONSTANT.url.ProfileAddress;

                }
            });
        }
    }

}

export default Register;