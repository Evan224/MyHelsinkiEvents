import * as React from 'react';
import Alert from '@mui/material/Alert';


export default function ActionAlerts(props) {
    const {content } = props;
    const severity = props.severity || 'success';
    const callback = props.callback;

    if(!open){
        return null;
    }

    React.useEffect(() => {
        setTimeout(() => {
            callback();
        },3000);
    }, [open]);

    return (
        <Alert>
            {content}
        </Alert>
    );
}