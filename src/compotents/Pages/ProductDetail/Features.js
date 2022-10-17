import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {CardTitle, Table} from "reactstrap";
import ReactStars from "react-rating-stars-component";

function Features({ productDetail }) {
    return (
        <div>
            <h4>Ürün Özellikleri</h4>
            <table className="table table-borderless">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Features;
