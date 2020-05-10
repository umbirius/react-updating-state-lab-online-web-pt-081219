// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitRateToTwelve = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionToSevenTwenty = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }


    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitRateToTwelve}>Bitrate {this.state.settings.bitrate}</button>,
                <button className='resolution' onClick={this.resolutionToSevenTwenty}> Resolution {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}