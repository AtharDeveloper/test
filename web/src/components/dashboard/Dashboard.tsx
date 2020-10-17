import * as React from 'react';
import { getUserDetail } from '../../utils';
import User from './User';

export default class Component extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userDetail: getUserDetail()
        }

    }

    componentDidMount() {
    }

    public render() {
        return (
            <React.Fragment>

                <div className="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
                    {this.contentHeader()}
                    {this.renderBody()}
                </div>
            </React.Fragment >
        )
    }
    contentHeader = () => {
        const { userDetail } = this.state
        return (
            <div className="kt-subheader   kt-grid__item" id="kt_subheader">
                <div className="kt-container  kt-container--fluid ">
                    <div className="kt-subheader__main">
                        <h3 className="kt-subheader__title">
                            Welcome to {userDetail.name}
                        </h3>

                    </div>

                </div>
            </div>
        )
    }

    renderBody = () => {
        return (
            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
                <div className="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
                    <User />
                </div>
            </div>
        )
    }
}


