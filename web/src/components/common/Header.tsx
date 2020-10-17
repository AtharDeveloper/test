import React from 'react';

import { getUserDetail } from '../../utils';
import HeaderBG from '../../assets/media/misc/bg-1.jpg';

import CONSTANT from '../../constant';

export default class Header extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
        }

    }
    componentDidMount() {
    }
    render() {
        return (
            <div id="kt_header" className="kt-header kt-grid__item  kt-header--fixed" style={{ borderBottom: '2px solid #f48fb1' }}>
                <div className="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
                </div>
                <div className="kt-header__topbar">
                    {this.userBar()}
                </div>
            </div>
        )
    }

    private userBar = () => {
        return (
            <div className="kt-header__topbar-item kt-header__topbar-item--user">
                <div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
                    <div className="kt-header__topbar-user">
                        <span className="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
                        <span className="kt-header__topbar-username kt-hidden-mobile">{getUserDetail().name}</span>
                    </div>
                </div>
                <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">
                    <div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x" style={{ backgroundImage: `url(${HeaderBG})` }}>
                        <div className="kt-user-card__name">
                            {getUserDetail().name}
                        </div>
                    </div>

                    <div className="kt-notification">
                        <div className="kt-notification__custom kt-space-between">
                            <a href={CONSTANT.url.logout} className="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out</a>
                          </div>
                    </div>
                </div>
            </div>


        )
    }
}


