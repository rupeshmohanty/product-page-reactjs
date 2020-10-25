import React, { Component } from 'react';
import ProductData from './ProductData';
import classes from '../App.module.css';

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {
            imageSelected: ProductData.colorOptions[0].imageUrl,
            featureSelected: true
        }
    }

    imageClick(image) {
        this.setState({
            imageSelected: image
        })
    }

    featureClick(feat) {
        if(feat === "Time") {
            this.setState({
                featureSelected: true
            })
        } else {
            this.setState({
                featureSelected: false
            })
        }
    }

    render() {
        
        const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
        const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

        const imageList = ProductData.colorOptions.map((option) => {
            return(
                <div style = {{display: "inline-block"}} key = { option.imageUrl } onClick = { () => this.imageClick(option.imageUrl) }>
                    <img src = { option.imageUrl } alt = { option.styleName } width = "30" height = "30"/> 
                </div>
            );
        });

        return(
            <div className = "row">
                
                <div className = "col-md-4">
                    <img src = { this.state.imageSelected } alt = "Selected" width = "300" height = "300"/>
                    
                    {
                        this.state.featureSelected ? (
                            <div className = {classes.TimeSection}>
                                <p>{`${currentHour}:${currentMinute}`}</p>
                            </div>
                        ) : (
                            <div className = {classes.HeartBeatSection}>
                                <i className = "fas fa-heartbeat"></i>
                                <p>78</p>
                            </div>
                        )
                    }
                </div>

                <div className = "col-md-8">
                    <h1>{ ProductData.title }</h1>
                    <p>{ ProductData.description }</p>
                    <strong>Select a Color</strong><br/>
                    <span>
                        { imageList }
                    </span><br/><br/>
                    
                    <strong>Features</strong><br/>
                    <div style = {{display: "inline-block"}}>
                        <button className = "btn btn-secondary" onClick = { () => this.featureClick(ProductData.featureList[0]) }>{ProductData.featureList[0]}</button>&nbsp;
                        <button className = "btn btn-secondary" onClick = { () => this.featureClick(ProductData.featureList[1]) }>{ProductData.featureList[1]}</button>
                    </div><br/><br/>

                    <button className = "btn btn-info">Buy Now</button>
                </div>
            
            </div>
        );

    }

}

export default Product;