import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../css/WorkPage.css';

import logo from '../../assets/images/logo.png';
import Notifications from '../../assets/images/notification-icon.png';
import Profile from '../../assets/images/profile-icon.png';
import documentImage from '../../assets/images/document.png';
import editIcon from '../../assets/images/edit-icon.png';

const WorkPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [signatures, setSignatures] = useState([]);
    const [selectedSignature, setSelectedSignature] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [placedSignatures, setPlacedSignatures] = useState([]);
    const [draggedSignatureIndex, setDraggedSignatureIndex] = useState(null);
    const documentRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        axios.get("http://localhost:5000/images")
            .then(response => {
                setSignatures(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the images!", error);
            });
    }, []);

    const handleMouseDown = (signature, e, index = null) => {
        e.preventDefault();
        setSelectedSignature(signature);
        setDragging(true);
        setDraggedSignatureIndex(index);
    };

    const handleMouseMove = (e) => {
        if (dragging && selectedSignature) {
            const documentRect = documentRef.current.getBoundingClientRect();
            const newPosition = {
                x: e.clientX - documentRect.left - 40,
                y: e.clientY - documentRect.top - 60
            };
            if (draggedSignatureIndex !== null) {
                const updatedSignatures = [...placedSignatures];
                updatedSignatures[draggedSignatureIndex].position = newPosition;
                setPlacedSignatures(updatedSignatures);
            } else {
                const newSignature = {
                    ...selectedSignature,
                    position: newPosition
                };
                setPlacedSignatures([...placedSignatures, newSignature]);
                setDraggedSignatureIndex(placedSignatures.length); // Set index for dragging
            }
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
        setSelectedSignature(null);
        setDraggedSignatureIndex(null);
    };

    return (
        <div className='workpage' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <header className='workpage-header'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='icons'>
                    <img src={Notifications} alt="Notifications" />
                    <img src={Profile} alt="Profile" />
                </div>
            </header>

            <div className='workpage-content'>
                <div className='document' ref={documentRef}>
                    <img src={documentImage} alt='Document' />
                    {placedSignatures.map((sig, index) => (
                        <img
                            key={index}
                            src={sig.url}
                            alt={sig.description}
                            style={{ position: 'absolute', left: sig.position.x, top: sig.position.y, cursor: 'pointer' }}
                            onMouseDown={(e) => handleMouseDown(sig, e, index)}
                        />
                    ))}
                </div>
                {isExpanded && (
                    <div className='sidebar'>
                        <button className='save-button'>파일 저장하기</button>
                        <div className='signatures'>
                            {signatures.map(signature => (
                                <img
                                    key={signature.id}
                                    src={signature.url}
                                    alt={signature.description}
                                    onMouseDown={(e) => handleMouseDown(signature, e)}
                                />
                            ))}
                        </div>
                        <button className='confirm-button'>확인</button>
                    </div>
                )}
            </div>
            <button className='expand-button' onClick={toggleExpand}>
                <img src={editIcon} alt="Edit" />
            </button>
        </div>
    );
};

export default WorkPage;
