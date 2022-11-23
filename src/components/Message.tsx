import { useState } from 'react';
// material-ui
import { Snackbar, Alert } from '@mui/material';

function Message(props) {
    const { content, duration, type } = {...props};
    const [open, setOpen] = useState(true);
    const handleClose = (event, reason) => {
        setOpen(false);
    };
    return (
        <Snackbar open={open} autoHideDuration={duration} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={handleClose}>
            <Alert severity={type} variant="standard">
                {content}
            </Alert>
        </Snackbar>
    );
}

import { createRoot } from 'react-dom/client';

const messageService = {
    dom: null,
    success({ content, duration = 1500 }) {
        // 创建一个dom
        this.dom = document.createElement('div');
        // 定义组件，
        const JSXdom = <Message content={content} duration={duration} type="success"></Message>;
        // 渲染DOM
        createRoot(this.dom).render(JSXdom);
        // 置入到body节点下
        document.body.appendChild(this.dom);
    },
    error({ content, duration }) {
        this.dom = document.createElement('div');
        const JSXdom = <Message content={content} duration={duration} type="error"></Message>;
        createRoot(this.dom).render(JSXdom);
        document.body.appendChild(this.dom);
    },
    warning({ content, duration }) {
        this.dom = document.createElement('div');
        const JSXdom = <Message content={content} duration={duration} type="warning"></Message>;
        createRoot(this.dom).render(JSXdom);
        document.body.appendChild(this.dom);
    },
    info({ content, duration }) {
        this.dom = document.createElement('div');
        const JSXdom = <Message content={content} duration={duration} type="warning"></Message>;
        createRoot(this.dom).render(JSXdom);
        document.body.appendChild(this.dom);
    }
};

export default messageService;
