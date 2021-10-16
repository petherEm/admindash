import React from 'react';
import FeaturedInfo from '../../featuredinfo/FeaturedInfo';
import Chart from '../../chart/Chart';
import './Home.css';
import { userData } from '../../../dummyData';
import WidgetLg from '../../widgetLg/WidgetLg';
import WidgetSm from '../../widgetSm/WidgetSm';

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
