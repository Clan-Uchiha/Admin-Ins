"use client"
import { ConnectWallet, useStorageUpload, MediaRenderer } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useStateContext } from "@/context/StateContext";


const Upload: NextPage = () => {
    const [uris, setUris] = useState<string[]>([]);

    const { mutateAsync: upload } = useStorageUpload();
    const onDrop = useCallback(
        async (acceptedFiles: File[]) => {
            const _uris = await upload({ data: acceptedFiles });
            setUris(_uris);
            console.log(_uris);
        },
        [upload]
    );
    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button>add files here to upload into ipfs</button>
            </div>
            <div>

                {uris.map((uri) => {
                    return (
                        <MediaRenderer key={uri} src={uri} />
                    )
                })}
            </div>

        </>
    )
};

export default Upload;