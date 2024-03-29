// Holds all elements relevant to uploading/updating the config of the user
import { TextareaAutosize } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Image as MemoImage } from "./Image";

export const CONFIG = {
    "topIcons": [
        {"name": "Nathaniel Fish", "alias": "NF", "useimage": "0"},
        {"name": "Mihir Srivastava", "alias": "MS", "useimage": "0", "image": "mihir"},
        {"name": "Joe Bruin", "alias": "JB", "useimage": "0"},
        {"name": "Jack Black", "alias": "JB", "useimage": "0"},
        {"name": "Gene Block", "alias": "GB", "useimage": "0"},
        {"name": "Donald Trump", "alias": "DT", "useimage": "0"},
    ],
    "transactions": [
        {
            "useimage": "0",
            "image": "riversidebhangra",
            "name": "Tanishaa Singh",
            "tag": "@riversidebhangra",
            "alias": "TS",
            "payer": "You",
            "description": "Sidhu - 1 Ticket",
            "passedtime": "30m",
            "amount": "7",
            "date": "March 25, 2024, 3:21 PM",
            "type": "Payments between friends",
            "transactionid": "4008402878509301361",
            "banknumber": "9418"
        },
        {
            "useimage": "0",
            "image": "bhangra",
            "name": "Bruin Bhangra",
            "tag": "@BruinBhangra",
            "alias": "BB",
            "payer": "You",
            "description": "pre-sale",
            "passedtime": "3d",
            "amount": "8",
            "date": "March 25, 2024, 3:21 PM",
            "type": "Payments between friends",
            "transactionid": "4007265878509301361",
            "banknumber": "9418"
        },
        {
            "useimage": "0",
            "image": "mihir",
            "name": "Mihir Srivastava",
            "tag": "@srivastmi",
            "alias": "MS",
            "payer": "You",
            "description": "investments",
            "passedtime": "5d",
            "amount": "1000000",
            "date": "February 20, 2024, 3:21 PM",
            "type": "Payments between friends",
            "transactionid": "4007265878509301361",
            "banknumber": "9418"
        },
        {
            "useimage": "0",
            "image": "",
            "name": "Nathaniel Fish",
            "tag": "@Nathaniel-Fish-1",
            "alias": "MS",
            "payer": "Mihir Srivastava",
            "description": "roommate bills",
            "passedtime": "7d",
            "amount": "",
            "date": "February 20, 2024, 3:21 PM",
            "type": "Payments between friends",
            "transactionid": "4007265878509301361",
            "banknumber": "9418"
        },
    ]
};


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

            const ctx = canvas.getContext('2d')!;
            ctx.drawImage(image, 0, 0, width, height);

            canvas.toBlob((blob) => {
                resolve(new File([blob!], "file", { type: 'image/jpeg' }));
            }, 'image/jpeg', .7);
        };

        image.onerror = (error) => {
            reject(error);
        };
    });
};

export function FileButton(props: {}) {
    const [file, setFile] = useState<File | null>(null);
    const [name, setName] = useState("");

    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setFile(evt.target.files![0]);
    };

    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setName(evt.target.value);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        const resized = await resizeImage(file as unknown as MediaSource, 300);
        formData.append('file', resized);
        formData.append('filename', name);

        try {
            let response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('File uploaded successfully');
            }
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
        {imageUrl && <MemoImage src={imageUrl} />}
    </div>;
}


export function Config(props: {}) {
    const [contents, setContents] = useState('');

    const handleGet = async() => {
        try {
            let response = await fetch('/getconfig', {
                method: 'GET',
            });
            if (!response.ok) {
                return alert('Something went wrong in fetching config.');
            }
            let json = await response.json();

            setContents(JSON.stringify(json, null, 2) || 'invalid response');
        } catch (error) {
            console.error('Error getting response:', error);
        }
    }

    const handlePost = async () => {
        const formData = new FormData();
        try {
            const parsed = JSON.parse(contents);
            if (typeof(parsed) != 'object') {
                throw Error()
            }
            formData.append('config', contents);
        } catch (err) {
            return alert("Contents are not valid JSON.")
        }

        try {
            let response = await fetch('/postconfig', {
                method: 'POST',
                body: formData,
            });
            alert('Config uploaded.');
            if (!response.ok) {
                return alert("The config was invalid.")
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return <div>
        <textarea
            value={contents}
            onChange={(evt) => setContents(evt.target.value)}
            style={{
                minWidth:"500px",
                minHeight:"500px"
            }}
        ></textarea><br />
        <button onClick={handleGet}>Get Config</button>
        <button onClick={handlePost}>Upload Config</button>
        <div style={{height: "200px"}}></div>
    </div>;
}