import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function Comment() {
    return (
        <Card className="mb-3 p-2 border-light rounded" style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
            <Card.Body>
                <Row>
                    <Col md={1}>
                        <img
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ryuUgtvfYqiCoXcB6tIbwd4hFOZIjSonUkUWqcQV_xGMp7f65bSsxSJ3iXPDAew2iOI&usqp=CAU"}
                            className="card-img img-thumbnail justify-content-center"
                            style={{ border: "3px solid #F0F0F0", borderRadius:"50%", maxHeight:"60px", maxWidth:"60px" }}
                            alt={"Profil"}
                        />
                    </Col>
                    <Col md={11}>
                            <Col md={12} className={"d-flex"}>
                                 <ReactStars
                                     count={5}
                                     value={3.7}
                                     size={16}
                                     isHalf={true}
                                     activeColor="#ffd700"
                                 />

                                 <p>Me** Yi*******</p>
                                <p>18 Nisan 2022 </p>
                            </Col>
                        <Row>
                            <Col md={12} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet delectus
                                    dolorem excepturi explicabo labore molestias nisi quia quis quo repellendus sapiente
                                    sint, soluta sunt unde vero. Adipisci beatae facilis ipsa labore minima officia optio
                                    quasi quis quos unde. A accusamus aliquam architecto aspernatur autem corporis cupiditate
                                    delectus, dolor earum enim, eos error est explicabo facere fugit, impedit iusto laborum magnam
                                    magni minima necessitatibus nobis odio officia omnis pariatur perferendis perspiciatis porro
                                    provident quaerat repellat reprehenderit saepe sunt unde vitae voluptate voluptates voluptatibus.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Comment;
