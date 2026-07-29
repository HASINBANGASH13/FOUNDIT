import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
    UploadCloud,
    X,
    Image as ImageIcon,
} from "lucide-react";

function ImageUploader({ image, setImage }) {

    const onDrop = useCallback((acceptedFiles) => {

        if (acceptedFiles.length > 0) {

            setImage(acceptedFiles[0]);

        }

    }, [setImage]);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({

        accept: {
            "image/*": [],
        },

        multiple: false,

        onDrop,

    });

    return (

        <div className="w-full">

            <label className="block mb-3 font-semibold text-slate-700">

                Upload Image

            </label>

            <div
                {...getRootProps()}
                className={`
                    relative
                    rounded-3xl
                    border-2
                    border-dashed
                    transition-all
                    duration-300
                    cursor-pointer
                    overflow-hidden
                    ${
                        isDragActive
                            ? "border-sky-500 bg-sky-50"
                            : "border-slate-300 hover:border-sky-500"
                    }
                `}
            >

                <input {...getInputProps()} />

                {

                    image ? (

                        <div className="relative">

                            <img
                                src={URL.createObjectURL(image)}
                                alt="preview"
                                className="w-full h-80 object-cover"
                            />

                            <button
                                type="button"
                                onClick={(e) => {

                                    e.stopPropagation();

                                    setImage(null);

                                }}
                                className="absolute top-4 right-4 h-11 w-11 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
                            >

                                <X size={20} />

                            </button>

                        </div>

                    ) : (

                        <div className="py-20 px-6 flex flex-col items-center">

                            <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center">

                                <UploadCloud
                                    size={42}
                                    className="text-sky-600"
                                />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold">

                                Drag & Drop Image

                            </h3>

                            <p className="mt-3 text-slate-500">

                                or click to browse your files

                            </p>

                            <div className="mt-8 flex items-center gap-2 text-slate-400">

                                <ImageIcon size={18} />

                                PNG • JPG • JPEG

                            </div>

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default ImageUploader;