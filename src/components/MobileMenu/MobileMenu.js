import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
    },
    {
        id: 3,
        title: 'About Us',
        link: '/about',
    },
    {
        id: 5,
        title: 'Services',
        link: '/service',
        submenu: [
            {
                id: 51,
                title: 'Web Development',
                link: '/service/web-development'
            },
            {
                id: 52,
                title: 'Digital Marketing',
                link: '/service/digital-marketing'
            },
            {
                id: 53,
                title: 'UI/UX',
                link: '/service/ui-ux'
            },
            {
                id: 54,
                title: 'Mobile Development',
                link: '/service/mobile-development'
            },
            {
                id: 55,
                title: 'Graphic Design',
                link: '/service/graphic-design'
            },
            {
                id: 56,
                title: 'Terms & Conditions',
                link: '/terms-and-conditions'
            },
            {
                id: 57,
                title: 'Privacy Policy',
                link: '/privacy-policy'
            }
        ]
    },
    {
        id: 6,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 61,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 62,
                title: 'Blog Details',
                link: '/blog-single/AI-in-Neuroimaging-IXICOs-Cloud-Transformation'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }
];

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="xb-menu-primary clearfix">
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="menu-item menu-item-has-children active">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <Link onClick={ClickHandler} className="active"
                                                            to={submenu.link}>{submenu.title}</Link>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <Link className="active"
                                to={item.link}>{item.title}</Link>
                        }
                    </ListItem>
                )
            })}
        </ul>
    )
}

export default MobileMenu;