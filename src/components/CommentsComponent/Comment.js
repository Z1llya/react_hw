import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name} = this.props.comment;
        return (
            <div>
                {name}
            </div>
        );
    }
}

export {Comment};