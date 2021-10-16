import React from 'react';
import './WidgetSm.css'
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1850629/pexels-photo-1850629.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1850629/pexels-photo-1850629.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1850629/pexels-photo-1850629.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1850629/pexels-photo-1850629.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>  
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/1850629/pexels-photo-1850629.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            
        </div>
    )
}
