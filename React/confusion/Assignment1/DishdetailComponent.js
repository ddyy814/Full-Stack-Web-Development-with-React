import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('DishDetail Component constructor is invoked');
    }

    componentDidMount(){
        console.log('DishDetail Component componentDidMount is invoked');
    }

    onDishSelect(dish){
        this.setState({ selectedDish: dish});
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div> 
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.state.selectedDish.comments.map((comment) => {
                        return (
                            <ul className="list-unstyled">
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>{comment.author}, {comment.date}</p>
                                </li>
                            </ul>
                        );
                    })}   
                </div> 
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        const detail = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}> 
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log('DishDetail Component render is invoked');

        return(
            <div className="container">
                <div className="row">
                    {detail}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    {this.renderComments(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
export default DishDetail;