export function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
        image.onerror = e => reject(e);
    });
}

export function imageToCanvas(image) {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas;
}

export function canvasToBlob(canvas, type, quality) {
    return new Promise(resolve => {
        canvas.toBlob(
            blob => resolve(blob),
            type || 'image/jpeg',
            quality || 1.0);
    });
}

export function blobToDataURL(blob) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onloadend = e => resolve(e.target.result);
        reader.onerror = e => reject(e);
        reader.readAsDataURL(blob);
    });
}

export function dataURLToBlob(dataURL) {
    let info = dataURL.split(',');
    let mime = info[0].match(/:(.*?);/)[1];
    let text = atob(info[1]);
    let data = new Uint8Array(text.length);
    for (let i = 0; i < text.length; ++i) {
        data[i] = text.charCodeAt(i);
    }
    return new Blob([data], {
        type: mime
    });
}

export function imageToBlob(image, type, quality) {
    let canvas = imageToCanvas(image);
    return canvasToBlob(canvas, type, quality);
}

export function loadBlob(url, type, quality) {
    return loadImage(url).then(image => imageToBlob(image, type, quality));
}