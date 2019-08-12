import React, { Component } from 'react';
import Cpp from './cpp'
class Apple extends Component {
    render() {
        return (
            <div>
                애플 애플

                <Bpp/>
            </div>
        );
    }
}

class Bpp extends Component {
    render() {
        return (
            <div>
                비피피
                <Cpp/>
            </div>
        );
    }
}

export default Apple;