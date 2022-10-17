import React from "react";
import Comment from "./Comment";

function Comments({ productDetail }) {
    return (
        <div className="mt-4 mb-3">
            <h4>Değerlendirmeler</h4>
            <div className="row">
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
            <div className={"d-flex justify-content-center align-items-center mt-3"}>
                <button className={"btn btn-primary"}>Daha fazla değerlendirme yükle</button>
            </div>
        </div>
    );
}

export default Comments;
