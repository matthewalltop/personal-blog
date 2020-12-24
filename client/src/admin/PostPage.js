import React, { Component } from 'react';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import "react-mde/lib/styles/css/react-mde-all.css";


export default function PostPage() {
            const [postText, setValue] = React.useState('');
            const [selectedTab, setSelectedTab] = React.useState("write");

            return (
                <div className="container mx-auto">
                    <ReactMde
                    value={postText}
                    onChange={newVal => setValue(`${newVal}`)}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    />
                    <Button variant="primary" size="lg">Submit</Button>
                </div>
            );
    };
