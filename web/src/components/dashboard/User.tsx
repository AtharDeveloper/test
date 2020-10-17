import * as React from 'react';
import { getUserDetail } from '../../utils';

export default class ComponentName extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            userProfile: undefined,
            userDetail: getUserDetail(), 
        }
    }

    componentDidMount() {
    }

    render() {
        const { userDetail } = this.state
        return (
            <div className="kt-grid__item kt-app__toggle kt-app__aside" id="kt_user_profile_aside">
                <div className="kt-portlet kt-portlet--height-fluid-">
                    <div className="kt-portlet__head  kt-portlet__head--noborder">
                        <div className="kt-portlet__head-label">
                            <h3 className="kt-portlet__head-title">
                            </h3>
                        </div>
                    </div>
                    <div className="kt-portlet__body kt-portlet__body--fit-y">
                        <div className="kt-widget kt-widget--user-profile-1">
                            {
                                <div className="kt-widget__head">
                                    <div className="kt-widget__content">
                                        <div className="kt-widget__section">
                                            <a href="#" className="kt-widget__username">
                                                {userDetail.name}
                                              </a>
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="kt-widget__body">
                                {
                                    <div className="kt-widget__content">
                                        <div className="kt-widget__info">
                                            <span className="kt-widget__label">Email:</span>
                                            <a href="#" className="kt-widget__data"> {userDetail.emailId}</a>
                                        </div>
                                        <div className="kt-widget__info">
                                            <span className="kt-widget__label">Phone:</span>
                                            <a href="#" className="kt-widget__data">{userDetail.mobile}</a>
                                        </div>
                                        <div className="kt-widget__info">
                                            <span className="kt-widget__label">Id #:</span>
                                            <a href="#" className="kt-widget__data">{userDetail._id}</a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

