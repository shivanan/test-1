import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const Test_1Widget: React.FunctionComponent<IWidgetProps> = (props) => {
    let [value,setValue] = React.useState(20);
    React.useEffect(()=>{
        props.uxpContext.executeAction('E1','GetData',{},{json:true}).then(data => setValue(data.value));
    },[]);
    return (
        <WidgetWrapper className='e1'>
           <div className='value'>{`Consumption: ${value}`}</div>
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "test_1",
    widget: Test_1Widget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "test_1",
    label: "Test_1",
    // click: () => alert("Hello"),
    component: Test_1Widget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"test_1",
    component: Test_1Widget
});
*/