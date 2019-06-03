import React, { Component } from 'react'
import './backscreen.css'
import ScreenContent from '../screenContent/ScreenContent'
export default class Backscreen extends Component {
    render() {
        return (
            <div className="back p-2">
                <ScreenContent />
            </div>
        )
    }
}
