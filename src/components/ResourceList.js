import React from 'react';

class ResourceList extends React.Component {
    render() {
        return (
        <div>
            Resource List: {this.props.resource}
        </div>
        );
    }
}

export default ResourceList;