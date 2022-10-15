import {Card, Col} from "react-bootstrap";
import React from "react";

function UserCard ({data}) {
    console.log(data)
    return (
        <Card className={`p-2 border-light rounded ${data.isActive === "active" ? "bg-dark text-light" : "bg-light text-dark"}`}>
        <Col>
            <img
                src={"https://cdn-icons-png.flaticon.com/512/219/219983.png"}
                className={`card-img img-thumbnail justify-content-center bg-light ${data.isActive === "passive" && "blur-img"}`}
                width={30}
                height={30}
                style={{ border: "none" }}
                alt={"profil_image"}
            />
        </Col>
        <Card.Body>
            <Card.Title
                style={{
                    minHeight: "50px",
                    maxHeight: "50px",
                    overflow: "hidden",
                    whiteSpace: "pre-wrap",
                    textOverflow: "ellipsis",
                }}
            >
                {data.username}
            </Card.Title>
            <i
                style={{
                    color: "	rgb(168,168,168)",
                }}
            >{data.email}
            </i>

            <Card.Text>
                <small>{data.createdAt}</small>
            </Card.Text>

            <Card.Text
                style={{
                    minHeight: "60px",
                    maxHeight: "60px",
                    overflow: "hidden",
                    whiteSpace: "pre-wrap",
                    textOverflow: "ellipsis",
                }}
            >
                Status: {data.isActive}
            </Card.Text>

            <div className={"w-100"}>
                {
                    data.isActive === "active" ?
                        <button type="button" className="btn btn-warning btn-sm">Pacify</button> :
                        <button type="button" className="btn btn-success btn-sm">Activate</button>

                }
            </div>
        </Card.Body>
    </Card>)
}

export default UserCard