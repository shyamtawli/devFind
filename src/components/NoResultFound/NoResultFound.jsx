import React from "react";
import "./NoResultFound.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFrown} from '@fortawesome/free-solid-svg-icons';
export default function NoResultFound() {
    return (
        <div className="no-result-container">
            <div className="no-result-card">
                <div className="no-results">
                    <FontAwesomeIcon icon={faFrown} size="5x"/>
                    <div className="text">
                    <h2>No Results Found</h2>
                    <p>We couldn't find any results for your search.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
