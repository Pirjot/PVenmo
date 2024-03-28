import React from "react";

import { useState } from "react";
import { TopBar } from "./TopBar";
import { BottomBar } from "./BottomBar";
import { Transactions } from "./Transactions";
import { PaymentPage } from "./PaymentPage";
import { Slide } from "@mui/material";

const resizeImage = async (file: MediaSource, maxWidth: number) => {
    return new Promise<File>((resolve, reject) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);

        image.onload = () => {
            let width = image.width;
            let height = image.height;

            if (width > maxWidth) {
                const aspectRatio = width / height;
                width = maxWidth;
                height = width / aspectRatio;
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, width, height);

            canvas.toBlob((blob) => {
                resolve(new File([blob], "file", { type: 'image/jpeg' }));
            }, 'image/jpeg', 0.7); // Compression quality (0.7 = 70%)
        };

        image.onerror = (error) => {
            reject(error);
        };
    });
};

export function FileButton(props: {}) {
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");

    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setFile(evt.target.files[0]);
    };

    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setName(evt.target.value);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        const resized = await resizeImage(file, 500);
        formData.append('file', resized);
        formData.append('filename', name);

        try {
            let response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    };

    return <div>
        <input type="file" onChange={handleFileChange} />
        <input type="text" onChange={handleNameChange} />
        <button onClick={handleUpload}>Upload</button>
    </div>;
}

export function GetFileButton(props: {}) {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState('');

    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setName(evt.target.value);
    };

    const handleGet = async () => {
        const formData = new FormData();
        formData.append('filename', name);

        try {
            let response = await fetch('/download', {
                method: 'POST',
                body: formData,
            });
            alert('File uploaded successfully');
            if (!response.ok) {
                return alert("Didn't find file.")
            }
            let blob = await response.blob();
            setImageUrl(URL.createObjectURL(blob));
        } catch (error) {
            console.error('Error getting file:', error);
        }
    };

    return <div>
        <input type="text" onChange={handleNameChange} />
        <button onClick={handleGet}>Get</button>
        {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
    </div>;
}

export function VenmoApp(props: {}) {
    // States
    const [come, setCome] = useState(false);

    function slide() {
        setCome(!come);
    }

    let button = <button onClick={slide}>Hello</button>;

    let mainPage = <div style={{
        height:"100%",
        zIndex:"1",
        width:"100%",
        overflowX: "clip"
    }}>
        <TopBar />
        <Transactions />
        {button}
        <FileButton />
        <GetFileButton />
        <div style={{
            height: "500px" // Change this back to 200px
        }}></div>
        <BottomBar />
    </div>;

    let paymentSlide = <Slide style={{
        position: "fixed",
        top: "0",
        left: "0",
    }}
    direction="left" in={come}>
        <div style ={{
            height:"100%",
            zIndex:"1",
            width:"100%",
            overflowX: "clip"
        }}><PaymentPage setCome={setCome} /></div>
    </Slide>;

    return <>
    {come ? <div></div> : mainPage}
    {paymentSlide}
    </>;
}

