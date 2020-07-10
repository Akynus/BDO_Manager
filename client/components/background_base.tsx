import * as React from "react";

export default class BackgroundBase extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.loopBG = this.loopBG.bind(this);

        this.state = {
            current: "bg01"
        }
    }

    componentDidMount() {
        setInterval(this.loopBG, 3000);
    }

    private loopBG(): void {
        const values = ["bg01", "bg02", "bg03"];
        const selected = Math.floor(Math.random() * values.length);
        this.setState({
            current: values[selected]
        });
    }

    render() {
        const {current} = this.state;
        return <div className={`background-base ${current}`}/>;
    }
}

interface IProps {
}

interface IState {
    current: string;
}