import * as React from "react";
import {WithStyles} from "@material-ui/core";
import style from "./style";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.loopBG = this.loopBG.bind(this);

        this.state = {
            bg: 'bg01'
        }
    }

    componentDidMount() {
        setInterval(this.loopBG, 5000);
    }

    private loopBG(): void {
        const values = ["bg01", "bg02", "bg03"];
        const selected = Math.floor(Math.random() * values.length);
        this.setState({
            bg: values[selected]
        });
    }

    render() {
        const {classes, children} = this.props;
        const {bg} = this.state;
        return <div className={`${classes.root} ${bg}`}>
            <div className={classes.content}>
                {children}
            </div>
        </div>;
    }
}

interface IProps extends WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
    bg: string;
}